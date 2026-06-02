import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { DINING_VENUES, getDiningVenue } from "@/lib/content";

export function generateStaticParams() {
  return DINING_VENUES.map((venue) => ({ slug: venue.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const venue = getDiningVenue(slug);
  if (!venue) return { title: "Venue not found" };
  return {
    title: `${venue.name} — Hotel Ransam Dining`,
    description: venue.description,
  };
}

export default async function DiningDetailPage({ params }) {
  const { slug } = await params;
  const venue = getDiningVenue(slug);
  if (!venue) notFound();

  const related = DINING_VENUES.filter((v) => v.slug !== slug);

  return (
    <DetailPage
      category="Dining"
      categoryHref="/#dining"
      title={venue.name}
      tagline={venue.tag}
      price="À la carte"
      priceNote="Table reservations via booking"
      image={venue.img}
      alt={venue.alt}
      description={venue.description}
      highlights={venue.highlights}
      related={related}
      relatedHrefPrefix="/dining"
    />
  );
}
