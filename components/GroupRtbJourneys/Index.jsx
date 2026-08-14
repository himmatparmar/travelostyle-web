"use client";

import JourneyRevelationsSection from "../JourneyRevelationsSection";
import WhyTakeJourney from "../WhyTakeJourney";
import AdvisorCallout from "./AdvisorCallout";
import BookingSteps from "../BookingSteps";
import ChoosePopularGroupJourney from "./ChoosePopularGroupJourney";
import GoodCompaneyJourneyMobile from "./GoodCompaneyJourneyMobile";
import GoodCompaneyJourney from "./GoodCompanyJourney";
import GroupRevelationsSectionMobile from "../JourneyRevelationsMobile";

const FALLBACK_MATRIX = {
  badgeText: "What's so special about group journeys?",
  titleText: "Some places reveal themselves differently when you arrive as a group",
  topIntroText:
    "These are moments that don’t make it into the solo traveller’s itinerary – and they’re the ones people talk about long after the trip is done.",
  footerText:
    "TravelOStyle keeps group sizes intentionally small. Enough people to feel like a journey but not so many that the magic gets diluted.",
  features: [
    {
      imgUrl: "/TeresaWang.svg",
      description: "Temples that open up their inner courtyards to small groups.",
    },
    {
      imgUrl: "/ManuPrasad.svg",
      description: "Dinners, Stories and Memories that are shared over a campfire.",
    },
    {
      imgUrl: "/GoupPeople.svg",
      description:
        "Guides who take you somewhere not on the map because they know the group is generally curious.",
    },
  ],
  matrixRows: [
    {
      label: "WHAT IS IT?",
      text: "A TravelOStyle group journey is a small group of people – strangers at the start, rarely by the end – moving through a destination together. The route is perfected, departures are set, and the experience is one that opens up precisely because you’re not navigating it alone.",
    },
    {
      label: "WHO IS IT FOR?",
      text: "It’s for the solo traveller who wants company, the family who’d rather share the wonder of a place and anyone who’s ever had a conversation over a meal in an unfamiliar city and thought: this is exactly why I travel.",
    },
  ],
};

const FALLBACK_WHY_TAKE = {
  heading: "Why take a group journey with TravelOStyle?",
  ctaTitle: "What are you waiting for?",
  ctaSubtitle: "Your group awaits!",
  ctaButtonText: "Discover All Group Journeys",
  features: [
    {
      title: "Shared Expenses",
      description:
        "Group pricing makes certain journeys genuinely accessible without cutting corners on quality.",
    },
    {
      title: "Set Departure Dates",
      description:
        "With itineraries that run throughout the year, you can plan ahead or book closer to when the mood strikes.",
    },
    {
      title: "Built-in Travel Community",
      description: "You arrive on the journey with strangers but you rarely leave that way.",
    },
    {
      title: "Perfected Routes",
      description:
        "Our group journeys have been run multiple times – so the kinks are worked out, the operators are trusted, and nothing is being figured out for the first time.",
    },
    {
      title: "TravelOStyle Destination Experts",
      description:
        "You're guided throughout the journey by someone who knows the destination, handles the logistics and makes the whole thing feel effortless.",
    },
  ],
};

const FALLBACK_BOOKING_STEPS = {
  subheading: "how to book",
  mainHeading: "Claim Your Spot",
  steps: [
    {
      number: "1",
      title: "Browse",
      description:
        "Explore from a range of group journeys offered by TravelOStyle to find a destination and departure that works for you.",
      bgColor: "bg-[#edf2d0]",
    },
    {
      number: "2",
      title: "Confirm Details",
      description:
        "Check availability for your preferred date and confirm traveller details – number of people, ages, and anything else we should know to make your trip.",
      bgColor: "bg-[#cce6ff] ",
    },
    {
      number: "3",
      title: "Complete booking",
      description:
        "TravelOStyle will confirm your spot with an advance deposit. Complete the payment procedure and you're all set!",
      bgColor: "bg-[#f5e6dc] ",
    },
    {
      number: "4",
      title: "Set Off!",
      description:
        "We'll send your pre-departure guides a few weeks before the trip, and stay in touch as the date gets closer.",
      bgColor: "bg-[#f2cb9b]",
    },
  ],
};

export default function Index({
  matrixContent,
  whyTakeContent,
  bookingStepsContent,
  heroDescription,
}) {
  const matrix = matrixContent || FALLBACK_MATRIX;
  const whyTake = whyTakeContent || FALLBACK_WHY_TAKE;
  const bookingSteps = bookingStepsContent || FALLBACK_BOOKING_STEPS;

  const handleCtaClick = () => {
    console.log("Navigating to journeys...");
  };

  return (
    <div>
      <GoodCompaneyJourney heroDescription={heroDescription} />
      <GoodCompaneyJourneyMobile />
      <JourneyRevelationsSection
        badgeText={matrix.badgeText}
        titleText={matrix.titleText}
        features={matrix.features}
        topIntroText={matrix.topIntroText}
        matrixRows={matrix.matrixRows}
        footerText={matrix.footerText}
        theme={{ cardBg: "bg-[#edf2d0]" }}
      />
      <GroupRevelationsSectionMobile
        badgeText={matrix.badgeText}
        titleText={matrix.titleText}
        features={matrix.features}
        topIntroText={matrix.topIntroText}
        matrixRows={matrix.matrixRows}
        footerText={matrix.footerText}
        theme={{
          cardBg: "#eff3cf",
          borderColor: "#444444",
        }}
      />
      <ChoosePopularGroupJourney />

      <WhyTakeJourney
        title={whyTake.heading}
        bgImageUrl="/GroupJourneyBP.svg"
        features={whyTake.features}
        ctaTitle={whyTake.ctaTitle}
        ctaSubtitle={whyTake.ctaSubtitle}
        ctaButtonText={whyTake.ctaButtonText}
        onCtaClick={handleCtaClick}
      />
      <BookingSteps bookingRecords={bookingSteps} />
      <AdvisorCallout />
    </div>
  );
}