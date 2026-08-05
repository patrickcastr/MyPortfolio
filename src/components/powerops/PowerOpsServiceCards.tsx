import { ArrowRight, CheckCircle2, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { powerOpsServices } from '../../content/powerPlatformContent'

type Props = {
  /** Heading level used for each service name, so the cards fit the host page hierarchy. */
  headingLevel?: 'h3' | 'h4'
}

const PowerOpsServiceCards = ({ headingLevel = 'h3' }: Props) => {
  const Heading = headingLevel

  return (
    <ul className="grid list-none gap-6 lg:grid-cols-3">
      {powerOpsServices.map(({ id, name, price, priceNote, summary, inclusions, boundary, ctaLabel, icon: Icon, recommended }) => (
        <li key={id} className="h-full">
          <div
            className={`flex h-full flex-col rounded-3xl border bg-white/30 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 ${
              recommended ? 'border-blue-300 ring-2 ring-blue-400/60' : 'border-white/40'
            }`}
          >
            {recommended ? (
              <p className="mb-4 inline-flex w-fit items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Recommended starting point
              </p>
            ) : null}

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </div>

            <Heading className="mb-2 text-xl font-bold text-gray-800">{name}</Heading>

            <p className="text-lg font-semibold text-blue-700">{price}</p>
            <p className="mb-4 text-sm text-gray-500">{priceNote}</p>

            <p className="mb-5 leading-relaxed text-gray-600">{summary}</p>

            <ul className="mb-6 space-y-2">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-6 mt-auto flex items-start gap-2 rounded-2xl bg-blue-50/80 p-4 text-sm leading-relaxed text-gray-700">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true" />
              <span>{boundary}</span>
            </div>

            <Link
              to={`/contact?service=${id}`}
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              {ctaLabel}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PowerOpsServiceCards
