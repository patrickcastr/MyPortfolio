const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Scrolls an element into view, honouring the visitor's reduced-motion preference. */
export const scrollToElement = (elementId: string) => {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
}

/** Sends the page back to the top; the app has no global scroll restoration. */
export const scrollToTop = () => {
  window.scrollTo({ top: 0 })
}
