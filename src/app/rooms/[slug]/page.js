import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { ROOMS, getRoom } from "@/lib/content";
import { toAbsoluteUrl } from "@/lib/seo";

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return { title: "Room not found" };
  const path = `/rooms/${slug}`;
  return {
    title: room.name,
    description: room.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${room.name} | Hotel Ransam`,
      description: room.description,
      url: path,
      images: [
        {
          url: toAbsoluteUrl(room.img),
          alt: room.alt,
        },
      ],
      type: "article",
    },
  };
}

export default async function RoomDetailPage({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const related = ROOMS.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <DetailPage
      category="Rooms"
      categoryHref="/#rooms"
      title={room.name}
      tagline={room.tagline}
      price={room.price}
      priceNote="per night · taxes as per Govt. rules"
      image={room.img}
      alt={room.alt}
      description={room.description}
      highlights={room.highlights}
      related={related}
      relatedHrefPrefix="/rooms"
    />
  );
}
