import type { LucideIcon } from 'lucide-react'
import {
  AlertTriangle,
  Boxes,
  Copy,
  Eye,
  Link2,
  Repeat,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import type { CapabilityGroup } from './fabricContent'

export const integrationHeroHeading = 'Workflow Automation & Systems Integration'

export const integrationHeroSupporting =
  'Connect business systems, remove repetitive handling and keep information moving between the tools your organisation already uses.'

export const integrationHeroBody =
  'Kraftylytix designs practical integrations across Microsoft 365, business applications, APIs, forms, databases and external services. The technology is selected according to the customer’s systems, security requirements, expected volume and ongoing support needs.'

export const integrationCtaLabel = 'Discuss an Integration'

export type Outcome = {
  title: string
  description: string
  icon: LucideIcon
}

/** Business outcomes lead; implementation tools are a detail, not the pitch. */
export const integrationOutcomes: Outcome[] = [
  {
    title: 'Removing duplicate entry',
    description: 'The same information stops being typed into two or three systems by hand.',
    icon: Copy,
  },
  {
    title: 'Reducing manual handoffs',
    description: 'Work moves between people and systems without someone chasing it along.',
    icon: Repeat,
  },
  {
    title: 'Connecting disconnected applications',
    description: 'Tools that were never designed to talk to each other exchange data reliably.',
    icon: Link2,
  },
  {
    title: 'Improving process visibility',
    description: 'Teams can see where a job actually is, rather than asking around for status.',
    icon: Eye,
  },
  {
    title: 'Detecting failed workflows',
    description: 'Failures raise an alert instead of being noticed weeks later by a customer.',
    icon: AlertTriangle,
  },
  {
    title: 'Producing consistent data across systems',
    description: 'Validation and agreed rules keep records aligned between applications.',
    icon: ShieldCheck,
  },
]

export const integrationCapabilityGroups: CapabilityGroup[] = [
  {
    title: 'Workflow and process',
    icon: Workflow,
    items: [
      'Cross-system workflow automation',
      'Power Automate cloud flows',
      'Approval workflows',
      'Forms and intake automation',
      'Document-generation workflows',
      'Notifications and exception handling',
    ],
  },
  {
    title: 'Systems and data',
    icon: Link2,
    items: [
      'API integration',
      'Webhooks',
      'Scheduled data synchronisation',
      'Data validation',
      'Microsoft 365 integration',
      'Dataverse integration',
      'SharePoint integration',
      'External application integration',
    ],
  },
  {
    title: 'Build and run',
    icon: Boxes,
    items: [
      'n8n workflow development',
      'Custom integration services',
      'Selected Azure services where appropriate',
      'Monitoring, troubleshooting and documentation',
    ],
  },
]

export const implementationChoiceNote =
  'Depending on the systems and requirements, solutions may use Power Automate, n8n, APIs, custom services or selected Azure components.'

export const integrationBoundaries = [
  'Each integration has an agreed scope, defined systems and acceptance criteria before build starts.',
  'Customers remain responsible for providing authorised access to the systems being connected.',
  'Third-party APIs, connectors and platform limits are assessed during discovery and can affect what is possible.',
  'Ongoing monitoring and support are agreed separately rather than assumed.',
  'Where a simpler manual process or an existing product feature would do the job, we will say so.',
]
