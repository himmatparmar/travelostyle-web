import { API_BASE_URL } from "@/lib/config";

// Shared across every page that renders SearchBar / ListingSearchForm /
// FindYourJourneyMobile, so this fetch must stay cheap: two requests,
// revalidated on Next.js's data cache rather than "no-store", since
// regions/months don't change from one page load to the next the way
// journeys/blogs do. Kept short (60s, not the hour-long window this used
// to have) — a long window meant a term just added/edited in Drupal could
// silently look "missing" from these dropdowns for up to an hour.
export async function getFilterOptions() {
  const [regionRes, monthRes] = await Promise.all([
    fetch(`${API_BASE_URL}/jsonapi/taxonomy_term/region`, {
      next: { revalidate: 60 },
    }),
    fetch(`${API_BASE_URL}/jsonapi/taxonomy_term/month`, {
      next: { revalidate: 60 },
    }),
  ]);

  let destinations = [];
  if (regionRes.ok) {
    const { data = [] } = await regionRes.json();
    destinations = data.map((term) => term.attributes?.name).filter(Boolean);
  } else {
    console.error("Failed to fetch destination regions");
  }

  let months = [];
  if (monthRes.ok) {
    const { data = [] } = await monthRes.json();
    months = data.map((term) => term.attributes?.name).filter(Boolean);
  } else {
    console.error("Failed to fetch travel months");
  }

  return { destinations, months };
}
