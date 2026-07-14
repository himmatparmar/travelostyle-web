import Navbar from "../../components/AboutUs/Navbar"
import SearchBar from "../../components/AboutUs/SearchBar"
import Comparison from "../../components/Comparison/Comparison"
import Footer from "../../components/Footer"
import TravelOStylePromise from "@/components/HomePage/TravelOStylePromise";
import Card from "../../components/Cards/Cards"
import Data from "../../components/Advisor/Data";
import My from "../../components/Style/My";


export default function Page() {
    return( 
    <><Navbar/>
    <SearchBar/>
    <Data/>
    <Card/>
    <Comparison/>
    <My/>
      <TravelOStylePromise />
   <Footer />
   </>
);
}