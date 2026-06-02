import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { SPA_TREATMENTS, getSpaTreatment } from "@/lib/content";

export function generateStaticParams() {
  return SPA_TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const treatment = getSpaTreatment(slug);
  if (!treatment) return { title: "Treatment not found" };
  return {
    title: `${treatment.name} — Hotel Ransam Spa`,
    description: treatment.description,
  };
}

export default async function SpaDetailPage({ params }) {
  const { slug } = await params;
  const treatment = getSpaTreatment(slug);
  if (!treatment) notFound();

  const related = SPA_TREATMENTS.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <DetailPage
      category="Spa"
      categoryHref="/#spa"
      title={treatment.name}
      tagline={treatment.duration}
      price={treatment.price}
      priceNote="per session · book at reception"
      image={treatment.img}
      alt={treatment.alt}
      description={treatment.description}
      highlights={treatment.highlights}
      related={related}
      relatedHrefPrefix="/spa"
      theme="dark"
    />
  );
}
