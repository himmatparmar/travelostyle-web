"use client";
import React from "react";
import GroupRevelationsSection from "../GroupRevelationsSection";
import CuratedRouteSection from "./CuratedRouteSection";
import JourneyInspiration from "./JourneyInspiration";
import WhyTakeJourney from "../WhyTakeJourney";
import BookingSteps from "../GroupRtbJourneys/BookingSteps";
import AdvisorCallout from "./AdvisorCallout"
import PrivateJourneysLuxury from "./PrivateJourneysLuxury";

export default function Index() {
  const privateJourneyFeatures = [
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
  ];

  const privateMatrix = [
    {
      label: "WHAT IS IT?",
      text: "The itineraries act as inspirations, not contracts. TravelOStyle advisors will work through every detail with you – adjusting the pace, reshaping the sequence, adding what matters to you and letting go of what doesn't.",
    },
    {
      label: "WHO IS IT FOR?",
      text: "This is for travelers who know roughly what they want but would rather start from something solid than build from nothing. You can go solo or bring along your loved ones and go as a group.",
    },
  ];

  const whyTakePrivateFeatures = [
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
      description:
        "Exclusive ground transport, guides, and experiences throughout.",
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
  ];
  const handlePrivateCtaClick = () => {
    console.log("Navigating to journeys...");
  };

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
      <CuratedRouteSection />
      <GroupRevelationsSection
        badgeText="What exactly is a private journey?"
        titleText="A well-designed starting point, shaped entirely around you aa"
        features={privateJourneyFeatures}
        topIntroText="A TravelOStyle Private Journey begins with one of our carefully built itineraries – and then hands it over to you."
        matrixRows={privateMatrix}
        footerText="The key-locations, the flow between them, and the way you move through the trip is already planned for you; along with on-ground guidance for a smooth journey"
        theme={{
          cardBg: "bg-[#f1e2d7]",
          labelBg: "bg-[#ebdcd1]/40",
        }}
      />
      <PrivateJourneysLuxury />
      <JourneyInspiration />
      <WhyTakeJourney
        title={
          <>
            Why take a private journey <br className="hidden md:inline" /> with
            TravelOStyle?
          </>
        }
        bgImageUrl="/PrivateJourneyBP.svg"
        features={whyTakePrivateFeatures}
        ctaTitle="Planning a trip doesn't have"
        ctaSubtitle="to be hard."
        ctaButtonText="Explore all Private Journeys"
        onCtaClick={handlePrivateCtaClick}
      />
      <BookingSteps bookingRecords={claimYourPerfectJourney} />
      <AdvisorCallout/>
    </div>
  );
}
