import type { LucideIcon } from 'lucide-react'
import { Boxes, Database, LifeBuoy, Search, Wrench } from 'lucide-react'

export type CapabilityGroup = {
  title: string
  items: string[]
  icon: LucideIcon
}

export type StageCard = {
  id: string
  stage: string
  name: string
  description: string
  boundary: string
  ctaLabel: string
  icon: LucideIcon
  recommended?: boolean
}

export const fabricHeroHeading = 'Microsoft Fabric Data & Analytics'

export const fabricHeroSupporting =
  'Turn disconnected operational data into reliable pipelines, governed models and useful reporting.'

export const fabricHeroBody =
  'Kraftylytix designs practical Microsoft Fabric solutions that bring business data together, transform it consistently and make it ready for trusted analysis and reporting.'

export const fabricCtaLabel = 'Discuss Your Data Needs'

export const fabricCapabilityGroups: CapabilityGroup[] = [
  {
    title: 'Discover and plan',
    icon: Search,
    items: [
      'Data-source discovery and architecture planning',
      'Development, testing and production deployment practices',
      'Documentation and knowledge transfer',
    ],
  },
  {
    title: 'Ingest and transform',
    icon: Wrench,
    items: [
      'Microsoft Fabric Data Factory pipelines',
      'Dataflow Gen2 ingestion and transformation',
      'Power Query transformation',
      'SQL-based transformation and modelling',
      'Notebook-based transformation where appropriate',
    ],
  },
  {
    title: 'Store and model',
    icon: Database,
    items: [
      'Lakehouse implementation',
      'Fabric Warehouse implementation',
      'Dimensional data modelling',
      'Power BI semantic models',
      'Measures, relationships and reporting structures',
    ],
  },
  {
    title: 'Report and operate',
    icon: Boxes,
    items: [
      'Operational and management dashboards',
      'Data-quality checks and validation',
      'Scheduled refresh and pipeline orchestration',
      'Pipeline failure visibility and troubleshooting',
    ],
  },
]

export const fabricCapabilityCaveat =
  'Not every business needs all of this. The final architecture depends on your data sources, scale, licensing, security requirements, reporting needs and internal support capability, and is agreed before implementation starts.'

export const fabricStages: StageCard[] = [
  {
    id: 'fabric-assessment',
    stage: 'Assess',
    name: 'Fabric Data Foundation Assessment',
    description:
      'Review current data sources, reporting processes, refresh dependencies, data quality and Microsoft Fabric readiness. Receive a practical architecture recommendation and prioritised implementation plan.',
    boundary:
      'The preferred starting point where the architecture is not yet clearly defined. The assessment recommends and plans; it does not include implementation work.',
    ctaLabel: 'Discuss an Assessment',
    icon: Search,
    recommended: true,
  },
  {
    id: 'fabric-pipeline-sprint',
    stage: 'Build',
    name: 'Data Pipeline & Modelling Sprint',
    description:
      'Design and implement one clearly scoped data pipeline and curated analytical model, from source ingestion and transformation through to reporting-ready data.',
    boundary:
      'Bounded work covering one agreed pipeline and model, with defined sources, outputs, scope and acceptance criteria agreed in writing before the sprint begins.',
    ctaLabel: 'Discuss a Data Sprint',
    icon: Wrench,
  },
  {
    id: 'fabricops-support',
    stage: 'Support',
    name: 'Monthly FabricOps Support',
    description:
      'Ongoing support for pipelines, refresh failures, transformations, semantic models, reporting improvements and controlled enhancements.',
    boundary:
      'Covers an agreed amount of support and controlled enhancement work each month. It is not unlimited, and larger projects are quoted separately.',
    ctaLabel: 'Discuss FabricOps Support',
    icon: LifeBuoy,
  },
]

export const fabricPricingHeading = 'Scoped after an initial assessment'

export const fabricPricingCopy =
  'Fabric engagements are not published as fixed prices, because two data platforms are rarely comparable. Scope and cost are confirmed in writing after the assessment, based on the factors below.'

export const fabricPricingFactors = [
  'Number and type of data sources',
  'Data volume',
  'On-premises connectivity',
  'Gateway requirements',
  'Fabric capacity and licensing',
  'Refresh frequency',
  'Security requirements',
  'Data quality',
  'Modelling complexity',
  'Reporting requirements',
]

export const fabricProblemsHeading = 'Common data problems we help solve'

export const fabricProblems = [
  'Management reporting takes days to prepare',
  'Reports rely on manually combined spreadsheets',
  'Staff export and copy the same data repeatedly',
  'Different teams calculate the same metric differently',
  'Data refreshes regularly fail',
  'Operational systems are difficult to report across',
  'Historical data is fragmented across files and applications',
  'Power BI models have become difficult to maintain',
  'There is no trusted reporting-ready data layer',
  'Nobody has clear visibility into pipeline health',
  'Reports depend on one person who understands the process',
  'Data-quality problems are discovered only after reports are published',
]

export const fabricProblemsClosing =
  'From source systems to trusted reporting, Kraftylytix can help design the pipeline, storage model, semantic layer and operational support needed to make business data usable.'

export const fabricBoundaries = [
  'Fabric services do not automatically include every report or source system.',
  'Each sprint must have defined sources, outputs, scope and acceptance criteria.',
  'Microsoft licensing and capacity costs are not included unless expressly quoted.',
  'Customers remain responsible for providing authorised access to their systems and data.',
  'Larger migrations and enterprise data-platform programmes require separate discovery and scoping.',
  'Kraftylytix will recommend simpler alternatives where Fabric would be unnecessary or disproportionate.',
]

export const fabricBoundariesClosing =
  'As with our Power Platform work, we will tell you what should be improved, replaced, or left alone.'
