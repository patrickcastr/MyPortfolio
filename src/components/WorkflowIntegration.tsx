import { ArrowRight, Info, Server } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CapabilityGroups from './capabilities/CapabilityGroups'
import ScopeNotes from './capabilities/ScopeNotes'
import { usePageMetadata } from '../lib/usePageMetadata'
import { scrollToTop } from '../lib/scrollToElement'
import {
  azureExamples,
  azureSupportingStatement,
  deploymentNote,
  fabricRoute,
  technologyChoices,
  technologySelectionCopy,
  technologySelectionHeading,
} from '../content/capabilityContent'
import { powerPlatformRoute } from '../content/powerPlatformContent'
import {
  implementationChoiceNote,
  integrationBoundaries,
  integrationCapabilityGroups,
  integrationCtaLabel,
  integrationHeroBody,
  integrationHeroHeading,
  integrationHeroSupporting,
  integrationOutcomes,
} from '../content/integrationContent'

const pageTitle = 'Workflow Automation & Systems Integration NZ | Kraftylytix'
const pageDescription =
  'Practical workflow automation, API integration and connected business systems using Power Automate, n8n, Microsoft services and custom development.'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: integrationHeroHeading,
  description: integrationHeroSupporting,
  serviceType: 'Workflow automation and systems integration',
  areaServed: 'NZ',
  provider: { '@type': 'Organization', name: 'Kraftylytix' },
}

const WorkflowIntegration = () => {
  usePageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: '/workflow-automation-integration',
    structuredData,
  })

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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Integration & Automation
            </p>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {integrationHeroHeading}
              </span>
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-xl font-semibold leading-relaxed text-gray-800">
              {integrationHeroSupporting}
            </p>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600">{integrationHeroBody}</p>

            <Link
              to="/contact?service=integration-automation"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              {integrationCtaLabel}
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>

        <section aria-labelledby="integration-outcomes-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Outcomes</p>
            <h2 id="integration-outcomes-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              What integration work actually changes
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              The tooling matters less than the result. These are the outcomes integration work is usually bought for.
            </p>
          </div>

          <ul className="grid list-none gap-6 md:grid-cols-2 xl:grid-cols-3">
            {integrationOutcomes.map(({ title, description, icon: Icon }) => (
              <li key={title} className="h-full">
                <div className="h-full rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
                  <p className="leading-relaxed text-gray-600">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="integration-capabilities-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Capabilities</p>
            <h2 id="integration-capabilities-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              What we build and connect
            </h2>
          </div>

          <CapabilityGroups groups={integrationCapabilityGroups} />

          <div className="mt-8 flex items-start gap-3 rounded-[2rem] border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md md:p-8">
            <Info className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
            <p className="leading-relaxed text-gray-700">{implementationChoiceNote}</p>
          </div>
        </section>

        <section aria-labelledby="technology-selection-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Technology selection</p>
            <h2 id="technology-selection-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              {technologySelectionHeading}
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">{technologySelectionCopy}</p>
          </div>

          <ul className="grid list-none gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technologyChoices.map(({ technology, fit, icon: Icon }) => (
              <li
                key={technology}
                className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/35 p-5 shadow-lg backdrop-blur-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{technology}</p>
                  <p className="leading-relaxed text-gray-600">{fit}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="deployment-heading" className="py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-xl backdrop-blur-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Server className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 id="deployment-heading" className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Where automations run
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">{deploymentNote}</p>
              <p className="leading-relaxed text-gray-600">
                Kraftylytix does not offer a shared hosted automation service. Where n8n is the right fit, the hosting
                and support arrangement is agreed as part of the engagement rather than assumed.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-xl backdrop-blur-md">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">How Azure is used</h2>
              <p className="mb-5 leading-relaxed text-gray-600">{azureSupportingStatement}</p>
              <ul className="space-y-2">
                {azureExamples.map((example) => (
                  <li key={example} className="flex items-start gap-2 text-gray-700">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                    <span className="leading-relaxed">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="integration-scope-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Scope</p>
            <h2 id="integration-scope-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              How integration work is scoped
            </h2>
          </div>

          <ul className="mb-8 grid list-none gap-4 md:grid-cols-2">
            {integrationBoundaries.map((boundary) => (
              <li
                key={boundary}
                className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/35 p-5 shadow-lg backdrop-blur-md"
              >
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                <p className="leading-relaxed text-gray-700">{boundary}</p>
              </li>
            ))}
          </ul>

          <ScopeNotes />
        </section>

        <section aria-labelledby="integration-related-heading" className="py-12 md:py-16">
          <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-xl backdrop-blur-md md:p-10">
            <h2 id="integration-related-heading" className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              Related capabilities
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Integration work often sits between an operational application and a reporting layer.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to={powerPlatformRoute}
                className="group inline-flex items-center justify-center rounded-full border border-blue-200 bg-white/60 px-6 py-3 font-semibold text-blue-700 shadow-md transition-all duration-300 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
              >
                Power Platform services
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
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
            </div>
          </div>
        </section>

        <section className="pb-8 pt-12 md:pb-16 md:pt-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-2xl md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Next step</p>
            <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Which systems should be talking to each other?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-50">
              Tell us what the process is, which applications are involved and where the manual handling happens.
            </p>
            <Link
              to="/contact?service=integration-automation"
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
            >
              {integrationCtaLabel}
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WorkflowIntegration
