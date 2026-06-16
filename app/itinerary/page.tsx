import TopBar from "@/components/Common/TopBar";
import Header from "@/components/Common/Header";
import TravelForm from "@/components/HomePage/FindYourJourney/TravelForm"
import AllJourneysPage from "@/components/ItineraryListingPage/AllJourneysPage";

export default function ItineraryPage() {
  return (
    <>
      <TopBar />
      <Header />
      <div className=" max-w-[90%] w-full  mx-auto bg-[#F6F6F6] px-14 py-2">
            <TravelForm/>
            </div>
      <AllJourneysPage />
    </>
  );
}