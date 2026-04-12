import type { LucideIcon } from 'lucide-react'
import {
  AppWindow,
  Briefcase,
  Building2,
  CheckCircle2,
  Gauge,
  Layers,
  Lightbulb,
  Link2,
  PenTool,
  RefreshCcw,
  Search,
  Settings,
  Workflow,
  Wrench,
} from 'lucide-react'

export type IconCard = {
  title: string
  description: string
  icon: LucideIcon
  supportingText?: string
  tags?: string[]
  cta?: string
}

export type ProcessStep = {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export const primaryCtaLabel = 'Start a Discovery Conversation'

export const capabilityStrip = [
  'Power Platform',
  'Internal Tools',
  'Workflow Automation',
  'Systems Integration',
  'Custom Platforms',
]

export const services: IconCard[] = [
  {
    title: 'Business Systems Consulting',
    description:
      'Design clearer operating systems, roles, and workflows so teams can scale without adding more manual complexity.',
    icon: Briefcase,
  },
  {
    title: 'Power Platform Solutions',
    description:
      'Build tailored Power Apps, Power Automate, Power BI, and Power Pages solutions that fit how your business actually works.',
    icon: Settings,
  },
  {
    title: 'Custom Internal Tools',
    description:
      'Replace fragile spreadsheets with secure internal apps, dashboards, and portals built around your day-to-day operations.',
    icon: AppWindow,
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate approvals, notifications, handoffs, and repetitive tasks to reduce delays and eliminate avoidable admin work.',
    icon: Workflow,
  },
  {
    title: 'SaaS MVP Development',
    description:
      'Launch practical MVPs with modern architecture, fast feedback loops, and a delivery approach focused on real business value.',
    icon: Gauge,
  },
  {
    title: 'System Integration',
    description:
      'Connect your core tools, data, and processes so information moves cleanly across the business instead of living in silos.',
    icon: Link2,
  },
]

export const industries: IconCard[] = [
  {
    title: 'Operations & Logistics',
    description: 'Internal platforms, process visibility, approvals, and workflow coordination.',
    icon: Workflow,
  },
  {
    title: 'Professional Services',
    description: 'Streamlined internal tools for delivery, reporting, handoffs, and team efficiency.',
    icon: Briefcase,
  },
  {
    title: 'Manufacturing & Processing',
    description: 'Systems that support operations, tracking, workflow clarity, and data consistency.',
    icon: Settings,
  },
  {
    title: 'Growing SMEs',
    description: 'Replace spreadsheet-heavy admin with scalable internal systems and automation.',
    icon: Building2,
  },
]

export const solutionCards: IconCard[] = [
  {
    title: 'Operational Workflow Platform',
    description:
      'Replace spreadsheet-based operations with a structured internal platform for workflows, tracking, and team coordination.',
    supportingText:
      'Ideal when the business has outgrown email chains, shared sheets, and manual status chasing across teams.',
    icon: Workflow,
    tags: ['Workflow Design', 'Tracking', 'Coordination'],
    cta: 'Explore Solution',
  },
  {
    title: 'Internal Portal & Dashboard',
    description:
      'Centralize approvals, reporting, team visibility, and operational data in one secure internal system.',
    supportingText:
      'Useful for businesses that need clearer visibility, structured access, and one place to manage day-to-day internal activity.',
    icon: AppWindow,
    tags: ['Dashboards', 'Reporting', 'Approvals'],
    cta: 'See How It Works',
  },
  {
    title: 'Automation & Approval Engine',
    description:
      'Reduce delays and repetitive work by automating approvals, notifications, and handoffs across business processes.',
    supportingText:
      'Best suited to teams dealing with bottlenecks, repetitive follow-up, or inconsistent process execution across departments.',
    icon: CheckCircle2,
    tags: ['Power Automate', 'Notifications', 'Process Control'],
    cta: 'Learn More',
  },
  {
    title: 'Custom Business Platform',
    description:
      'Design and build tailored internal tools around the way your business actually operates instead of forcing generic software to fit.',
    supportingText:
      'A strong fit when off-the-shelf tools create workarounds, duplicate admin, or poor alignment with operational reality.',
    icon: Layers,
    tags: ['Custom Apps', 'Internal Platforms', 'Scalable Architecture'],
    cta: 'Explore Solution',
  },
]

export const differentiators: IconCard[] = [
  {
    title: 'Systems-first approach',
    description:
      'We look at process, data, ownership, and workflow design before jumping straight into implementation.',
    icon: Layers,
  },
  {
    title: 'Business + technical thinking',
    description:
      'Operational pain points are translated into solutions that make sense for both stakeholders and delivery teams.',
    icon: Lightbulb,
  },
  {
    title: 'Rapid delivery',
    description:
      'Working improvements ship early so teams can validate direction, reduce risk, and see value faster.',
    icon: Gauge,
  },
  {
    title: 'Scalable foundations',
    description:
      'Solutions are structured to support growth, adoption, and future enhancements without becoming brittle.',
    icon: Building2,
  },
]

export const engagementTypes: IconCard[] = [
  {
    title: 'Discovery & Advisory',
    description:
      'Review current processes, identify bottlenecks, and shape the right system approach.',
    icon: Search,
  },
  {
    title: 'Project Delivery',
    description:
      'End-to-end design and build of internal platforms, portals, and automation solutions.',
    icon: PenTool,
  },
  {
    title: 'System Modernization',
    description:
      'Replace fragile spreadsheets and disconnected tools with cleaner, scalable systems.',
    icon: Wrench,
  },
  {
    title: 'Ongoing Improvement',
    description:
      'Continue refining, extending, and optimizing the platform as the business grows.',
    icon: RefreshCcw,
  },
]

export const problems = [
  'Too many spreadsheets',
  'Manual approvals',
  'Disconnected systems',
  'Duplicate data entry',
  'Poor reporting visibility',
  'Legacy processes',
  'No single source of truth',
  'Scaling operational complexity',
]

export const processSteps: ProcessStep[] = [
  {
    step: '1',
    title: 'Discover',
    description: 'We map the current process, identify bottlenecks, and define the business outcomes that matter most.',
    icon: Search,
  },
  {
    step: '2',
    title: 'Design',
    description: 'We shape the right mix of systems, workflows, and user experience before development begins.',
    icon: PenTool,
  },
  {
    step: '3',
    title: 'Build',
    description: 'We deliver the platform, automation, or internal tool with a practical focus on speed and usability.',
    icon: Wrench,
  },
  {
    step: '4',
    title: 'Improve',
    description: 'We refine, extend, and optimize once the solution is in use so it keeps pace with your business.',
    icon: RefreshCcw,
  },
]
