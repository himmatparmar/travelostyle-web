import { API_BASE_URL } from "@/lib/config";

// Shared across every page that renders SearchBar / ListingSearchForm /
// FindYourJourneyMobile, so this fetch must stay cheap: one request,
// revalidated on Next.js's data cache rather than "no-store", since regions
// don't change from one page load to the next the way journeys/blogs do.
export async function getFilterOptions() {
  const res = await fetch(`${API_BASE_URL}/jsonapi/taxonomy_term/region`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error("Failed to fetch destination regions");
    return { destinations: [] };
  }

  const { data = [] } = await res.json();

  return {
    destinations: data.map((term) => term.attributes?.name).filter(Boolean),
  };
}
