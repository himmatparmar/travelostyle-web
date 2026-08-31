// Single source of truth for the "budget" filter's ranges, shared by the
// search-bar dropdown (components/ItineraryListingPage/SearchBarClient.jsx
// and the homepage FindYourJourney widgets) and the listing page's actual
// filtering logic (AllJourneysPage.jsx / FilterSidebar.jsx). Filtering by
// a stable `value` key instead of the display `label` avoids the bar going
// silently out of sync if the label copy ever changes.
export const BUDGET_RANGES = [
  { value: "under_3000", label: "$3,000 under" },
  { value: "3000_8000", label: "$3,000 – $8,000" },
  { value: "8000_10000", label: "$8,000 – $10,000" },
  { value: "10000_plus", label: "$10,000+" },
];

export function matchesBudget(price, value) {
  switch (value) {
    case "under_3000":
      return price < 3000;
    case "3000_8000":
      return price >= 3000 && price <= 8000;
    case "8000_10000":
      return price >= 8000 && price <= 10000;
    case "10000_plus":
      return price >= 10000;
    default:
      return true;
  }
}
