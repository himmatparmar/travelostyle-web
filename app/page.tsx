"use"
import SearchBar from "../components/HomePage/FindYourJourney/SearchBar";
import Index from "../components/HomePage/GroupJourneys";
import JourneySection from "../components/HomePage/JourneySection";
import YourNextTrip from "../components/HomePage/YourNextTrip";
import ContactInquiry from "../components/HomePage/ContactInquiry";
import ExperienceTravelSection from "../components/HomePage/ExperienceTravelSection";
import Map from "../components/HomePage/MapClient";
import TimingSection from "../components/HomePage/TimingSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import TravelOStylePromise from "../components/HomePage/TravelOStylePromise";
import PopularDestinations from "../components/HomePage/PopularDestinations";
import Footer from "../components/Footer";
import { API_BASE_URL } from "@/lib/config";

const TESTIMONIAL_INCLUDE =
  "field_testimonial_image.field_media_image,field_testimonial_journey";

async function getTestimonials() {
  const res = await fetch(
    `${API_BASE_URL}/jsonapi/node/testimonial?include=${TESTIMONIAL_INCLUDE}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch testimonials");
    return {
      data: [],
      included: [],
    };
  }

  return res.json();
}

export default async function Home() {
  const testimonialData = await getTestimonials();

   return (
    
    <div >
     <SearchBar/>
     <PopularDestinations/>
     <JourneySection/>
     <YourNextTrip/>
     <Index/>
     <ContactInquiry/>
     <ExperienceTravelSection/>
     <TimingSection/>
     <Map/>
 <TestimonialSection
        testimonialData={testimonialData}
      />     <TravelOStylePromise/>
     <Footer />
    </div>
  );
}
