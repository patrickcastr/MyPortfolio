import { describe, expect, it } from 'vitest'
import { isValidEmail, validateEmail } from './validateEmail'

describe('validateEmail', () => {
  it('rejects the single-character TLD that HTML5 validation lets through', () => {
    // The exact address from the reported failure. `<input type="email">`
    // accepts it, which is how it reached the mail provider and came back as a
    // generic delivery error.
    expect(validateEmail('test@cas.c')).toBe('Enter a complete email address, for example you@company.com.')
  })

  it.each([
    ['missing @', 'testcas.com'],
    ['missing domain', 'test@'],
    ['missing local part', '@company.com'],
    ['no TLD', 'test@company'],
    ['spaces', 'te st@company.com'],
    ['double dot in domain', 'test@company..com'],
    ['trailing dot', 'test@company.com.'],
    ['leading dot in local part', '.test@company.com'],
  ])('rejects %s', (_label, address) => {
    expect(isValidEmail(address)).toBe(false)
  })

  it('asks for an address when the field is blank', () => {
    expect(validateEmail('')).toBe('Enter your work email so Kraftylytix can reply.')
    expect(validateEmail('   ')).toBe('Enter your work email so Kraftylytix can reply.')
  })

  it('rejects an address longer than the RFC 5321 path limit', () => {
    expect(validateEmail(`${'a'.repeat(250)}@company.com`)).toBe('That email address is too long.')
  })

  it.each([
    ['plain', 'you@company.com'],
    ['subdomain', 'you@mail.company.com'],
    ['country TLD', 'patrick@kraftylytix.nz'],
    ['plus addressing', 'you+enquiry@company.co.nz'],
    ['dotted local part', 'first.last@company.com'],
    ['hyphenated domain', 'you@my-company.com'],
    ['digits', 'user123@company360.com'],
  ])('accepts a real-world %s address', (_label, address) => {
    expect(validateEmail(address)).toBeNull()
  })

  it('ignores surrounding whitespace', () => {
    expect(validateEmail('  you@company.com  ')).toBeNull()
  })
})
