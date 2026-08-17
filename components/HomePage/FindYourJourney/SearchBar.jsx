import { getFilterOptions } from "@/lib/getFilterOptions";
import SearchBarClient from "./SearchBarClient";

// Server Component: fetches the destination list once per page render and
// hands it down, so none of the 7 pages that mount this SearchBar (and none
// of the client-side dropdowns inside it) need their own fetch call.
export default async function SearchBar() {
  const { destinations } = await getFilterOptions();

  return <SearchBarClient destinations={destinations} />;
}
