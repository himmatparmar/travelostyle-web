

import AllJourneysPage from "@/components/ItineraryListingPage/AllJourneysPage";
import Footer from "@/components/Footer";
import SearchBar from "@/components/ItineraryListingPage/SearchBar";

export default function ItineraryPage() {
  return (
    <>
      <SearchBar/>

     
      <AllJourneysPage />
      <Footer />
    </>
  );
}