import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { FACILITIES, getFacility } from "@/lib/content";

export function generateStaticParams() {
  return FACILITIES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  if (!facility) return { title: "Facility not found" };
  return {
    title: `${facility.name} — Hotel Ransam`,
    description: facility.description,
  };
}

export default async function FacilityDetailPage({ params }) {
  const { slug } = await params;
  const facility = getFacility(slug);
  if (!facility) notFound();

  const related = FACILITIES.filter((f) => f.slug !== slug).slice(0, 3);

  return (
    <DetailPage
      category="Facilities"
      categoryHref="/#facilities"
      title={facility.name}
      price={facility.price}
      priceNote={facility.note}
      description={facility.description}
      highlights={facility.highlights}
      related={related}
      relatedHrefPrefix="/facilities"
    />
  );
}
