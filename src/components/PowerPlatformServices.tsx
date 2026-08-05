import { AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PowerOpsServiceCards from './powerops/PowerOpsServiceCards'
import ServiceJourney from './powerops/ServiceJourney'
import { usePageMetadata } from '../lib/usePageMetadata'
import { scrollToElement, scrollToTop } from '../lib/scrollToElement'
import { fabricRoute, integrationRoute } from '../content/capabilityContent'
import {
  faqs,
  healthCheckCtaLabel,
  powerOpsIntro,
  powerOpsServices,
  powerPlatformRoute,
  pricingDisclaimer,
  scopeNote,
  warningSigns,
  warningSignsClosing,
} from '../content/powerPlatformContent'

const pageTitle = 'Power Platform Services NZ | Kraftylytix'
const pageDescription =
  'Power Platform Health Checks, Automation Rescue Sprints and ongoing PowerOps support for businesses using Power Apps, Power Automate, Dataverse, SharePoint and Microsoft 365.'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    ...powerOpsServices.map(({ name, summary }) => ({
      '@type': 'Service',
      name,
      description: summary,
      serviceType: 'Microsoft Power Platform consulting',
      areaServed: 'NZ',
      provider: { '@type': 'Organization', name: 'Kraftylytix' },
    })),
  ],
}

const PowerPlatformServices = () => {
  usePageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: powerPlatformRoute,
    structuredData,
  })

  // The app has no global scroll restoration, so land at the top of the page.
  useEffect(scrollToTop, [])

  return (
    <div className="relative overflow-hidden px-4 pb-20 pt-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <section className="py-10 md:py-14">
          <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 text-center shadow-2xl backdrop-blur-md md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Power Platform Services</p>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              Diagnose, rescue and support your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Power Platform solutions
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              {powerOpsIntro}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact?service=health-check"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                {healthCheckCtaLabel}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => scrollToElement('power-platform-faqs')}
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white/60 px-8 py-4 text-base font-semibold text-blue-700 shadow-md transition-all duration-300 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                Read the FAQs
              </button>
            </div>
          </div>
        </section>

        <section aria-labelledby="powerops-services-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Three ways to start</p>
            <h2 id="powerops-services-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Power Platform services that solve real operational problems
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Each offer is fixed in scope, so you know what you are buying before the work starts. Most businesses
              begin with the Health Check.
            </p>
          </div>

          <PowerOpsServiceCards />

          <p className="mt-8 text-center text-sm text-gray-500">{pricingDisclaimer}</p>
        </section>

        <section aria-labelledby="powerops-journey-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Diagnose → Rescue → Support</p>
            <h2 id="powerops-journey-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              A clear path from problem to reliable system
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              You can stop after any step. Nothing is bundled and nothing continues automatically.
            </p>
          </div>

          <ServiceJourney />
        </section>

        <section aria-labelledby="powerops-signs-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Warning signs</p>
            <h2 id="powerops-signs-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Does this sound familiar?
            </h2>
          </div>

          <ul className="grid list-none gap-4 sm:grid-cols-2">
            {warningSigns.map((sign) => (
              <li
                key={sign}
                className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/35 p-5 shadow-lg backdrop-blur-md"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                <p className="font-medium leading-relaxed text-gray-700">{sign}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[2rem] border border-white/40 bg-white/30 p-8 text-center shadow-xl backdrop-blur-md">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">{warningSignsClosing}</p>
            <Link
              to="/contact?service=health-check"
              className="group mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              {healthCheckCtaLabel}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section aria-labelledby="powerops-scope-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Scope</p>
            <h2 id="powerops-scope-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              What each service does and does not cover
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">{scopeNote}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {powerOpsServices.map(({ id, name, boundary }) => (
              <div key={id} className="rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{name}</h3>
                <p className="leading-relaxed text-gray-600">{boundary}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="power-platform-faqs" aria-labelledby="powerops-faq-heading" className="scroll-mt-32 py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">FAQs</p>
            <h2 id="powerops-faq-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-2xl border border-white/40 bg-white/40 shadow-lg backdrop-blur-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left text-lg font-semibold text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 [&::-webkit-details-marker]:hidden">
                  <span>{question}</span>
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold leading-none text-blue-700"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">−</span>
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-gray-600">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section aria-labelledby="powerops-related-heading" className="py-12 md:py-16">
          <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-xl backdrop-blur-md md:p-10">
            <h2 id="powerops-related-heading" className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              Related capabilities
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              If the underlying problem turns out to be reporting or a gap between systems, these are the adjacent
              capability areas.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to={fabricRoute}
                className="group inline-flex items-center justify-center rounded-full border border-blue-200 bg-white/60 px-6 py-3 font-semibold text-blue-700 shadow-md transition-all duration-300 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                Data &amp; Microsoft Fabric
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to={integrationRoute}
                className="group inline-flex items-center justify-center rounded-full border border-blue-200 bg-white/60 px-6 py-3 font-semibold text-blue-700 shadow-md transition-all duration-300 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                Integration &amp; automation
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-8 pt-12 md:pb-16 md:pt-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-2xl md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Next step</p>
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-50">
              Describe the app, flow or process that is causing trouble. Kraftylytix will tell you which of the three
              services fits, or whether it is better left alone.
            </p>
            <Link
              to="/contact?service=health-check"
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
            >
              {healthCheckCtaLabel}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PowerPlatformServices
