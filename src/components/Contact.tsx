import React, { useEffect, useRef, useState } from 'react'
import { AlertCircle, CheckCircle, MapPin, Send } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { primaryCtaLabel } from '../content/siteContent'
import {
  GENERAL_ENQUIRY,
  enquiryGroups,
  enquiryServiceLabel,
  isKnownEnquiryService,
} from '../content/enquiryServices'
import { usePageMetadata } from '../lib/usePageMetadata'
import { scrollToElement, scrollToTop } from '../lib/scrollToElement'

/** Optional external scheduler. When unset, the CTA sends people to the form instead of a dead link. */
const schedulerUrl: string | undefined = (import.meta as any).env.VITE_SCHEDULER_URL

const contactMethods = ['Email', 'Phone call', 'Either'] as const

const Contact = () => {
  const location = useLocation()

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    service: GENERAL_ENQUIRY,
    systems: '',
    message: '',
    preferredContact: 'Email' as (typeof contactMethods)[number],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ success: false, error: false, message: '' })

  const formRef = useRef(null)

  usePageMetadata({
    title: 'Contact Kraftylytix | Business Systems and Power Platform Support',
    description:
      'Tell Kraftylytix about the app, automation or process that needs attention. Book a Power Platform Health Check or ask about an Automation Rescue Sprint or Monthly PowerOps Support.',
    path: '/contact',
  })

  // The app has no global scroll restoration, so land at the top of the page.
  useEffect(scrollToTop, [])

  useEffect(() => {
    const requestedService = new URLSearchParams(location.search).get('service')

    if (!requestedService || !isKnownEnquiryService(requestedService)) {
      return
    }

    setFormData((current) => ({ ...current, service: requestedService }))
  }, [location.search])

  const isServicePreselected = formData.service !== GENERAL_ENQUIRY

  // Composed into the single `message` variable the existing email templates already use.
  const composedMessage = [
    `Service of interest: ${enquiryServiceLabel(formData.service)}`,
    `Business name: ${formData.business.trim() || 'Not provided'}`,
    `Current systems or data sources: ${formData.systems.trim() || 'Not provided'}`,
    `Preferred contact method: ${formData.preferredContact}`,
    '',
    formData.message,
  ].join('\n')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        'service_k2h30qp',
        'template_rc1xvpk',
        formRef.current!,
        '0r6u1TEJ2UhCcEO2h'
      )

      await emailjs.sendForm(
        'service_k2h30qp',
        'template_vuafvm1',
        formRef.current!,
        '0r6u1TEJ2UhCcEO2h'
      )

      console.log('Email sent successfully:', result.text)

      setFormData({
        name: '',
        business: '',
        email: '',
        service: GENERAL_ENQUIRY,
        systems: '',
        message: '',
        preferredContact: 'Email',
      })

      setStatus({
        success: true,
        error: false,
        message: "Message sent successfully. We'll be in touch soon.",
      })

      setTimeout(() => {
        setStatus({ success: false, error: false, message: '' })
      }, 5000)
    } catch (error: any) {
      console.error('Failed to send email:', error)
      setStatus({
        success: false,
        error: true,
        message: 'We could not send your message. Please try again or email Kraftylytix directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-24">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent">
              Contact
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            {primaryCtaLabel}
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              with Kraftylytix
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            If you are dealing with manual processes, disconnected systems, or internal tools that no longer fit the
            business, let&apos;s talk through the workflow and the right next step.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-12">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-gray-900">Start with a practical conversation</h2>
                <p className="mb-12 text-lg leading-relaxed text-gray-600">
                  Share the process that is slowing the team down, the system gap you need to close, or the platform
                  you want to build. Kraftylytix helps businesses scope the work clearly before moving into delivery.
                </p>
              </div>

              <div className="space-y-8">
                <div className="group">
                  {schedulerUrl ? (
                    <a
                      href={schedulerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                      aria-label="Start a discovery conversation with Kraftylytix"
                    >
                      {primaryCtaLabel}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        scrollToElement('contact-form')
                        document.getElementById('contact-name')?.focus({ preventScroll: true })
                      }}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                    >
                      {primaryCtaLabel}
                    </button>
                  )}
                </div>



                <div className="group">
                  <div className="flex items-start space-x-4 rounded-2xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">New Plymouth, Taranaki</p>
                      <p className="mt-1 text-sm text-gray-500">New Zealand based, remote-first delivery for business clients.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">Response Time</h3>
                <p className="text-gray-600">Kraftylytix typically responds within one business day.</p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Tell us what needs to work better</h3>

                {isServicePreselected ? (
                  <p className="mb-8 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-gray-700">
                    Enquiry set to <span className="font-semibold">{enquiryServiceLabel(formData.service)}</span>. You can
                    change this below.
                  </p>
                ) : (
                  <div className="mb-8" />
                )}

                {status.success && (
                  <div className="mb-6 flex items-center space-x-3 rounded-xl border border-green-200 bg-green-50 p-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className="font-medium text-green-800">{status.message}</p>
                  </div>
                )}

                {status.error && (
                  <div className="mb-6 flex items-center space-x-3 rounded-xl border border-red-200 bg-red-50 p-4">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="font-medium text-red-800">{status.message}</p>
                  </div>
                )}

                <form id="contact-form" ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-3 block text-sm font-semibold text-gray-700">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        name="user_name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-business" className="mb-3 block text-sm font-semibold text-gray-700">
                        Business Name
                      </label>
                      <input
                        id="contact-business"
                        type="text"
                        name="business_name"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                        placeholder="Your business"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-email" className="mb-3 block text-sm font-semibold text-gray-700">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        name="user_email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="mb-3 block text-sm font-semibold text-gray-700">
                        Service of Interest
                      </label>
                      <select
                        id="contact-service"
                        name="service_interest"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                      >
                        {enquiryGroups.map(({ label, options }) => (
                          <optgroup key={label} label={label}>
                            {options.map(({ id, name }) => (
                              <option key={id} value={id}>
                                {name}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-systems" className="mb-3 block text-sm font-semibold text-gray-700">
                      Current systems or data sources
                    </label>
                    <input
                      id="contact-systems"
                      type="text"
                      name="current_systems"
                      value={formData.systems}
                      onChange={(e) => setFormData({ ...formData, systems: e.target.value })}
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                      placeholder="e.g. Microsoft 365, SharePoint, Xero, a SQL database, spreadsheets"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-3 block text-sm font-semibold text-gray-700">
                      About the application or process *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      name="enquiry_details"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full resize-none rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-4 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                      placeholder="Describe the app, automation, or process that needs attention, who uses it, and what is going wrong. Please do not include passwords, tenant credentials, or sensitive business data."
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      Please do not send passwords, API keys, tenant credentials, production data, confidential
                      documents or sensitive personal information through this form.
                    </p>
                  </div>

                  <fieldset>
                    <legend className="mb-3 block text-sm font-semibold text-gray-700">
                      Preferred contact method (optional)
                    </legend>
                    <div className="flex flex-wrap gap-4">
                      {contactMethods.map((method) => (
                        <label key={method} className="flex items-center gap-2 text-gray-700">
                          <input
                            type="radio"
                            name="preferred_contact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={() => setFormData({ ...formData, preferredContact: method })}
                            className="h-4 w-4 accent-blue-600"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <input type="hidden" name="message" value={composedMessage} />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group flex w-full items-center justify-center space-x-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl ${
                      isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
