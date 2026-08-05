import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, Info } from 'lucide-react'
import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CapabilityGroups from './capabilities/CapabilityGroups'
import ScopeNotes from './capabilities/ScopeNotes'
import { usePageMetadata } from '../lib/usePageMetadata'
import { scrollToTop } from '../lib/scrollToElement'
import { azureSupportingStatement, integrationRoute } from '../content/capabilityContent'
import { powerPlatformRoute } from '../content/powerPlatformContent'
import {
  fabricBoundaries,
  fabricBoundariesClosing,
  fabricCapabilityCaveat,
  fabricCapabilityGroups,
  fabricCtaLabel,
  fabricHeroBody,
  fabricHeroHeading,
  fabricHeroSupporting,
  fabricPricingCopy,
  fabricPricingFactors,
  fabricPricingHeading,
  fabricProblems,
  fabricProblemsClosing,
  fabricProblemsHeading,
  fabricStages,
} from '../content/fabricContent'

const pageTitle = 'Microsoft Fabric Data Services NZ | Kraftylytix'
const pageDescription =
  'Microsoft Fabric data pipelines, Lakehouse and Warehouse solutions, dimensional modelling, Power BI semantic models and ongoing data-platform support for New Zealand businesses.'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': fabricStages.map(({ name, description }) => ({
    '@type': 'Service',
    name,
    description,
    serviceType: 'Microsoft Fabric data and analytics',
    areaServed: 'NZ',
    provider: { '@type': 'Organization', name: 'Kraftylytix' },
  })),
}

const MicrosoftFabricData = () => {
  usePageMetadata({
    title: pageTitle,
    description: pageDescription,
    path: '/microsoft-fabric-data',
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Data & Fabric</p>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {fabricHeroHeading}
              </span>
            </h1>
            <p className="mx-auto mb-6 max-w-3xl text-xl font-semibold leading-relaxed text-gray-800">
              {fabricHeroSupporting}
            </p>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600">{fabricHeroBody}</p>

            <Link
              to="/contact?service=fabric-data-analytics"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              {fabricCtaLabel}
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </section>

        <section aria-labelledby="fabric-journey-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Assess → Build → Support
            </p>
            <h2 id="fabric-journey-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              How a Fabric engagement works
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Most businesses start with the assessment, because it establishes what the architecture should actually
              be before anyone builds a pipeline.
            </p>
          </div>

          <ol className="grid list-none gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-2">
            {fabricStages.map(({ id, stage, name, description, boundary, ctaLabel, icon: Icon, recommended }, index) => (
              <Fragment key={id}>
                {index > 0 ? (
                  <li aria-hidden="true" className="hidden items-center justify-center text-blue-500 lg:flex">
                    <ChevronRight className="h-6 w-6" />
                  </li>
                ) : null}

                <li className="h-full">
                  <div
                    className={`flex h-full flex-col rounded-3xl border bg-white/30 p-6 shadow-xl backdrop-blur-md ${
                      recommended ? 'border-blue-300 ring-2 ring-blue-400/60' : 'border-white/40'
                    }`}
                  >
                    {recommended ? (
                      <p className="mb-4 inline-flex w-fit items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                        Preferred starting point
                      </p>
                    ) : null}

                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        {index + 1}. {stage}
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-gray-800">{name}</h3>
                    <p className="mb-4 leading-relaxed text-gray-600">{description}</p>
                    <p className="mb-6 text-sm font-semibold text-blue-700">Scoped after an initial assessment</p>

                    <div className="mb-6 mt-auto flex items-start gap-2 rounded-2xl bg-blue-50/80 p-4 text-sm leading-relaxed text-gray-700">
                      <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true" />
                      <span>{boundary}</span>
                    </div>

                    <Link
                      to={`/contact?service=${id}`}
                      className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                    >
                      {ctaLabel}
                      <ArrowRight
                        className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </li>
              </Fragment>
            ))}
          </ol>
        </section>

        <section aria-labelledby="fabric-pricing-heading" className="py-12 md:py-16">
          <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-xl backdrop-blur-md md:p-10">
            <div className="mb-8 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Pricing</p>
              <h2 id="fabric-pricing-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                {fabricPricingHeading}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">{fabricPricingCopy}</p>
            </div>

            <ul className="grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {fabricPricingFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2 rounded-2xl bg-white/60 p-4 text-gray-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="leading-relaxed">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="fabric-capabilities-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Capabilities</p>
            <h2 id="fabric-capabilities-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              What we build with Microsoft Fabric
            </h2>
          </div>

          <CapabilityGroups groups={fabricCapabilityGroups} />

          <div className="mt-8 flex items-start gap-3 rounded-[2rem] border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md md:p-8">
            <Info className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
            <p className="leading-relaxed text-gray-700">{fabricCapabilityCaveat}</p>
          </div>
        </section>

        <section aria-labelledby="fabric-problems-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Data problems</p>
            <h2 id="fabric-problems-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              {fabricProblemsHeading}
            </h2>
          </div>

          <ul className="grid list-none gap-4 sm:grid-cols-2">
            {fabricProblems.map((problem) => (
              <li
                key={problem}
                className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/35 p-5 shadow-lg backdrop-blur-md"
              >
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                <p className="font-medium leading-relaxed text-gray-700">{problem}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[2rem] border border-white/40 bg-white/30 p-8 text-center shadow-xl backdrop-blur-md">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">{fabricProblemsClosing}</p>
          </div>
        </section>

        <section aria-labelledby="fabric-boundaries-heading" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Scope</p>
            <h2 id="fabric-boundaries-heading" className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">
              What Fabric engagements do and do not cover
            </h2>
          </div>

          <ul className="mb-8 grid list-none gap-4 md:grid-cols-2">
            {fabricBoundaries.map((boundary) => (
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

          <p className="mt-8 text-center text-lg font-medium text-gray-700">{fabricBoundariesClosing}</p>
        </section>

        <section aria-labelledby="fabric-related-heading" className="py-12 md:py-16">
          <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-xl backdrop-blur-md md:p-10">
            <h2 id="fabric-related-heading" className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
              Where Fabric fits alongside our other work
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600">
              Data work rarely stands on its own. {azureSupportingStatement}
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
              Tell us where your reporting hurts
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-blue-50">
              Describe your current data sources and reporting process. We will tell you whether a Fabric foundation is
              the right answer, or whether something simpler would do the job.
            </p>
            <Link
              to="/contact?service=fabric-data-analytics"
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
            >
              {fabricCtaLabel}
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

export default MicrosoftFabricData
