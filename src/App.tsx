import './App.css'
import {
  AMAZON_GIFT_LINK,
  COUPLE_NAMES,
  EVENT_DATE_PLACEHOLDER,
  WEDDING_TAGLINE,
  wishes,
  type Wish,
} from './data/wishes'

function WishCard({ wish }: { readonly wish: Wish }) {
  const initial =
    wish.initials?.slice(0, 2) ?? wish.author.slice(0, 1).toUpperCase()

  return (
    <article className="card">
      <div className="card__header">
        {wish.avatarUrl ? (
          <img
            className="card__avatar"
            src={wish.avatarUrl}
            alt=""
            width={48}
            height={48}
          />
        ) : (
          <span
            className="card__avatar card__avatar--initial"
            aria-hidden
          >
            {initial}
          </span>
        )}
        <div>
          <p className="card__author">{wish.author}</p>
          <p className="card__label">From the team</p>
        </div>
      </div>
      <p className="card__message">{wish.message}</p>
    </article>
  )
}

function GiftIcon() {
  return (
    <svg
      className="gift__icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m-8.625 9.75h18"
      />
    </svg>
  )
}

export default function App() {
  return (
    <div className="app">
      <a className="skip" href="#wishes">
        Skip to wishes
      </a>

      <header className="hero">
        <p className="hero__eyebrow">Congratulations</p>
        <h1 className="hero__title">{COUPLE_NAMES}</h1>
        <p className="hero__subtitle">{WEDDING_TAGLINE}</p>
        <p className="hero__date">{EVENT_DATE_PLACEHOLDER}</p>

        <div className="hero__frame">
          <img
            className="hero__image"
            src="/photo.jpg"
            alt=""
            width={1200}
            height={800}
            decoding="async"
          />
        </div>
      </header>

      <main id="wishes" className="wishes" tabIndex={-1}>
        <div className="wishes__inner">
          <h2 className="wishes__heading">Messages for you</h2>
          <p className="wishes__lead">
            A few words from everyone:
          </p>
          <div className="wishes__grid">
            {wishes.map((w) => (
              <WishCard key={w.id} wish={w} />
            ))}
          </div>
        </div>
      </main>

      <section className="gift" aria-labelledby="gift-heading">
        <div className="gift__inner">
          <GiftIcon />
          <h2 id="gift-heading" className="gift__heading">
            A little something
          </h2>
          <p className="gift__text">
            From all of us
          </p>
          <a
            className="gift__cta"
            href={AMAZON_GIFT_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open gift&nbsp;↗
          </a>
        </div>
      </section>
    </div>
  )
}
