import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileTabBar from "@/components/MobileTabBar";
import { ArrowRight } from "@/lib/icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function DetailPage({
  category,
  categoryHref,
  title,
  tagline,
  price,
  priceNote,
  image,
  alt,
  description,
  highlights = [],
  related = [],
  relatedHrefPrefix,
  theme = "light",
}) {
  const isDark = theme === "dark";
  const reserveNowUrl = buildWhatsAppUrl(
    `Hello Hotel Ransam, I want to reserve the ${title}. Please share availability and booking details.`
  );

  return (
    <>
      <Navigation />
      <main id="main" className="pb-[4.75rem] sm:pb-0">
        <div className={`relative ${isDark ? "bg-ransam-dusk text-ransam-stone" : "bg-ivory text-charcoal"}`}>
          <div className="relative aspect-[16/9] w-full max-h-[70vh] overflow-hidden bg-sand sm:aspect-[21/9]">
            {image && (
              <Image
                src={image}
                alt={alt || title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            )}
            <div
              aria-hidden
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-t from-ransam-dusk via-ransam-dusk/40 to-transparent"
                  : "bg-gradient-to-t from-ivory/90 via-charcoal/20 to-transparent"
              }`}
            />
          </div>

          <div className="mx-auto max-w-[900px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
            <nav
              aria-label="Breadcrumb"
              className={`font-body text-[0.72rem] uppercase tracking-[0.18em] ${
                isDark ? "text-ransam-stone/50" : "text-muted"
              }`}
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="link-underline transition-opacity hover:opacity-80">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href={categoryHref}
                    className="link-underline transition-opacity hover:opacity-80"
                  >
                    {category}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className={isDark ? "text-ransam-gold" : "text-gold"}>{title}</li>
              </ol>
            </nav>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1
                  className={`font-display text-[clamp(2rem,5vw,3.5rem)] font-light leading-tight ${
                    isDark ? "text-ransam-stone" : "text-charcoal"
                  }`}
                >
                  {title}
                </h1>
                {tagline && (
                  <p
                    className={`mt-3 max-w-xl font-body text-base font-light leading-relaxed ${
                      isDark ? "text-ransam-stone/70" : "text-muted"
                    }`}
                  >
                    {tagline}
                  </p>
                )}
              </div>
              {price && (
                <div className="shrink-0 text-right">
                  <p
                    className={`font-display text-3xl font-light ${
                      isDark ? "text-ransam-gold" : "text-gold"
                    }`}
                  >
                    {price.startsWith("₹") || price === "Complimentary" || price === "À la carte"
                      ? price
                      : `₹${price}`}
                  </p>
                  {priceNote && (
                    <p
                      className={`mt-1 font-body text-xs font-light ${
                        isDark ? "text-ransam-stone/50" : "text-muted"
                      }`}
                    >
                      {priceNote}
                    </p>
                  )}
                </div>
              )}
            </div>

            {description && (
              <p
                className={`mt-10 font-body text-base font-light leading-relaxed ${
                  isDark ? "text-ransam-stone/80" : "text-charcoal/85"
                }`}
              >
                {description}
              </p>
            )}

            {highlights.length > 0 && (
              <div className="mt-12">
                <h2
                  className={`overline ${isDark ? "text-ransam-gold" : "text-gold"}`}
                >
                  Highlights
                </h2>
                <ul
                  className={`mt-6 grid gap-3 sm:grid-cols-2 ${
                    isDark ? "text-ransam-stone/80" : "text-charcoal/85"
                  }`}
                >
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 border-t pt-4 font-body text-sm font-light ${
                        isDark ? "border-ransam-gold/20" : "border-sand"
                      }`}
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          isDark ? "bg-ransam-gold" : "bg-gold"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div
              className={`mt-14 flex flex-col gap-4 border-t pt-10 sm:flex-row sm:items-center sm:justify-between ${
                isDark ? "border-ransam-gold/20" : "border-sand"
              }`}
            >
              <a
                href={reserveNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-fill inline-flex items-center justify-center gap-2 border px-8 py-4 font-body text-[0.72rem] uppercase tracking-[0.22em] ${
                  isDark
                    ? "border-ransam-gold text-ransam-stone hover:text-ransam-dusk"
                    : "border-gold text-charcoal hover:text-cream"
                }`}
              >
                Reserve Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href={categoryHref}
                className={`font-body text-sm font-light ${
                  isDark ? "text-ransam-stone/60 hover:text-ransam-stone" : "text-muted hover:text-charcoal"
                }`}
              >
                ← Back to {category}
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && relatedHrefPrefix && (
          <section
            className={`border-t px-5 py-16 sm:px-8 lg:px-12 ${
              isDark ? "border-ransam-gold/20 bg-ransam-dusk" : "border-sand bg-cream"
            }`}
          >
            <div className="mx-auto max-w-[1200px]">
              <h2
                className={`font-display text-2xl font-light ${
                  isDark ? "text-ransam-stone" : "text-charcoal"
                }`}
              >
                More in {category}
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`${relatedHrefPrefix}/${item.slug}`}
                      className={`group block border p-6 transition-colors ${
                        isDark
                          ? "border-ransam-gold/20 hover:border-ransam-gold/50 hover:bg-ransam-dusk"
                          : "border-sand bg-ivory hover:border-gold/40 hover:bg-cream"
                      }`}
                    >
                      <h3
                        className={`font-display text-xl font-medium ${
                          isDark ? "text-ransam-stone" : "text-charcoal"
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p
                        className={`mt-2 font-body text-sm font-light ${
                          isDark ? "text-ransam-stone/60" : "text-muted"
                        }`}
                      >
                        {item.tagline || item.tag || item.price}
                      </p>
                      <span
                        className={`mt-4 inline-flex items-center gap-1 font-body text-[0.7rem] uppercase tracking-[0.2em] ${
                          isDark ? "text-ransam-gold" : "text-gold"
                        }`}
                      >
                        View details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}
