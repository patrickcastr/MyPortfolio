/**
 * Email validation for the contact form.
 *
 * `<input type="email">` is deliberately permissive: the HTML5 spec accepts
 * single-label domains and one-character TLDs, so an address like `test@cas.c`
 * passes browser validation, reaches the mail provider, and comes back as a
 * generic delivery failure. That reads to the visitor as "the site is broken"
 * when the real problem is a typo in their own address.
 *
 * These rules therefore run *before* submission so a bad address produces a
 * field-level message instead. They stay intentionally structural — no MX or
 * disposable-domain lookups — because the only goal is to catch typos that the
 * provider would reject anyway.
 */

/** local@label(.label)+.tld — TLD must be at least two letters. */
const EMAIL_PATTERN =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/

/** Practical ceiling; RFC 5321 caps a path at 254 characters. */
const MAX_EMAIL_LENGTH = 254

/**
 * Returns a field-level error message, or `null` when the address looks
 * deliverable.
 */
export const validateEmail = (value: string): string | null => {
  const email = value.trim()

  if (!email) {
    return 'Enter your work email so Kraftylytix can reply.'
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    return 'That email address is too long.'
  }

  if (!EMAIL_PATTERN.test(email)) {
    return 'Enter a complete email address, for example you@company.com.'
  }

  return null
}

/** Convenience predicate for callers that only need a boolean. */
export const isValidEmail = (value: string): boolean => validateEmail(value) === null
