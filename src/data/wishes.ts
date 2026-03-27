/**
 * Edit this file to add or change teammate wishes.
 * Optional: set avatarUrl to an image path in /public (e.g. "/avatars/jane.png").
 */

export type Wish = {
  id: string
  author: string
  message: string
  /** Single character or short initials shown when no image */
  initials?: string
  avatarUrl?: string
}

export const COUPLE_NAMES = 'Satya & Tevitt'
export const WEDDING_TAGLINE = 'With love from your team'
export const EVENT_DATE_PLACEHOLDER = 'Sunday · [29th March, 2026]'

export const wishes: Wish[] = [
  {
    id: '1',
    author: 'Jeet Kanodia',
    initials: 'JK',
    message:
      'Congratulations on your wedding! Wishing you both a lifetime of laughter, and scrum free mornings together.',
  },
  {
    id: '2',
    author: 'Jeet Kanodia',
    initials: 'JK',
    message:
      'Congratulations on your wedding! Wishing you both a lifetime of laughter, and scrum free mornings together.',
  },
  {
    id: '3',
    author: 'Jeet Kanodia',
    initials: 'JK',
    message:
      'Congratulations on your wedding! Wishing you both a lifetime of laughter, and scrum free mornings together.',
  },
  {
    id: '4',
    author: 'Jeet Kanodia',
    initials: 'JK',
    message:
      'Congratulations on your wedding! Wishing you both a lifetime of laughter, and scrum free mornings together.',
  },
]

/** Replace with your real Amazon gift card or e-gift link before going live */
export const AMAZON_GIFT_LINK =
  'https://www.amazon.com/gp/gift-cards/'
