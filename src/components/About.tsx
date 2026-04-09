import { ArrowRight, Building2, Code, Settings, Workflow } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const capabilities = [
  {
    title: 'Business Systems Strategy',
    description: 'Process mapping, solution design, and delivery planning aligned to operational goals.',
    icon: Building2,
  },
  {
    title: 'Custom Software Delivery',
    description: 'React, TypeScript, Node, ASP.NET, and modern cloud tooling for internal and client-facing platforms.',
    icon: Code,
  },
  {
    title: 'Power Platform Expertise',
    description: 'Power Apps, Power Automate, Power BI, and Power Pages for practical, business-ready solutions.',
    icon: Settings,
  },
  {
    title: 'Workflow Design',
    description: 'Automation and operating models that reduce friction across approvals, reporting, and handoffs.',
    icon: Workflow,
  },
]

const engagementPoints = [
  'Replace spreadsheet-heavy processes with fit-for-purpose business systems.',
  'Connect disconnected tools so teams can work from a clearer source of truth.',
  'Ship practical improvements quickly, then scale the platform over time.',
]

const About = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">About</p>
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            About Kraftylytix
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Kraftylytix is a technology consultancy focused on business systems, automation, and custom software that
            improves how teams operate day to day.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="h-full rounded-2xl border border-white/30 bg-white/20 p-6 text-center backdrop-blur-md"
            >
              <Icon className="mx-auto mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-white/30 bg-white/20 p-8 shadow-xl backdrop-blur-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-800 md:text-3xl">Built to bridge business and delivery</h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Kraftylytix was built around a simple idea: the best business systems come from understanding the
              operation behind the request, not just the software requirement on the surface. Many organisations know
              they have friction across spreadsheets, approvals, reporting, and legacy tools, but they need a partner
              who can work through both the process design and the implementation details.
            </p>
            <p className="mb-5 leading-relaxed text-gray-600">
              Led by Patrick Castrence, Kraftylytix combines full-stack engineering with Power Platform and workflow
              expertise to deliver solutions that are practical to adopt, fast to iterate, and structured to scale.
            </p>
            <p className="leading-relaxed text-gray-600">
              The focus is always the same: solve real operational problems, create cleaner systems, and give teams
              tools they can rely on as the business grows.
            </p>
          </div>

          <div className="rounded-2xl border border-white/30 bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">How We Help</p>
            <div className="space-y-4">
              {engagementPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-white/10 p-4">
                  <p className="leading-relaxed text-blue-50">{point}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/contact')}
              className="group mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
