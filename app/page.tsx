import SearchBar from "../components/HomePage/SearchBar"
import Index from "../components/HomePage/GroupJourneys";
import JourneySection from "../components/HomePage/JourneySection";
import YourNextTrip from "../components/HomePage/YourNextTrip";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-[#fafafa] w-[96vw] h-[54.15vw]">
     <SearchBar/>
     <JourneySection/>
     <YourNextTrip/>
     <Index/>
    </div>
  );
}
