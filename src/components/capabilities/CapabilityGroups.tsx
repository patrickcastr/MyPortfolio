import { CheckCircle2 } from 'lucide-react'
import type { CapabilityGroup } from '../../content/fabricContent'

type Props = {
  groups: CapabilityGroup[]
  headingLevel?: 'h3' | 'h4'
}

/** Grouped capability lists, used by the Fabric and Integration pages. */
const CapabilityGroups = ({ groups, headingLevel = 'h3' }: Props) => {
  const Heading = headingLevel

  return (
    <ul className="grid list-none gap-6 md:grid-cols-2">
      {groups.map(({ title, items, icon: Icon }) => (
        <li key={title} className="h-full">
          <div className="h-full rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <Heading className="text-xl font-bold text-gray-800">{title}</Heading>
            </div>

            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CapabilityGroups
