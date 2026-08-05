import { useEffect } from 'react'

type PageMetadata = {
  title: string
  description: string
  /** Route path, e.g. "/power-platform-services". Used to build the canonical hash URL. */
  path?: string
  /** Optional JSON-LD object injected while the page is mounted. */
  structuredData?: Record<string, unknown>
}

const SITE_ORIGIN = 'https://kraftylytix.nz'
const STRUCTURED_DATA_ID = 'page-structured-data'

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

/**
 * Sets document title, description, Open Graph tags, canonical URL and optional
 * JSON-LD for the mounted page. Canonical URLs use the site's hash-router format.
 */
export const usePageMetadata = ({ title, description, path, structuredData }: PageMetadata) => {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'website')

    if (path) {
      const canonical = path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/#${path}`
      upsertCanonical(canonical)
      upsertMeta('property', 'og:url', canonical)
    }
  }, [title, description, path])

  useEffect(() => {
    if (!structuredData) {
      return
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = STRUCTURED_DATA_ID
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
    // Structured data objects are module-level constants, so a JSON identity check is enough.
  }, [structuredData])
}
