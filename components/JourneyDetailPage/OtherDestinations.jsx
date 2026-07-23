
"use client";
// import { toast } from "sonner";
import Image from "next/image";
import HeroSection from "./HeroSection";
import { useEffect, useRef, useState } from "react";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";
import JourneyList from "../../components/JourneyList/JourneyList"
import { slugify } from "@/lib/slugify";

export default function OtherDestinations() {
  const [trips, setTrips] = useState([]);
  // const [selectedTrips, setSelectedTrips] = useState([]);
//   useEffect(() => {
//   const compareTrips = JSON.parse(
//     localStorage.getItem("compareTrips") || "[]"
//   );

//   setSelectedTrips(compareTrips.map((trip) => trip.id));
// }, []);

  useEffect(() => {
    async function loadJourneys() {
      try {
        const res = await fetch(
          `${API_BASE_URL}/jsonapi/node/journey?include=
          field_journey_image.field_media_image,field_journey_tag,field_month`,
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
          const titleSlug = slugify(item.attributes?.title || "");
          let viewTripUrl = `/journeys/${titleSlug}`;
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
  const isAddingTrip =
    localStorage.getItem("isAddingTrip") === "true";

  if (isAddingTrip) {
    const existingTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]"
    );

    const alreadyExists = existingTrips.some(
      (t) => t.id === trip.id
    );
    if (alreadyExists) {
  toast("Trip already added to comparison");
  return;
}

    if (!alreadyExists) {
      existingTrips.push(trip);
    }

    localStorage.setItem(
      "compareTrips",
      JSON.stringify(existingTrips)
    );

    localStorage.removeItem("isAddingTrip");

   sessionStorage.setItem(
  "comparisonReturnPage",
  window.location.pathname + window.location.search
);

const returnPage =
  sessionStorage.getItem("comparisonReturnPage") ||
  "/comparison";
  console.log(
  "comparisonReturnPage:",
  sessionStorage.getItem("comparisonReturnPage")
);

window.location.href = returnPage;
  } else {
    // NEW comparison starts here
    localStorage.setItem(
      "compareTrips",
      JSON.stringify([trip])
    );

    window.location.href = "/comparison";
  }
};
  return (
    <div className="mt-[4vw] flex items-center justify-center gap-[1.3vw]">
     <div onClick={scrollLeft} className="cursor-pointer">
          <Image src={"/LeftArrow.svg"} alt={""} height={24} width={56} />
      </div>
{/* <div className="mt-[4vw] flex items-center justify-center gap-[1.3vw]">
  <div onClick={scrollLeft}>
    <Image ... />
  </div> */}

  <div className="w-[62vw]">
    <JourneyList
      trips={trips}
      containerRef={scrollRef}
    />
  </div>

  <div onClick={scrollRight} className="cursor-pointer">
  <Image src={"/RightArrow.svg"} alt={""} height={24} width={56} />
     </div>
</div>
)}
//       <div
//         ref={scrollRef}
//         className="flex w-[62vw] gap-[1.4vw] overflow-x-auto scroll-
// smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//       >
//        {trips.map((trip, index) => (
//   <div
//     key={index}
//     // onClick={() => handleCompareSelection(trip)}
//     className={`relative flex h-[31.8vw] min-w-[18.7vw] flex-col overflow-hidden rounded-[0.7vw] bg-white px-[0.8vw] pt-[0.8vw] pb-[1vw] cursor-pointer
//       ${
//         trip.active
//           ? "border border-[#6BA6FF]"
//           : "border border-[#E8E8E8]"
//       }`}
//   >
//             <div className="mb-[0.8vw] flex flex-wrap gap-[0.45vw]">
//               {(trip.tags || []).map((tag) => (
//                 <span
//                   key={tag}
//                   className={`rounded-[0.3vw] px-[0.75vw] py-[0.3vw] text-[0.63vw] font-medium
//                       ${
//                         tag === "Private Journey" ||
//                         tag === "Tailormade Journey"
//                           ? "bg-[#F5DFC9] text-[#6A5B4E]"
//                           : "bg-[#EAEBCB] text-[#63634E]"
//                       }`}
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="relative h-[10vw] w-full overflow-hidden rounded-[0.15vw]">
//               <Image
//                 src={trip.image}
//                 alt={trip.title}
//                 fill
//                 unoptimized
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex flex-1 flex-col pt-[1vw]">
//               <h3 className="text-[1.1vw] font-semibold leading-[1.3] text-[#232323]">
//                 {trip.title}
//               </h3>

//               <p className="mt-[0.6vw] text-[0.76vw] leading-[1.55] text-[#666666]">
//                 {trip.desc}
//               </p>
//               <div className="mt-[0.9vw] flex items-center gap-[1vw] text-[0.58vw] text-[#717171]">
//                 <div className="flex items-center gap-[0.28vw]">
//                   <Clock3 size={12} strokeWidth={1.8} />
//                   {trip.days}
//                 </div>

//                 <div className="flex items-center gap-[0.28vw]">
//                   <MapPin size={12} strokeWidth={1.8} />
//                   {trip.destinations}
//                 </div>
//               </div>
//               <div className="mt-[1vw] flex items-end justify-between">
//                 <div>
//                   <p className="text-[0.62vw] lowercase text-[#787878]">from</p>

//                   <div className="flex items-end gap-[0.2vw]">
//                     <h4 className="text-[1.45vw] font-semibold leading-none text-[#1D1D1D]">
//                       ${Number(trip.price).toLocaleString()}
//                     </h4>

//                     <span className="mb-[0.12vw] text-[0.52vw] leading-[1.15] text-[#7B7B7B]">
//                       */person
//                       <br />
//                       double occupancy*
//                     </span>
//                   </div>
//                 </div>

//                 <a
//   href={trip.viewTripUrl}
//   onClick={(e) => e.stopPropagation()}
//   className="..."
// >
//   {trip.viewTripText || "View Trip"}
// </a>
//               </div>
//               <div className="mt-[1vw] flex items-center gap-[0.4vw] rounded-[0.35vw] bg-[#F4E5DA] px-[0.65vw] py-[0.55vw] text-[0.58vw] text-[#65574D]">
//                 <Info size={11} />
//                 <span>{trip.offer}</span>
//               </div>
//               <div className="mt-[1vw] border-t border-dashed border-[#D7D7D7]" />

//               <button
//   onClick={() => {
//     const existingTrips = JSON.parse(
//       localStorage.getItem("compareTrips") || "[]"
//     );

//     const alreadyExists = existingTrips.some(
//       (item) => item.id === trip.id
//     );

//    if (alreadyExists) {
//   toast("Trip already added to comparison");
//   return;
// }

//     if (existingTrips.length >= 30) {
//       alert("You can compare up to 3 trips only.");
//       return;
//     }

//     const compareTrip = {
//       id: trip.id,
//       title: trip.title,
//       image: trip.image,
//       duration: trip.days,
//       destinations: trip.destinations,
//       offer: trip.offer,
//       price: `$${Number(trip.price).toLocaleString()}`,
//       viewTripUrl: trip.viewTripUrl,

//       // fallback values until Drupal fields are mapped
//       itinerary: [],
//       stays: "-",
//       region: trip.region,
//       travelMode: "-",
//     };

//     localStorage.setItem(
//       "compareTrips",
//       JSON.stringify([...existingTrips, compareTrip])
//     );
//     setSelectedTrips((prev) => [...prev, trip.id]);
//     localStorage.setItem(
//   "compareSourcePage",
//   window.location.pathname + window.location.search
// );

// sessionStorage.setItem(
//   "comparisonReturnPage",
//   window.location.pathname + window.location.search
// );

//     window.location.href = "/comparison";
//   }}
//   className="mt-[0.9vw] flex items-center gap-[0.4vw] text-[0.78vw] text-[#4E4E4E]"
// >
// {selectedTrips.includes(trip.id) ? (
//   <CheckCircle2
//     size={14}
//     strokeWidth={2}
//     className="text-green-600"
//   />
// ) : (
//   <CirclePlus
//     size={14}
//     strokeWidth={1.8}
//   />
// )}
//   Add to Compare
// </button>
//             </div>

//             <div className="absolute bottom-[-0.38vw] left-0 flex w-full justify-between px-[0.42vw]">
//               {Array.from({ length: 14 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="h-[0.8vw] w-[0.8vw] rounded-full bg-[#F5F5F3]"
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div onClick={scrollRight}>
//         <Image src={"/RightArrow.svg"} alt={""} height={24} width={56} />
//       </div>
//     </div>
//   );
// }