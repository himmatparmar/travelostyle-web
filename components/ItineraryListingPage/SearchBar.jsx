import { getFilterOptions } from "@/lib/getFilterOptions";
import SearchBarClient from "./SearchBarClient";

export default async function SearchBar() {
  const { destinations } = await getFilterOptions();

  return <SearchBarClient destinations={destinations} />;
}
