import Footer from "../../components/Footer";
import GoodCompanyJourney from "../../components/GroupRtbJourneys/GoodCompanyJourney";
import ChoosePopularGroupJourney from "../../components/GroupRtbJourneys/ChoosePopularGroupJourney";
import GroupRevelationsSection from "../../components/GroupRtbJourneys/GroupRevelationsSection";
import SearchBar from "../../components/HomePage/FindYourJourney/SearchBar";

export default function Page() {
  return (
    <>
       <SearchBar/>
      <GoodCompanyJourney/>
       <GroupRevelationsSection/>
       <ChoosePopularGroupJourney/>
      <Footer />
    </>
  );
}
