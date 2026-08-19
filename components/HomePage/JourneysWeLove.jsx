// import { toast } from "sonner";
import { CirclePlus, Info } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getJourneyCards } from "@/lib/journeyCard";

export default function JourneysWeLove({ onlyPopular = false, onlyWithOffer = false }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
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

        setTrips(
          drupalJourneys.map((journey, index) => ({
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
          })),
        );
      } catch (err) {
        console.error("FETCH ERROR", err);
      }
    }

    loadJourneys();
  }, [onlyPopular, onlyWithOffer]);

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

  const handleCompareSelection = (trip) => {
    const isAddingTrip = localStorage.getItem("isAddingTrip") === "true";

    if (isAddingTrip) {
      const existingTrips = JSON.parse(
        localStorage.getItem("compareTrips") || "[]",
      );

      const alreadyExists = existingTrips.some((t) => t.id === trip.id);

      if (!alreadyExists) {
        existingTrips.push(trip);
      }

      localStorage.setItem("compareTrips", JSON.stringify(existingTrips));
      localStorage.removeItem("isAddingTrip");

      sessionStorage.setItem(
        "comparisonReturnPage",
        window.location.pathname + window.location.search,
      );

      window.location.href = "/comparison";
    } else {
      localStorage.setItem("compareTrips", JSON.stringify([trip]));
      window.location.href = "/comparison";
    }
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
        className="flex w-full items-start gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-md:snap-x max-md:snap-mandatory md:w-[62vw] md:gap-[1.4vw]"
      >
        {trips.map((trip, index) => (
         <div
  key={index}
  className="relative flex h-auto w-[85vw] min-w-[85vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 pb-6 shadow-[0px_10px_15px_0px_#0000001A] max-md:snap-center md:w-[18.7vw] md:min-w-[18.7vw] md:rounded-[0.8vw] md:p-[0.9vw] md:pb-[1.2vw]"
>
            <div className="pointer-events-none absolute -left-3 top-[190px] z-20 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-neutral-200 bg-white md:top-[9.5vw]" />
            <div className="pointer-events-none absolute -right-3 top-[190px] z-20 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-neutral-200 bg-white md:top-[9.5vw]" />
            {trip.tags?.length > 0 && (
              <div className="mb-3 flex min-h-[24px] items-center gap-2 overflow-hidden md:mb-[0.6vw] md:min-h-[1.5vw] md:gap-[0.4vw]">
                {trip.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded px-2 py-1 text-xs font-medium whitespace-nowrap bg-[#EBF0C7] text-[#42452D] md:rounded-[0.3vw] md:px-[0.7vw] md:py-[0.25vw] md:text-[0.6vw]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-md md:h-[9.5vw] md:rounded-[0.4vw]">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex flex-col pt-1 md:pt-[0.3vw]">
              <h3 className="line-clamp-1 text-left text-base font-bold leading-[1.25] text-[#111111] md:text-[1.1vw]">
                {trip.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-left text-xs leading-relaxed text-[#555555] md:mt-[0.3vw] md:text-[0.68vw] md:leading-[1.35]">
                {trip.desc}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-[#444444] md:mt-[0.5vw] md:gap-[0.8vw] md:text-[0.58vw]">
                <div className="flex items-center gap-1 md:gap-[0.25vw]">
                  <Image
                    src="/CalenderIcon.svg"
                    alt="Calendar"
                    width={16}
                    height={16}
                    className="md:h-[1.1vw] md:w-[1.1vw]"
                  />
                  <span className="font-medium">{trip.days}</span>
                </div>

                <div className="flex items-center gap-1 md:gap-[0.25vw]">
                  <Image
                    src="/Destination.svg"
                    alt="Destination"
                    width={16}
                    height={16}
                    className="md:h-[1.1vw] md:w-[1.1vw]"
                  />
                  <span className="font-medium">{trip.destinations}</span>
                </div>
              </div>

             <div className="mt-4 md:mt-[1.2vw]">
  <div className="flex items-end justify-between">
    <div className="flex flex-col items-start text-left">
      <span className="mb-[0.1vw] text-xs leading-none text-[#666666] md:text-[0.58vw]">
        from
      </span>

      <div className="flex flex-col items-start">
        <div className="flex items-baseline gap-[0.15vw]">
          <h4 className="text-lg font-bold leading-none text-[#111111] md:text-[1.25vw]">
            ${Number(trip.price).toLocaleString()}*
          </h4>

          <span className="text-[10px] text-[#666666] md:text-[0.55vw]">
            /person
          </span>
        </div>

        <span className="mt-1 text-[10px] text-[#707070] md:mt-[0.1vw] md:text-[0.5vw]">
          double occupancy*
        </span>
      </div>
    </div>

    {/* View Trip */}
    <a
  href={trip.viewTripUrl}
  onClick={(e) => e.stopPropagation()}
  className="flex h-8 w-auto min-w-[110px] shrink-0 items-center justify-center whitespace-nowrap gap-[10px] rounded-[100px] bg-[#2B2D6C] px-[20px] text-xs text-white transition-colors hover:bg-[#202254] md:h-[1.7vw] md:text-[0.7vw]"
>
  {trip.viewTripText || "View Trip"}
</a>
  </div>

  {/* Offer */}
  {trip?.offer ? (
    <div className="mt-3 flex items-center gap-2 rounded-md bg-[#F9EBE2] p-2 text-xs text-[#5C4A3E] md:mt-[0.5vw] md:gap-[0.35vw] md:rounded-[0.3vw] md:px-[0.5vw] md:py-[0.35vw] md:text-[0.58vw]">
      <Info
        size={13}
        className="shrink-0 text-[#6C5343]"
      />

      <span className="line-clamp-1 font-medium">
        {trip.offer}
      </span>
    </div>
  ) : (
    <div className="mt-3 h-[30px]" />
  )}

  {/* Add to Compare */}
 <button
  type="button"
 onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();

  try {
    const existingTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]"
    );

    const isAddingTrip =
      localStorage.getItem("isAddingTrip") === "true";

    const alreadyExists = existingTrips.some(
      (item) => item.id === trip.id
    );

    if (alreadyExists) {
      localStorage.removeItem("isAddingTrip");
      window.location.assign("/comparison");
      return;
    }

    if (existingTrips.length >= 30) {
      alert("You can compare up to 3 trips only.");
      return;
    }

    const compareTrip = {
      id: trip.id,
      title: trip.title,
      image: trip.image,
      days: trip.days,
      duration: trip.days,
      destinations: trip.destinations,
      offer: trip.offer,
      price: `$${Number(trip.price).toLocaleString()}`,
      viewTripUrl: trip.viewTripUrl,
      itinerary: [],
      stays: [],
      region: "",
      travelMode: "-",
    };

    const updatedTrips = [
      ...existingTrips,
      compareTrip,
    ];

    // Save selected trip FIRST
    localStorage.setItem(
      "compareTrips",
      JSON.stringify(updatedTrips)
    );

    // If we came from "Add trip to compare",
    // clear the flag after successfully adding.
    if (isAddingTrip) {
      localStorage.removeItem("isAddingTrip");
    }

    // Verify before navigating
    console.log(
      "Trip added to comparison:",
      JSON.parse(localStorage.getItem("compareTrips") || "[]")
    );

    window.location.assign("/comparison");
  } catch (error) {
    console.error("Failed to add trip to comparison:", error);
  }
}}
  className="mt-3 flex items-center gap-2 text-xs font-medium text-[#333333] hover:text-black md:mt-[0.6vw] md:gap-[0.35vw] md:text-[0.68vw]"
>
  <CirclePlus
    size={14}
    strokeWidth={1.6}
    className="text-[#555]"
  />

  Add to Compare
</button>
</div>
</div>
            <div className="absolute bottom-0 left-0 z-10 flex w-full translate-y-1/2 justify-center gap-1 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="h-5 w-5 rounded-full border-2 border-neutral-200 bg-white shrink-0" />
              ))}
            </div>
          </div>
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
