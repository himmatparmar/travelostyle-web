"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  CirclePlus,
  CheckCircle2,
  Clock3,
  Info,
  MapPin,
} from "lucide-react";
export default function JourneyCard({ trip }) {
   const router = useRouter();

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const compareTrips = JSON.parse(
      localStorage.getItem("compareTrips") || "[]"
    );

    setIsSelected(
      compareTrips.some((item) => item.id === trip.id)
    );
  }, [trip.id]);
const handleAddToCompare = () => {
  // const isAddingTrip =
  //   localStorage.getItem("isAddingTrip") === "true";

  // if (isAddingTrip) {
  //   const existingTrips = JSON.parse(
  //     localStorage.getItem("compareTrips") || "[]"
  //   );
  const existingTrips = JSON.parse(
    localStorage.getItem("compareTrips") || "[]"
  );
    const alreadyExists = existingTrips.some(
      (item) => item.id === trip.id
    );
if (alreadyExists) {
  toast("Trip already added to comparison");
  return;
}
existingTrips.push(trip);

      localStorage.setItem(
        "compareTrips",
        JSON.stringify(existingTrips)
      );


    setIsSelected(true);
 
  // localStorage.removeItem("isAddingTrip");


  //   localStorage.removeItem("isAddingTrip");
  // // } else {
  // //   localStorage.setItem(
  // //     "compareTrips",create a new array after loading 
  // //     JSON.stringify([trip])
  // //   );

  //   setIsSelected(true);
  // }

  sessionStorage.setItem(
    "comparisonReturnPage",
    window.location.pathname +
      window.location.search
  );
   if (localStorage.getItem("isAddingTrip") === "true") {
    localStorage.removeItem("isAddingTrip");
  }
 router.push("/comparison");
};
  return ( 
    <div
      className={`relative flex h-[31.8vw] flex-col overflow-hidden rounded-[0.7vw] bg-white px-[0.8vw] pt-[0.8vw] pb-[1vw]
      ${
        trip.active
          ? "border border-[#6BA6FF]"
          : "border border-[#E8E8E8]"
      }`}
    >
      <div className="mb-[0.8vw] flex flex-wrap gap-[0.45vw]">
        {(trip.tags || []).map((tag) => (
          <span
            key={tag}
            className={`rounded-[0.3vw] px-[0.75vw] py-[0.3vw] text-[0.63vw] font-medium
            ${
              tag === "Private Journey" ||
              tag === "Tailormade Journey"
                ? "bg-[#F5DFC9] text-[#6A5B4E]"
                : "bg-[#EAEBCB] text-[#63634E]"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative h-[10vw] w-full overflow-hidden rounded-[0.15vw]">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col pt-[1vw]">
        <h3 className="text-[1.1vw] font-semibold leading-[1.3] text-[#232323]">
          {trip.title}
        </h3>

        <p className="mt-[0.6vw] text-[0.76vw] leading-[1.55] text-[#666666]">
          {trip.desc}
        </p>

        <div className="mt-[0.9vw] flex items-center gap-[1vw] text-[0.58vw] text-[#717171]">
          <div className="flex items-center gap-[0.28vw]">
            <Clock3 size={12} strokeWidth={1.8} />
            {trip.days}
          </div>

          <div className="flex items-center gap-[0.28vw]">
            <MapPin size={12} strokeWidth={1.8} />
            {trip.destinations}
          </div>
        </div>

        <div className="mt-[1vw] flex items-end justify-between">
          <div>
            <p className="text-[0.62vw] lowercase text-[#787878]">
              from
            </p>

            <div className="flex items-end gap-[0.2vw]">
              <h4 className="text-[1.45vw] font-semibold leading-none text-[#1D1D1D]">
                ${Number(trip.price).toLocaleString()}*
              </h4>

              <span className="mb-[0.12vw] text-[0.52vw] leading-[1.15] text-[#7B7B7B]">
                /person
                <br />
                double occupancy*
              </span>
            </div>
          </div>

          <a
  href={trip.viewTripUrl}
  className="flex h-[2vw] w-[6.2vw] items-center justify-center rounded-full bg-[#2D3482] text-[0.78vw] font-semibold text-white"
>
  {trip.viewTripText || "View Trip"}
</a>
        </div>

        {trip.offer && (
          <div className="mt-[1vw] flex items-center gap-[0.4vw] rounded-[0.35vw] bg-[#F4E5DA] px-[0.65vw] py-[0.55vw] text-[0.58vw] text-[#65574D]">
            <Info size={11} />
            <span>{trip.offer}</span>
          </div>
        )}

        <div className="mt-[1vw] border-t border-dashed border-[#D7D7D7]" />

<button
  onClick={handleAddToCompare}
  className="mt-[0.9vw] flex items-center gap-[0.4vw] text-[0.78vw] text-[#4E4E4E]"
>          {isSelected ? (
   <>
  <CheckCircle2
    size={14}
    strokeWidth={2}
    className="text-green-600"
    />
     <span>Added to Compare</span>
    </>
  ) : (
    <>
  <CirclePlus size={14} strokeWidth={1.8} />
   <span>Add to Compare</span>
  </>
)}

        </button>
      </div>

      <div className="absolute bottom-[-0.38vw] left-0 flex w-full justify-between px-[0.42vw]">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="h-[0.8vw] w-[0.8vw] rounded-full bg-[#F5F5F3]"
          />
        ))}
      </div>
    </div>
  );
}