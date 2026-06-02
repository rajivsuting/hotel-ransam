import { DINING_VENUES, FACILITIES, ROOMS, SPA_TREATMENTS } from "@/lib/content";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticPages = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const roomPages = ROOMS.map((room) => ({
    url: `${siteUrl}/rooms/${room.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const diningPages = DINING_VENUES.map((venue) => ({
    url: `${siteUrl}/dining/${venue.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const spaPages = SPA_TREATMENTS.map((treatment) => ({
    url: `${siteUrl}/spa/${treatment.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const facilityPages = FACILITIES.map((facility) => ({
    url: `${siteUrl}/facilities/${facility.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...roomPages, ...diningPages, ...spaPages, ...facilityPages];
}
