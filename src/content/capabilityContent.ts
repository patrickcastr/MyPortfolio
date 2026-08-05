import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Boxes,
  Database,
  Network,
  Settings,
  Workflow,
} from 'lucide-react'
import { powerPlatformRoute } from './powerPlatformContent'

export const fabricRoute = '/microsoft-fabric-data'
export const integrationRoute = '/workflow-automation-integration'

export type CapabilityArea = {
  title: string
  description: string
  ctaLabel: string
  route: string
  icon: LucideIcon
}

/** The three principal capability areas, used on the homepage and the Solutions page. */
export const capabilityAreas: CapabilityArea[] = [
  {
    title: 'Power Platform',
    description: 'Business applications, operational workflows and Power Platform solution rescue.',
    ctaLabel: 'Explore Power Platform',
    route: powerPlatformRoute,
    icon: Settings,
  },
  {
    title: 'Data & Microsoft Fabric',
    description: 'Pipelines, transformation, modelling and trusted reporting.',
    ctaLabel: 'Explore Data & Fabric',
    route: fabricRoute,
    icon: Database,
  },
  {
    title: 'Integration & Automation',
    description: 'Cross-platform workflows, APIs and connected business systems.',
    ctaLabel: 'Explore Integration',
    route: integrationRoute,
    icon: Network,
  },
]

/** The operational information lifecycle Kraftylytix supports, end to end. */
export const lifecycleStages = [
  'Capture the work',
  'Automate the process',
  'Connect the systems',
  'Consolidate the data',
  'Model it',
  'Report on it',
]

export const positioningStatement =
  'Kraftylytix builds practical business applications, data solutions and system integrations across Microsoft Power Platform and Microsoft Fabric, supported by Azure services and custom development where appropriate.'

export const azureSupportingStatement =
  'Supported by selected Azure services and custom development where the solution requires capabilities beyond Power Platform or Fabric.'

export const azureExamples = [
  'Azure Functions for bounded integration logic',
  'Azure Logic Apps where appropriate',
  'Azure Key Vault for managed secrets where appropriate',
  'Azure Storage for suitable integration scenarios',
  'API-based services',
  'Monitoring or application services where justified by the solution',
]

export const licensingNote =
  'Microsoft licensing, subscriptions, cloud consumption and third-party service fees are not included unless expressly stated in the proposal.'

export const securityNote =
  'Security, access, data handling and deployment requirements are reviewed during discovery and reflected in the agreed solution design.'

export const deploymentNote =
  'Workflows may be implemented in customer-owned infrastructure, customer-owned cloud subscriptions or another separately agreed deployment model.'

export const technologySelectionHeading = 'The right tool for the actual problem'

export const technologySelectionCopy =
  'Not every process needs a custom application, a Fabric platform or a hosted automation server. Kraftylytix selects technology according to the systems already in use, business risk, expected volume, security, licensing, maintainability and the customer’s ability to support the solution.'

export type TechnologyChoice = {
  technology: string
  fit: string
  icon: LucideIcon
}

export const technologyChoices: TechnologyChoice[] = [
  { technology: 'Power Apps', fit: 'Operational interfaces', icon: Settings },
  { technology: 'Power Automate', fit: 'Microsoft-centred workflows', icon: Workflow },
  { technology: 'Microsoft Fabric', fit: 'Data engineering and analytics', icon: Database },
  { technology: 'Power BI', fit: 'Semantic modelling and reporting', icon: BarChart3 },
  { technology: 'n8n', fit: 'Suitable cross-platform orchestration', icon: Network },
  { technology: 'APIs or custom services', fit: 'Specialised integration logic', icon: Boxes },
  {
    technology: 'Selected Azure services',
    fit: 'Where additional cloud capability is justified',
    icon: Boxes,
  },
]
