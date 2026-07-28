"use client";
import BookingSteps from "../BookingSteps";
import JourneyRevelationsMobile from "../JourneyRevelationsMobile";
import JourneyRevelationsSection from "../JourneyRevelationsSection";
import CustomFromGroundUp from "./CustomFromGroundUp";
import NotSureWhereToBegin from "./NotSureWhereToBegin";
import PopularRegions from "./PopularRegions";
import WhollyJourneyHero from "./WhollyJourneyHero";

export default function Index() {
const tailormadeJourneyFeatures = [
    {
      imgUrl: "/TeresaWang.svg", 
      description: "Start with an inspiration",
    },
    {
      imgUrl: "/TeresaWang.svg",
      description: "Start with a conversation",
    },
    {
      imgUrl: "/GoupPeople.svg", 
      description: "Start with what you want and we'll take it from there!",
    },
  ];

 const tailormadeMatrix = [
    {
      label: "WHAT IS IT?",
      text: "A completely customized journey built from scratch according to your specific travel vision, preferences, and pace.",
    },
    {
      label: "WHO IS IT FOR?",
      text: "For those who know what they want to experience from travel. Or have a rough idea, or a vision they would like to bring alive.",
    },
  ];

  const claimYourPerfectJourney = {
    subheading: "how to book",
    mainHeading: "Claim Your Perfect Journey",
    steps: [
      {
        number: "1",
        title: "Browse",
        description:
          "Find a journey that sparks your imagination from any of our group or inspirational itineraries.",
        bgColor: "bg-[#edf2d0]",
      },
      {
        number: "2",
        title: "Confirm Details",
        description:
          "Tell us your dates, your group size, and any preferences that matter to you – pace, dietary needs, room configurations, anything at all – to customize your journey.",
        bgColor: "bg-[#cce6ff] ",
      },
      {
        number: "3",
        title: "Complete booking",
        description:
          "TravelOStyle confirms availability, shares your private pricing clearly, and walks you through the booking process.",
        bgColor: "bg-[#f5e6dc]",
      },
    ],
  };

  return (
    <div>
      <WhollyJourneyHero />
      <JourneyRevelationsSection
       badgeText="What is a tailormade journey?"
        titleText="Journeys made to fit your idea of travel"
        features={tailormadeJourneyFeatures}
          topIntroText={"TravelOStyle will ask the right questions, understand how you like to move, what you're hoping to feel, what you absolutely cannot compromise on, and what you'd happily leave behind. Then we craft your perfect journey."}
        matrixRows={tailormadeMatrix}
      footerText={"Journeys that begin with you. Where you want to go. How long you want to travel. What season works. Who's coming? What pace feels right. What kind of stay you want. What the trip needs to do for you"}
        theme={{
          cardBg: "bg-[#f2d09f]",
          labelBg: "bg-[#ebdcd1]/40",
        }}
      />
      <JourneyRevelationsMobile
       badgeText="What is a tailormade journey?"
        titleText="Journeys made to fit your idea of travel"
        features={tailormadeJourneyFeatures}
        topIntroText={"TravelOStyle will ask the right questions, understand how you like to move, what you're hoping to feel, what you absolutely cannot compromise on, and what you'd happily leave behind. Then we craft your perfect journey."}
        matrixRows={tailormadeMatrix}
        footerText={"Journeys that begin with you. Where you want to go. How long you want to travel. What season works. Who's coming? What pace feels right. What kind of stay you want. What the trip needs to do for you"}
        theme={{
          cardBg: "#f2d09f",
          borderColor: "#444444",
        }}
      />
      <NotSureWhereToBegin />
      <CustomFromGroundUp />
      <PopularRegions />
      <BookingSteps bookingRecords={claimYourPerfectJourney} />
    </div>
  );
}
