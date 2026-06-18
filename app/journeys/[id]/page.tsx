import SearchBar from "@/components/ItineraryListingPage/SearchBar";
import JourneyDetailClient from "@/components/JourneyDetailPage/JourneyDetailClient";
import Footer from "@/components/Footer";

export default function JourneyDetailPage() {
  return (
    <>
      <SearchBar />
      <JourneyDetailClient />
      <Footer />
    </>
  );
}
