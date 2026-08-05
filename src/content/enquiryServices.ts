import { powerOpsServices } from './powerPlatformContent'
import { fabricStages } from './fabricContent'
import { integrationHeroHeading } from './integrationContent'

export const GENERAL_ENQUIRY = 'general'

export type EnquiryGroup = {
  label: string
  options: { id: string; name: string }[]
}

/**
 * Service selections offered by the contact form. Ids are also the `?service=`
 * values carried by CTAs across the site, so they must stay stable.
 */
export const enquiryGroups: EnquiryGroup[] = [
  {
    label: 'Power Platform',
    options: powerOpsServices.map(({ id, name }) => ({ id, name })),
  },
  {
    label: 'Data & Microsoft Fabric',
    options: [
      { id: 'fabric-data-analytics', name: 'Microsoft Fabric Data & Analytics' },
      ...fabricStages.map(({ id, name }) => ({ id, name })),
    ],
  },
  {
    label: 'Integration & Automation',
    options: [{ id: 'integration-automation', name: integrationHeroHeading }],
  },
  {
    label: 'Other',
    options: [{ id: GENERAL_ENQUIRY, name: 'General enquiry' }],
  },
]

export const enquiryOptions = enquiryGroups.flatMap((group) => group.options)

export const isKnownEnquiryService = (id: string) => enquiryOptions.some((option) => option.id === id)

export const enquiryServiceLabel = (id: string) =>
  enquiryOptions.find((option) => option.id === id)?.name ?? 'General enquiry'
