/**
 * Turns an EmailJS rejection into something a visitor can act on.
 *
 * The SDK rejects with an `EmailJSResponseStatus` ({ status, text }) when the
 * API answers with a non-2xx code, and with a `TypeError` when the request
 * never reaches the API at all (offline, DNS, blocked by an extension). Both
 * previously collapsed into one generic sentence, which hid the difference
 * between "your address is wrong", "our mail account needs reconnecting" and
 * "you are offline".
 *
 * The generic sentence is kept as the default so the existing fallback and the
 * direct-email prompt survive for any status we do not recognise.
 */

/** Unchanged fallback: shown whenever the cause is unknown or server-side. */
export const GENERIC_SEND_FAILURE =
  'We could not send your message. Please try again or email Kraftylytix directly.'

export type SendFailure = {
  /** Message rendered in the form's error banner. */
  message: string
  /** When set, the message belongs against this field rather than the banner. */
  field?: 'email'
  /** True when retrying the same submission is pointless until an owner acts. */
  needsOwnerAction: boolean
}

const asStatus = (error: unknown): number | null => {
  if (typeof error === 'object' && error !== null && 'status' in error) {
    const { status } = error as { status: unknown }
    if (typeof status === 'number' && status > 0) {
      return status
    }
  }
  return null
}

export const describeSendFailure = (error: unknown): SendFailure => {
  const status = asStatus(error)

  // No HTTP status at all: the request never completed a round trip.
  if (status === null) {
    return {
      message:
        'We could not reach the mail service. Check your connection and try again, or email Kraftylytix directly.',
      needsOwnerAction: false,
    }
  }

  switch (status) {
    // The provider rejected the address itself — surface it on the field.
    case 422:
      return {
        message: 'That email address was rejected by our mail provider. Please check it and try again.',
        field: 'email',
        needsOwnerAction: false,
      }

    // Mail account credentials expired or were revoked (e.g. Gmail invalid grant).
    // Retrying cannot help until the account is reconnected.
    case 412:
      return {
        message:
          'Our mail service is temporarily unavailable, so your message was not sent. Please email Kraftylytix directly and we will pick it up.',
        needsOwnerAction: true,
      }

    // Quota exhausted or too many sends from this visitor.
    case 426:
    case 429:
      return {
        message:
          'Our mail service is over its sending limit right now. Please try again later, or email Kraftylytix directly.',
        needsOwnerAction: true,
      }

    default:
      return { message: GENERIC_SEND_FAILURE, needsOwnerAction: status >= 500 || status === 400 || status === 403 }
  }
}
