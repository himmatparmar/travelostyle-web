"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getJourneyCards } from "@/lib/journeyCard";
import JourneyCard from "@/components/JourneyCard";

function mapJourneysToTrips(drupalJourneys) {
  return drupalJourneys.map((journey, index) => ({
    id: journey.id,
    title: journey.title,
    desc: journey.description,
    days: journey.duration,
    destinations: journey.destinations,
    price: journey.price,
    offer: journey.earlyBird || "",
    image: journey.image,
    tags: journey.types,
    viewTripUrl: journey.viewTripUrl,
    viewTripText: journey.viewTripText,
    active: index === 0,
  }));
}

export default function JourneysWeLove({
  onlyPopular = false,
  onlyWithOffer = false,
  initialJourneys = null,
}) {
  const [trips, setTrips] = useState(() =>
    initialJourneys ? mapJourneysToTrips(initialJourneys) : [],
  );

  useEffect(() => {
    // Server already fetched and filtered this data (see app/page.tsx) — skip the
    // redundant client-side round trip when it's been handed down.
    if (initialJourneys) return;

    async function loadJourneys() {
      try {
        let drupalJourneys = await getJourneyCards();

        if (onlyPopular) {
          drupalJourneys = drupalJourneys.filter((journey) => journey.isPopular);
        }

        if (onlyWithOffer) {
          drupalJourneys = drupalJourneys.filter((journey) =>
            String(journey.earlyBird || "").trim(),
          );
        }

        setTrips(mapJourneysToTrips(drupalJourneys));
      } catch (err) {
        console.error("FETCH ERROR", err);
      }
    }

    loadJourneys();
  }, [onlyPopular, onlyWithOffer, initialJourneys]);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-6 flex w-full items-center justify-center gap-[1.3vw] px-4 max-md:mt-4 md:mt-[4vw] md:px-0">
      <div onClick={scrollLeft} className="cursor-pointer max-md:hidden">
        <Image
          src={"/LeftArrow.svg"}
          alt={"Scroll Left"}
          height={24}
          width={56}
        />
      </div>
      <div
        ref={scrollRef}
        className="flex w-full items-start gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:snap-x max-md:snap-mandatory md:w-[calc(3*390px+2*1.4vw)] md:gap-[1.4vw]"
      >
        {trips.map((trip, index) => (
          <JourneyCard key={trip.id ?? index} trip={trip} variant="carousel" />
        ))}
      </div>

      <div onClick={scrollRight} className="cursor-pointer max-md:hidden">
        <Image
          src={"/RightArrow.svg"}
          alt={"Scroll Right"}
          height={24}
          width={56}
        />
      </div>
    </div>
  );
}
