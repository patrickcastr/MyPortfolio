import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { industries, primaryCtaLabel, solutionCards } from '../content/siteContent'

const Portfolio = () => {
  const location = useLocation()
  const navigate = useNavigate()

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
    <div className="min-h-screen px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Solutions</p>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Selected Solutions
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            Solution categories designed around business systems, operational flow, approvals, and internal platform
            delivery rather than one-off project showcase work.
          </p>
        </div>

        <section id="industries" className="pb-12 md:pb-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Industries</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">Industries We Work With</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Kraftylytix helps operations-focused businesses modernize the systems behind daily work, approvals,
              reporting, and internal coordination.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industries.map(({ title, description, icon: Icon }) => (
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

        <section id="solutions" className="py-12 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Solution Categories</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-5xl">Selected Solutions</h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Each engagement is shaped around the business problem first, then designed as a practical internal system,
              automation layer, or custom platform that fits the way your team already works.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {solutionCards.map(({ title, description, supportingText, tags, icon: Icon, cta }) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/40 bg-white/30 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-800">{title}</h3>
                <p className="mb-4 text-lg leading-relaxed text-gray-600">{description}</p>
                <p className="mb-6 leading-relaxed text-gray-500">{supportingText}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {tags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="group inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-800"
                >
                  {cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center text-white shadow-2xl md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Next Step</p>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Need a better-fit system for the way your business runs?</h2>
          <button
            onClick={() => navigate('/contact')}
            className="group inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
          >
            {primaryCtaLabel}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
