import Footer from "../../components/Footer";
import GoodCompanyJourney from "../../components/GroupRtbJourneys/GoodCompanyJourney";
import ChoosePopularGroupJourney from "../../components/GroupRtbJourneys/ChoosePopularGroupJourney";
import GroupRevelationsSection from "../../components/GroupRtbJourneys/GroupRevelationsSection";
import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";
import TravelOStylePromo from "../../components/GroupRtbJourneys/TravelOStylePromo";
import BookingSteps from "../../components/GroupRtbJourneys/BookingSteps";
import AdvisorCallout from "../../components/GroupRtbJourneys/AdvisorCallout";

export default function Page() {
  return (
    <>
       <SearchBar/>
      <GoodCompanyJourney/>
       <GroupRevelationsSection/>
       <ChoosePopularGroupJourney/>
       <TravelOStylePromo/>
       <BookingSteps/>
       <AdvisorCallout/>
      <Footer />
    </>
  );
}
