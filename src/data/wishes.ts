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
    author: 'Shashikala Anandadam',
    initials: 'SA',
    message:
      'Cheers to Satya and Tevitt Sai! May your life together be full of laughter, love, and endless adventures. Congratulations! 💐',
  },
  {
    id: '3',
    author: 'Roja Moka Prasad',
    initials: 'RP',
    message:
      'Congratulations Satya and Tevitt on your wedding !! May your love story be filled with endless joy , shared dreams , and a life time of hand-in-hand adventures.',
  },
  {
    id: '4',
    author: 'Aranjit Gupta',
    initials: 'AG',
    message:
      'Big congrats on tying the knot! Marriage is like a never-ending team project - luckily, you have got the best partner to share the workload (and the snacks)! Wishing you both a lifetime of laughter, love, and maybe a little bit of patience - because, hey, teamwork makes the dream work!!',
  },
   {
    id: '5',
    author: 'Aparna Raj',
    initials: 'AR',
    message:
      'Satya, congrats on the big adventure ahead! May the bumps be small, the jokes be good, and the memories be the kind you’ll fondly tease each other about for years. Wishing you a lifetime of love, laughter, and happily-ever-after. Happy married life! 🎉❤️',
  },
  {
    id: '6',
    author: 'Reddy Sekhar',
    initials: 'RS',
    message:
       'Congratulations on your wedding! Wishing you both a lifetime of happiness, love, and success together. Enjoy this beautiful new chapter of your life. ',
  },
  {
    id: '7',
    author: 'Prasanna Arumugam',
    initials: 'PA',
    message:
       'Dearest Satya, As you embark on this incredible new chapter of your life, I want to send my warmest wishes for a wedding day filled with joy, laughter, and unforgettable moments. It has been a privilege to work alongside you, and we havee all witnessed your kindness, dedication, and wonderful spirit. May your marriage be a beautiful tapestry woven with love, understanding, and shared dreams. I wish you and Tevitt a lifetime of happiness, adventure, and unwavering support for each other. Congratulations, Satya!  so thrilled for you and cannot wait to celebrate this special occasion when you come to Bangalore. With deepest congratulations and warmest wishes.',
  },
]

/** Replace with your real Amazon gift card or e-gift link before going live */
export const AMAZON_GIFT_LINK =
  'https://www.amazon.in/g/9336I4G4LVAP2UJJ?ref=gc_yo'
