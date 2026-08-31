import { getFilterOptions } from "@/lib/getFilterOptions";
import SearchBarClient from "./SearchBarClient";

export default async function SearchBar() {
  const { destinations, months } = await getFilterOptions();

  return <SearchBarClient destinations={destinations} months={months} />;
}
