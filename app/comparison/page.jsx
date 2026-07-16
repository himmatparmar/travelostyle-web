// import Navbar from "../../components/AboutUs/Navbar";
import SearchBar from "@/components/JourneyDetailPage/SearchBar";
import Comparison from "../../components/Comparison/Comparison";
import Footer from "../../components/Footer";
import TravelOStylePromise from "@/components/HomePage/TravelOStylePromise";
import My from "../../components/Style/My";
import Card from "../../components/Cards/Cards";
import Data from "../../components/Advisor/Data";


export default function Page() {
    return( 
    <>
    <SearchBar/>
    {/* <Data/>
    <My/>
    <Card/> */}
    <Comparison/>
      <TravelOStylePromise />
      <Footer />
    </>
  );
}
