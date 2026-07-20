import React from 'react'
import GroupRevelationsSection from '../GroupRevelationsSection';
import CuratedRouteSection from "./CuratedRouteSection"
import JourneyInspiration from './JourneyInspiration';

export default function Index() {
const privateJourneyFeatures = [
  {
     imgUrl: "/TeresaWang.svg", 
    description: "Well-thought out route that you get to customize",
  },
  {
      imgUrl: "/TeresaWang.svg",
    description: "Want to add a city? Let's build it in. A different hotel? We'll give you options",
  },
  {
     imgUrl: "/GoupPeople.svg",
    description: "All the groundwork is done. Beyond that, everything is open to conversation",
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

return (
  <div>
    <CuratedRouteSection/>
    <GroupRevelationsSection
      badgeText="What exactly is a private journey?"
      titleText="A well-designed starting point, shaped entirely around you aa"
      features={privateJourneyFeatures}
      topIntroText="A TravelOStyle Private Journey begins with one of our carefully built itineraries – and then hands it over to you."
      matrixRows={privateMatrix}
      footerText="The key-locations, the flow between them, and the way you move through the trip is already planned for you; along with on-ground guidance for a smooth journey"
      theme={{ 
        cardBg: "bg-[#f1e2d7]",   
        labelBg: "bg-[#ebdcd1]/40"   
      }}
    />
    <JourneyInspiration/>
  </div>
);
}
