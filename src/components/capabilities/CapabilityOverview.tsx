import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { capabilityAreas } from '../../content/capabilityContent'

type Props = {
  headingLevel?: 'h3' | 'h4'
}

/** The three principal capability areas, shown on the homepage and Solutions page. */
const CapabilityOverview = ({ headingLevel = 'h3' }: Props) => {
  const Heading = headingLevel

  return (
    <ul className="grid list-none gap-6 md:grid-cols-3">
      {capabilityAreas.map(({ title, description, ctaLabel, route, icon: Icon }) => (
        <li key={title} className="h-full">
          <div className="flex h-full flex-col rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <Heading className="mb-3 text-xl font-bold text-gray-800">{title}</Heading>
            <p className="mb-6 leading-relaxed text-gray-600">{description}</p>

            <Link
              to={route}
              className="group mt-auto inline-flex w-fit items-center font-semibold text-blue-700 transition-colors hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              {ctaLabel}
              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CapabilityOverview
