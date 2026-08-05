import { ChevronRight } from 'lucide-react'
import { Fragment } from 'react'
import { journeySteps } from '../../content/powerPlatformContent'

type Props = {
  headingLevel?: 'h3' | 'h4'
}

const ServiceJourney = ({ headingLevel = 'h3' }: Props) => {
  const Heading = headingLevel

  return (
    <ol className="grid list-none gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-2">
      {journeySteps.map(({ step, title, description, icon: Icon }, index) => (
        <Fragment key={step}>
          {index > 0 ? (
            <li aria-hidden="true" className="hidden items-center justify-center text-blue-500 md:flex">
              <ChevronRight className="h-6 w-6" />
            </li>
          ) : null}

          <li className="h-full rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                {index + 1}. {step}
              </span>
            </div>
            <Heading className="mb-2 text-xl font-bold text-gray-800">{title}</Heading>
            <p className="leading-relaxed text-gray-600">{description}</p>
          </li>
        </Fragment>
      ))}
    </ol>
  )
}

export default ServiceJourney
