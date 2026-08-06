// import { toast } from "sonner";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";
import { slugify } from "@/lib/slugify";
import { CirclePlus, Info } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function JourneysWeLove() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadJourneys() {
      try {
        const res = await fetch(
          `${API_BASE_URL}/jsonapi/node/journey?include=field_journey_image.field_media_image,field_journey_tag,field_month`,
        );
        const json = await res.json();
        const included = json.included || [];

        const drupalJourneys = (json.data || []).map((item, index) => {
          const mediaId = item.relationships?.field_journey_image?.data?.id;

          const mediaEntity = included.find(
            (inc) => inc.type === "media--image" && inc.id === mediaId,
          );

          const fileId =
            mediaEntity?.relationships?.field_media_image?.data?.id;

          const fileEntity = included.find(
            (inc) => inc.type === "file--file" && inc.id === fileId,
          );

          const rawUrl = fileEntity?.attributes?.uri?.url;

          const imageUrl = buildFileUrl(rawUrl) || "/GoldenTriange.svg";

          const tagData = item.relationships?.field_journey_tag?.data;
          const tagArray = Array.isArray(tagData)
            ? tagData
            : tagData
              ? [tagData]
              : [];

          const tagNames = tagArray
            .map((tag) => {
              const tagEntity = included.find(
                (inc) =>
                  inc.type === "taxonomy_term--tags" && inc.id === tag.id,
              );
              return tagEntity?.attributes?.name;
            })
            .filter(Boolean);

          const cta = item.attributes?.field_cta;
          const alias = item.attributes?.path?.alias || "";
          let viewTripUrl = alias || `/journey/${slugify(item.attributes?.title || "")}`;
          if (cta?.uri && !cta.uri.startsWith("entity:")) {
            viewTripUrl = cta.uri;
          }

          return {
            id: item.id,
            title: item.attributes?.title || "",
            desc: item.attributes?.field_short_description || "",
            days: `${item.attributes?.field_duration_days || 0} Days | ${
              item.attributes?.field_duration_nights || 0
            } Nights`,
            destinations: `${
              item.attributes?.field_destinations_count || 0
            } Destinations`,
            price: Number(item.attributes?.field_offer_price) || 0,
            offer: item.attributes?.field_offer_message || "",
            image: imageUrl,
            tags: tagNames,
            viewTripUrl,
            viewTripText: cta?.title || "View Trip",
            active: index === 0,
          };
        });

        setTrips(drupalJourneys);
      } catch (err) {
        console.error("FETCH ERROR", err);
      }
    }

    loadJourneys();
  }, []);

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
            onClick={() => handleCompareSelection(trip)}
            className={`relative flex h-auto w-[85vw] min-w-[85vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl border bg-white p-4 pb-6 shadow-sm max-md:snap-center md:w-[18.7vw] md:min-w-[18.7vw] md:rounded-[0.8vw] md:p-[0.9vw] md:pb-[1.2vw] ${
              trip.active ? "border-[#2B2D6C]" : "border-[#E8E8E8]"
            }`}
          >
            <div className="mb-3 flex min-h-[24px] items-center gap-2 overflow-hidden md:mb-[0.6vw] md:min-h-[1.5vw] md:gap-[0.4vw]">
              {(trip.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="rounded px-2 py-1 text-xs font-medium whitespace-nowrap bg-[#EBF0C7] text-[#42452D] md:rounded-[0.3vw] md:px-[0.7vw] md:py-[0.25vw] md:text-[0.6vw]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-md md:h-[9.5vw] md:rounded-[0.4vw]">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex flex-col pt-3 md:pt-[0.6vw]">
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

                  <a
                    href={trip.viewTripUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-full bg-[#2B2D6C] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#202254] md:px-[1.1vw] md:py-[0.45vw] md:text-[0.68vw]"
                  >
                    {trip.viewTripText || "View Trip"}
                  </a>
                </div>

                {trip?.offer ? (
                  <div className="mt-3 flex items-center gap-2 rounded-md bg-[#F9EBE2] p-2 text-xs text-[#5C4A3E] md:mt-[0.5vw] md:gap-[0.35vw] md:rounded-[0.3vw] md:px-[0.5vw] md:py-[0.35vw] md:text-[0.58vw]">
                    <Info size={13} className="shrink-0 text-[#6C5343]" />
                    <span className="line-clamp-1 font-medium">
                      {trip.offer}
                    </span>
                  </div>
                ) : (
                  <div className="mt-3 flex items-center gap-2 rounded-md p-2 text-xs text-[#5C4A3E] md:mt-[0.5vw] md:gap-[0.35vw] md:rounded-[0.3vw] md:px-[0.5vw] md:py-[0.35vw] md:text-[0.58vw]"></div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const existingTrips = JSON.parse(
                      localStorage.getItem("compareTrips") || "[]",
                    );

                    const alreadyExists = existingTrips.some(
                      (item) => item.id === trip.id,
                    );

                    if (alreadyExists) return;

                    if (existingTrips.length >= 3) {
                      alert("You can compare up to 3 trips only.");
                      return;
                    }

                    const compareTrip = {
                      id: trip.id,
                      title: trip.title,
                      image: trip.image,
                      duration: trip.days,
                      destinations: trip.destinations,
                      offer: trip.offer,
                      price: `$${Number(trip.price).toLocaleString()}`,
                      viewTripUrl: trip.viewTripUrl,
                      itinerary: [],
                      stays: "-",
                      region: trip.region,
                      travelMode: "-",
                    };

                    localStorage.setItem(
                      "compareTrips",
                      JSON.stringify([...existingTrips, compareTrip]),
                    );
                    sessionStorage.setItem(
                      "comparisonReturnPage",
                      window.location.pathname + window.location.search,
                    );

                    window.location.href = "/comparison";
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

            <div className="absolute bottom-[-0.38vw] left-0 flex w-full justify-between px-1 md:px-[0.42vw]">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#F5F5F3] md:h-[0.8vw] md:w-[0.8vw]"
                />
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
