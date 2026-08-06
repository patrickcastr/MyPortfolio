import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Contact from './Contact'
import { GENERIC_SEND_FAILURE } from '../lib/describeSendFailure'

vi.mock('@emailjs/browser', () => ({
  default: { sendForm: vi.fn() },
}))

const sendForm = vi.mocked(emailjs.sendForm)

/** Mirrors the SDK's `EmailJSResponseStatus` rejection shape. */
const responseStatus = (status: number, text: string) => ({ status, text })

const renderContact = () =>
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  )

/** Fills every required field. `email` is overridable per test. */
const fillForm = async (user: ReturnType<typeof userEvent.setup>, email: string) => {
  await user.type(screen.getByLabelText(/full name/i), 'Jane Tester')
  await user.type(screen.getByLabelText(/work email/i), email)
  await user.type(screen.getByLabelText(/about the application or process/i), 'Our approvals process is manual.')
}

const submit = () => screen.getByRole('button', { name: /send inquiry/i })

beforeEach(() => {
  sendForm.mockReset()
})

describe('Contact form submission', () => {
  it('rejects a malformed email with a field-level message and never calls the provider', async () => {
    const user = userEvent.setup()
    renderContact()

    // `test@cas.c` passes `<input type="email">`, so only our own check stops it.
    await fillForm(user, 'test@cas.c')
    await user.click(submit())

    expect(await screen.findByText(/enter a complete email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/work email/i)).toHaveAttribute('aria-invalid', 'true')

    // The generic delivery banner must not appear for what is really a typo.
    expect(screen.queryByText(GENERIC_SEND_FAILURE)).not.toBeInTheDocument()
    expect(sendForm).not.toHaveBeenCalled()
  })

  it('clears the field error as soon as the visitor corrects the address', async () => {
    const user = userEvent.setup()
    renderContact()

    await fillForm(user, 'test@cas.c')
    await user.click(submit())
    expect(await screen.findByText(/enter a complete email address/i)).toBeInTheDocument()

    await user.type(screen.getByLabelText(/work email/i), 'o')

    expect(screen.queryByText(/enter a complete email address/i)).not.toBeInTheDocument()
  })

  it('sends a valid submission to both templates and reports success', async () => {
    const user = userEvent.setup()
    sendForm.mockResolvedValue({ status: 200, text: 'OK' })
    renderContact()

    await fillForm(user, 'jane@company.co.nz')
    await user.click(submit())

    expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument()
    expect(sendForm).toHaveBeenCalledTimes(2)

    const [serviceId, notificationTemplate] = sendForm.mock.calls[0]
    const [, confirmationTemplate] = sendForm.mock.calls[1]

    expect(serviceId).toBe('service_k2h30qp')
    expect(notificationTemplate).toBe('template_rc1xvpk')
    expect(confirmationTemplate).toBe('template_vuafvm1')

    // Fields reset so a second enquiry starts clean.
    expect(screen.getByLabelText(/work email/i)).toHaveValue('')
  })

  it('surfaces a provider rejection without claiming the site is broken', async () => {
    const user = userEvent.setup()
    // The live production failure: Gmail OAuth grant revoked.
    sendForm.mockRejectedValue(
      responseStatus(412, 'Gmail_API: Invalid grant. Please reconnect your Gmail account')
    )
    renderContact()

    await fillForm(user, 'jane@company.co.nz')
    await user.click(submit())

    const banner = await screen.findByRole('alert')
    expect(banner).toHaveTextContent(/mail service is temporarily unavailable/i)
    expect(banner).toHaveTextContent(/email Kraftylytix directly/i)

    // "Email us directly" has to be actionable, or the fallback is a dead end.
    const fallback = screen.getByRole('link', { name: /@/ })
    expect(fallback).toHaveAttribute('href', expect.stringMatching(/^mailto:.+@.+\..+/))
  })

  it('offers no direct-email link while the form is working', async () => {
    const user = userEvent.setup()
    sendForm.mockResolvedValue({ status: 200, text: 'OK' })
    renderContact()

    await fillForm(user, 'jane@company.co.nz')
    await user.click(submit())

    await screen.findByText(/message sent successfully/i)
    expect(screen.queryByRole('link', { name: /@/ })).not.toBeInTheDocument()
  })

  it('moves a provider-rejected address onto the email field', async () => {
    const user = userEvent.setup()
    sendForm.mockRejectedValue(responseStatus(422, 'The recipient address is corrupted'))
    renderContact()

    await fillForm(user, 'jane@company.co.nz')
    await user.click(submit())

    expect(await screen.findByText(/rejected by our mail provider/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/work email/i)).toHaveAttribute('aria-invalid', 'true')
  })

  it('reports a connection problem when the endpoint is unreachable', async () => {
    const user = userEvent.setup()
    // fetch() rejects with a TypeError when the API cannot be reached at all.
    sendForm.mockRejectedValue(new TypeError('Failed to fetch'))
    renderContact()

    await fillForm(user, 'jane@company.co.nz')
    await user.click(submit())

    expect(await screen.findByText(/could not reach the mail service/i)).toBeInTheDocument()
  })

  it('tells the visitor not to resubmit when only the confirmation email fails', async () => {
    const user = userEvent.setup()
    sendForm
      .mockResolvedValueOnce({ status: 200, text: 'OK' })
      .mockRejectedValueOnce(responseStatus(412, 'Gmail_API: Invalid grant.'))
    renderContact()

    await fillForm(user, 'jane@company.co.nz')
    await user.click(submit())

    expect(await screen.findByText(/no need to submit it again/i)).toBeInTheDocument()
  })

  it('ignores a second submit while the first is still in flight', async () => {
    const user = userEvent.setup()

    let release: (value: { status: number; text: string }) => void = () => {}
    const pending = new Promise<{ status: number; text: string }>((resolve) => {
      release = resolve
    })
    sendForm.mockReturnValueOnce(pending as never).mockResolvedValue({ status: 200, text: 'OK' })

    renderContact()
    await fillForm(user, 'jane@company.co.nz')

    const button = submit()
    await user.click(button)
    await user.click(button)
    await user.click(button)

    // Only the first submission's notification send has been issued.
    expect(sendForm).toHaveBeenCalledTimes(1)
    expect(button).toBeDisabled()

    release({ status: 200, text: 'OK' })

    await waitFor(() => expect(sendForm).toHaveBeenCalledTimes(2))
    expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument()
  })
})
