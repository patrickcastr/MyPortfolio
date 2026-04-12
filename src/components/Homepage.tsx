import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  capabilityStrip,
  differentiators,
  engagementTypes,
  primaryCtaLabel,
  problems,
  processSteps,
  services,
} from '../content/siteContent'

const Homepage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get('section')

    if (!sectionId) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)

    return () => window.clearTimeout(timeoutId)
  }, [location.search])

  return (
    <div className="relative overflow-hidden px-4 pb-20 pt-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <section className="flex min-h-[70vh] items-center justify-center py-8">
          <div className="w-full text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/40 bg-white/30 px-4 py-2 text-sm font-medium text-blue-700 shadow-lg backdrop-blur-md">
              Technology consulting for modern operations
            </div>

            <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-2xl backdrop-blur-md md:p-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Kraftylytix</p>
              <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl">
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Kraftylytix
                </span>
              </h1>
              <h2 className="mx-auto mb-6 max-w-4xl text-3xl font-bold leading-tight text-gray-800 md:text-5xl">
                Business Systems • Automation • Custom Platforms
              </h2>

              <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-2xl">
                We help businesses replace spreadsheets, manual processes, and disconnected systems with custom apps,
                automation, and integrated platforms.
              </p>

              <div className="mb-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white/10"
                >
                  {primaryCtaLabel}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => scrollToSection('services')}
                  className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white/60 px-8 py-4 text-base font-semibold text-blue-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/80"
                >
                  Explore Services
                </button>
              </div>

              <p className="text-sm text-gray-500 md:text-base">
                Led by Patrick Castrence: Full Stack &amp; Power Platform Consultant
              </p>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="rounded-[2rem] border border-white/40 bg-white/30 p-4 shadow-xl backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {capabilityStrip.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-blue-100 bg-white/75 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Services</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">Consulting and delivery built around business flow</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              From advisory work through delivery, Kraftylytix helps teams modernize the systems behind operations,
              approvals, reporting, and internal productivity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
                <p className="leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Problems</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">Common Problems We Solve</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/35 p-5 shadow-lg backdrop-blur-md"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <p className="font-medium text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-kraftylytix" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Why Kraftylytix</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">A practical consulting partner for system change</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
                <p className="leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-2xl backdrop-blur-md md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">About Kraftylytix</p>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-5xl">Modern systems, built for real operations</h2>
              <p className="mb-5 text-lg leading-relaxed text-gray-600">
                Kraftylytix is a consultancy focused on building modern business systems, internal platforms, and
                automation solutions. We specialize in Power Platform, custom SaaS development, and operational
                workflow design.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Led by Patrick Castrence, Kraftylytix combines full-stack engineering with business process expertise to
                deliver scalable, practical solutions.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/40 bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-2xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Core Focus</p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-100" />
                  <p className="leading-relaxed text-blue-50">Internal platforms that support finance, operations, and service teams.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-100" />
                  <p className="leading-relaxed text-blue-50">Automation that removes repetitive work and shortens process cycle time.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-100" />
                  <p className="leading-relaxed text-blue-50">Custom software and integrations that create a reliable source of truth.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Process</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">How We Work</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(({ step, title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{step}</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-800">{title}</h3>
                <p className="leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="engagement" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Engagement Types</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">How You Can Work With Kraftylytix</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {engagementTypes.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
                <p className="leading-relaxed text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-8 pt-12 md:pb-16 md:pt-16">
          <div className="rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-2xl md:p-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Start the conversation</p>
            <h2 className="mx-auto mb-8 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Have a process that&apos;s slowing you down?
            </h2>
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              {primaryCtaLabel}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Homepage
