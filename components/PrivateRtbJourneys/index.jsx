"use client";
import BookingSteps from "../BookingSteps";
import GroupRevelationsSectionMobile from "../JourneyRevelationsMobile";
import JourneyRevelationsSection from "../JourneyRevelationsSection";
import WhyTakeJourney from "../WhyTakeJourney";
import AdvisorCallout from "./AdvisorCallout";
import CuratedRouteSection from "./CuratedRouteSection";
import CuratedRouteSectionMobile from "./CuratedRouteSectionMobile";
import JourneyInspiration from "./JourneyInspiration";
import PrivateJourneysLuxury from "./PrivateJourneysLuxury";

const FALLBACK_MATRIX = {
  badgeText: "What exactly is a private journey?",
  titleText: "A well-designed starting point, shaped entirely around you",
  topIntroText:
    "A TravelOStyle Private Journey begins with one of our carefully built itineraries – and then hands it over to you.",
  footerText:
    "The key-locations, the flow between them, and the way you move through the trip is already planned for you; along with on-ground guidance for a smooth journey",
  features: [
    {
      imgUrl: "/TeresaWang.svg",
      description: "Well-thought out route that you get to customize",
    },
    {
      imgUrl: "/TeresaWang.svg",
      description:
        "Want to add a city? Let's build it in. A different hotel? We'll give you options",
    },
    {
      imgUrl: "/GoupPeople.svg",
      description:
        "All the groundwork is done. Beyond that, everything is open to conversation",
    },
  ],
  matrixRows: [
    {
      label: "WHAT IS IT?",
      text: "The itineraries act as inspirations, not contracts. TravelOStyle advisors will work through every detail with you – adjusting the pace, reshaping the sequence, adding what matters to you and letting go of what doesn't.",
    },
    {
      label: "WHO IS IT FOR?",
      text: "This is for travelers who know roughly what they want but would rather start from something solid than build from nothing. You can go solo or bring along your loved ones and go as a group.",
    },
  ],
};

const FALLBACK_WHY_TAKE = {
  heading: "Why take a private journey with TravelOStyle?",
  ctaTitle: "Planning a trip doesn't have",
  ctaSubtitle: "to be hard.",
  ctaButtonText: "Explore all Private Journeys",
  features: [
    {
      title: "The Journey Bends",
      description:
        "Start with an inspirational itinerary and collaborate with TravelOStyle advisors to make the journey your own.",
    },
    {
      title: "Optional Departure Dates",
      description:
        "Choose a set departure date as offered on our itineraries or decide when you want to go.",
    },
    {
      title: "Centered Around You",
      description: "Exclusive ground transport, guides, and experiences throughout.",
    },
    {
      title: "Customize it",
      description:
        "Need more days? Different sights? Another city? A particular hotel? Work everything out with our expert before you depart.",
    },
    {
      title: "Flexible Pacing",
      description:
        "The freedom to adjust the schedule as you go, without the worry of disrupting anyone else's plans.",
    },
  ],
};

const FALLBACK_BOOKING_STEPS = {
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

export default function Index({ matrixContent, whyTakeContent, bookingStepsContent }) {
  const matrix = matrixContent || FALLBACK_MATRIX;
  const whyTake = whyTakeContent || FALLBACK_WHY_TAKE;
  const bookingSteps = bookingStepsContent || FALLBACK_BOOKING_STEPS;

  const handlePrivateCtaClick = () => {
    console.log("Navigating to journeys...");
  };

  return (
    <div>
      <CuratedRouteSection />
      <CuratedRouteSectionMobile />
      <JourneyRevelationsSection
        badgeText={matrix.badgeText}
        titleText={matrix.titleText}
        features={matrix.features}
        topIntroText={matrix.topIntroText}
        matrixRows={matrix.matrixRows}
        footerText={matrix.footerText}
        theme={{
          cardBg: "bg-[#f1e2d7]",
          labelBg: "bg-[#ebdcd1]/40",
        }}
      />
      <GroupRevelationsSectionMobile
        badgeText={matrix.badgeText}
        titleText={matrix.titleText}
        features={matrix.features}
        topIntroText={matrix.topIntroText}
        matrixRows={matrix.matrixRows}
        footerText={matrix.footerText}
        theme={{
          cardBg: "#f1e2d7",
          borderColor: "#444444",
        }}
      />
      <PrivateJourneysLuxury />
      <JourneyInspiration />
      <WhyTakeJourney
        title={whyTake.heading}
        bgImageUrl="/PrivateJourneyBP.svg"
        features={whyTake.features}
        ctaTitle={whyTake.ctaTitle}
        ctaSubtitle={whyTake.ctaSubtitle}
        ctaButtonText={whyTake.ctaButtonText}
        onCtaClick={handlePrivateCtaClick}
      />
      <BookingSteps bookingRecords={bookingSteps} />
      <AdvisorCallout />
    </div>
  );
}
