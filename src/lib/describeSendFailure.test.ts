import { describe, expect, it } from 'vitest'
import { GENERIC_SEND_FAILURE, describeSendFailure } from './describeSendFailure'

/** Mirrors the SDK's `EmailJSResponseStatus` rejection shape. */
const responseStatus = (status: number, text: string) => ({ status, text })

describe('describeSendFailure', () => {
  it('flags the observed Gmail invalid-grant rejection as needing owner action', () => {
    // The live production response: HTTP 412
    // "Gmail_API: Invalid grant. Please reconnect your Gmail account"
    const failure = describeSendFailure(
      responseStatus(412, 'Gmail_API: Invalid grant. Please reconnect your Gmail account')
    )

    expect(failure.needsOwnerAction).toBe(true)
    expect(failure.field).toBeUndefined()
    expect(failure.message).toContain('email Kraftylytix directly')
  })

  it('routes a provider rejection of the address to the email field', () => {
    const failure = describeSendFailure(responseStatus(422, 'The recipient address is corrupted'))

    expect(failure.field).toBe('email')
    expect(failure.needsOwnerAction).toBe(false)
  })

  it.each([426, 429])('treats %i as a sending-limit problem', (status) => {
    const failure = describeSendFailure(responseStatus(status, 'limit'))

    expect(failure.needsOwnerAction).toBe(true)
    expect(failure.message).toContain('sending limit')
  })

  it('reports a connection problem when the request never got an HTTP status', () => {
    // fetch() rejects with a TypeError when the endpoint is unreachable.
    const failure = describeSendFailure(new TypeError('Failed to fetch'))

    expect(failure.message).toContain('could not reach the mail service')
    expect(failure.needsOwnerAction).toBe(false)
  })

  it('keeps the original generic message for unrecognised statuses', () => {
    expect(describeSendFailure(responseStatus(500, 'boom')).message).toBe(GENERIC_SEND_FAILURE)
    expect(describeSendFailure(responseStatus(400, 'bad request')).message).toBe(GENERIC_SEND_FAILURE)
  })

  it('does not mistake a zero status for a real HTTP response', () => {
    expect(describeSendFailure(responseStatus(0, '')).message).toContain('could not reach the mail service')
  })
})
