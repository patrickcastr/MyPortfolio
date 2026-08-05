import type { LucideIcon } from 'lucide-react'
import {
  LifeBuoy,
  Search,
  ShieldCheck,
  Stethoscope,
  Wrench,
} from 'lucide-react'

export type PowerOpsServiceId = 'health-check' | 'rescue-sprint' | 'powerops-support'

export type PowerOpsService = {
  id: PowerOpsServiceId
  name: string
  price: string
  priceNote: string
  summary: string
  inclusions: string[]
  boundary: string
  ctaLabel: string
  icon: LucideIcon
  recommended?: boolean
}

export type JourneyStep = {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export type Faq = {
  question: string
  answer: string
}

export const powerPlatformRoute = '/power-platform-services'

export const healthCheckCtaLabel = 'Book a Power Platform Health Check'

export const pricingDisclaimer =
  'All prices are starting prices in New Zealand dollars. Final scope and cost are confirmed in writing before any work begins.'

export const powerOpsIntro =
  'Whether your team is dealing with unreliable Power Automate flows, a difficult Power App, spreadsheet-heavy processes, or a Microsoft 365 solution nobody fully owns, Kraftylytix provides a practical path from diagnosis to ongoing support.'

export const powerOpsServices: PowerOpsService[] = [
  {
    id: 'health-check',
    name: 'Power Platform Health Check',
    price: 'From NZ$495',
    priceNote: 'Fixed price, one solution or process',
    summary:
      'A focused review of one Power App, Power Automate workflow, SharePoint process, Dataverse solution, or spreadsheet-heavy business process.',
    inclusions: [
      'Guided system and process walkthrough',
      'Review of reliability, ownership and maintainability risks',
      'Identification of bottlenecks and duplicated work',
      'Prioritised practical recommendations',
      'Written findings report',
      'Fixed-price remediation proposal where appropriate',
    ],
    boundary:
      'The Health Check diagnoses and recommends. It does not include major implementation or remediation work.',
    ctaLabel: 'Book a Health Check',
    icon: Stethoscope,
    recommended: true,
  },
  {
    id: 'rescue-sprint',
    name: 'Automation Rescue Sprint',
    price: 'From NZ$1,950',
    priceNote: 'Bounded sprint, one agreed problem',
    summary:
      'A bounded implementation sprint designed to repair or improve one clearly defined application, automation, or business process.',
    inclusions: [
      'Broken or unreliable Power Automate flows',
      'Difficult or abandoned Power Apps',
      'Manual approval workflows',
      'Repetitive data entry',
      'Document generation and notifications',
      'SharePoint and Dataverse process improvements',
      'Operational dashboards and tracking',
    ],
    boundary:
      'The Rescue Sprint covers one agreed and clearly bounded problem, with documented scope and acceptance criteria.',
    ctaLabel: 'Discuss a Rescue Sprint',
    icon: Wrench,
  },
  {
    id: 'powerops-support',
    name: 'Monthly PowerOps Support',
    price: 'From NZ$750 per month',
    priceNote: 'Ongoing, agreed monthly allocation',
    summary:
      'Ongoing Power Platform support for businesses that need dependable technical help without employing a full-time specialist.',
    inclusions: [
      'Troubleshooting and repairs',
      'Minor improvements',
      'Application and automation health reviews',
      'Technical advice',
      'Monthly improvement recommendations',
      'Priority support over one-off requests',
    ],
    boundary:
      'Monthly PowerOps Support covers an agreed amount of support and minor improvement work. Larger changes and projects are quoted separately.',
    ctaLabel: 'Explore PowerOps Support',
    icon: LifeBuoy,
  },
]

export const journeySteps: JourneyStep[] = [
  {
    step: 'Diagnose',
    title: 'Health Check',
    description: 'Understand the current solution, risks and opportunities.',
    icon: Search,
  },
  {
    step: 'Rescue',
    title: 'Rescue Sprint',
    description: 'Repair or improve one clearly defined problem.',
    icon: Wrench,
  },
  {
    step: 'Support',
    title: 'PowerOps Support',
    description: 'Keep the solution reliable and continuously improving.',
    icon: ShieldCheck,
  },
]

export const warningSigns = [
  'A critical flow fails without anyone noticing',
  'A Power App was built by someone who has left',
  'Staff repeatedly copy information between systems',
  'Approvals are buried in email',
  'Reporting depends on one complicated spreadsheet',
  'Nobody knows who owns the solution',
  'Small changes feel risky',
  'There is little or no documentation',
  'A manual process consumes hours every week',
  'An automation works sometimes but cannot be trusted',
]

export const warningSignsClosing =
  'Start with a fixed-price Power Platform Health Check and receive a practical plan for what should be fixed, improved, or left alone.'

export const scopeNote =
  'Every engagement has a written scope. Kraftylytix does not offer undefined or open-ended work, and will say when a system is already good enough to leave alone.'

export const faqs: Faq[] = [
  {
    question: 'What technologies do you support?',
    answer:
      'Kraftylytix works with Microsoft Power Apps, Power Automate, Dataverse, SharePoint, Microsoft 365, Power BI, APIs and related business-system integrations.',
  },
  {
    question: 'Do we need to already use Microsoft 365?',
    answer:
      'It helps, because most Power Platform work sits alongside Microsoft 365. If your process currently runs on spreadsheets or another toolset, the Health Check can still review it and set out what a Microsoft-based approach would involve.',
  },
  {
    question: 'What happens during a Power Platform Health Check?',
    answer:
      'We walk through the app, flow or process with the people who use it, review how it is built, where it breaks, who maintains it and where effort is duplicated. You receive a written findings report with prioritised recommendations, and a fixed-price remediation proposal where that is appropriate.',
  },
  {
    question: 'Does the Health Check include fixing the solution?',
    answer:
      'No. The Health Check diagnoses and recommends. Remediation work is quoted separately, usually as an Automation Rescue Sprint, so you can decide what is worth doing before committing to build work.',
  },
  {
    question: 'Can you take over a solution built by someone else?',
    answer:
      'Yes. Inherited solutions are a common starting point. The Health Check is designed to establish what exists, what it depends on and what the maintenance risks are before any changes are made.',
  },
  {
    question: 'Can you help with undocumented Power Apps and flows?',
    answer:
      'Yes. Where documentation is missing, part of the work is reconstructing how the solution behaves and recording enough detail that your team is not dependent on a single person.',
  },
  {
    question: 'What happens after the Health Check?',
    answer:
      'You keep the findings report and the prioritised recommendations, whether or not you continue. If remediation makes sense, the usual next step is a scoped Automation Rescue Sprint, and from there Monthly PowerOps Support if you want ongoing cover.',
  },
  {
    question: 'Is Monthly PowerOps Support unlimited?',
    answer:
      'No. It covers an agreed amount of support and minor improvement work each month. Larger changes and projects are scoped and quoted separately so both sides know what is included.',
  },
  {
    question: 'Can you work remotely with businesses outside Taranaki?',
    answer:
      'Yes. Kraftylytix is based in New Plymouth, Taranaki, and delivers remotely for clients elsewhere in New Zealand. Health Checks, sprints and ongoing support are all run remotely by default.',
  },
  {
    question: 'Do you provide Microsoft licences?',
    answer:
      'No. Microsoft licences are purchased through your own tenant or Microsoft partner. Kraftylytix advises on which licence types your solution requires, but does not resell them.',
  },
]
