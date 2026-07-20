import React from "react";
import GoodCompaneyJourney from "./GoodCompanyJourney";
import ChoosePopularGroupJourney from "./ChoosePopularGroupJourney";
import TravelOStylePromo from "./TravelOStylePromo";
import BookingSteps from "./BookingSteps";
import AdvisorCallout from "./AdvisorCallout";
import GroupRevelationsSection from "../GroupRevelationsSection";

export default function Index() {
  const groupJourneyFeatures = [
    {
      imgUrl: "/TeresaWang.svg",
      description:
        "Temples that open up their inner courtyards to small groups.",
    },
    {
      imgUrl: "/ManuPrasad.svg",
      description:
        "Dinners, Stories and Memories that are shared over a campfire.",
    },
    {
      imgUrl: "/GoupPeople.svg",
      description:
        "Guides who take you somewhere not on the map because they know the group is generally curious.",
    },
  ];

  const groupMatrix = [
    {
      label: "WHAT IS IT?",
      text: "A TravelOStyle group journey is a small group of people – strangers at the start, rarely by the end – moving through a destination together. The route is perfected, departures are set, and the experience is one that opens up precisely because you’re not navigating it alone.",
    },
    {
      label: "WHO IS IT FOR?",
      text: "It’s for the solo traveller who wants company, the family who’d rather share the wonder of a place and anyone who’s ever had a conversation over a meal in an unfamiliar city and thought: this is exactly why I travel.",
    },
  ];
  return (
    <div>
      <GoodCompaneyJourney />
      <GroupRevelationsSection
        badgeText="What's so special about group journeys?"
        titleText="Some places reveal themselves differently when you arrive as a group"
        features={groupJourneyFeatures}
        topIntroText="These are moments that don’t make it into the solo traveller’s itinerary – and they’re the ones people talk about long after the trip is done."
        matrixRows={groupMatrix}
        footerText="TravelOStyle keeps group sizes intentionally small. Enough people to feel like a journey but not so many that the magic gets diluted."
        theme={{ cardBg: "bg-[#edf2d0]" }}
      />
      <ChoosePopularGroupJourney />
      <TravelOStylePromo />
      <BookingSteps />
      <AdvisorCallout />
    </div>
  );
}
