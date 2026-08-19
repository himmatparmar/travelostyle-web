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
export default function JourneyCard({
   trip,
  variant = "slider",
}) {
  const widthClass =
    variant === "slider"
      ? "min-w-[18.7vw]"
      : "w-full";
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
      className={`relative flex h-auto min-w-0 flex-col overflow-hidden rounded-2xl bg-white px-4 pt-4 pb-5
      md:h-[31.8vw] md:min-w-[18.7vw] md:rounded-[0.7vw] md:px-[0.8vw] md:pt-[0.8vw] md:pb-[1vw]
      ${
        trip.active
          ? "border border-[#6BA6FF]"
          : "border border-[#E8E8E8]"
      }`}
    >
      <div className="mb-3 flex min-h-[1.5rem] flex-wrap gap-2 md:mb-[0.8vw] md:min-h-[1.6vw] md:gap-[0.45vw]">
        {(trip.tags || []).map((tag) => (
          <span
            key={tag}
            className={`rounded-md px-3 py-1 text-xs font-medium md:rounded-[0.3vw] md:px-[0.75vw] md:py-[0.3vw] md:text-[0.63vw]
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

      <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-[10vw] md:rounded-[0.15vw]">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col pt-3 md:pt-[1vw]">
        <h3 className="text-lg font-semibold leading-[1.3] text-[#232323] md:text-[1.1vw]">
          {trip.title}
        </h3>

        <p className="mt-2 text-sm leading-[1.55] text-[#666666] md:mt-[0.6vw] md:text-[0.76vw]">
          {trip.desc}
        </p>

        <div className="mt-3 flex items-center gap-4 text-xs text-[#717171] md:mt-[0.9vw] md:gap-[1vw] md:text-[0.58vw]">
          <div className="flex items-center gap-1 md:gap-[0.28vw]">
            <Clock3 size={12} strokeWidth={1.8} />
            {trip.days}
          </div>

          <div className="flex items-center gap-1 md:gap-[0.28vw]">
            <MapPin size={12} strokeWidth={1.8} />
            {trip.destinations}
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between md:mt-[1vw]">
 <div className="flex items-end gap-1 md:gap-[0.2vw]">
  <div className="flex flex-col">
    <h4 className="text-2xl font-semibold leading-none text-[#1D1D1D] md:text-[1.45vw]">
      ${Number(trip.price).toLocaleString()}*
    </h4>

  {trip.originalPrice > trip.price && (
  <span className="mt-1 text-xs text-[#7B7B7B] leading-none md:mt-[0.12vw] md:text-[0.75vw]">
    was{" "}
    <span className="line-through">
      ${Number(trip.originalPrice).toLocaleString()}
    </span>
  </span>
)}
  </div>

  <span className="mb-1 text-[10px] leading-[1.15] text-[#7B7B7B] md:mb-[0.12vw] md:text-[0.52vw]">
    /person
    <br />
    double occupancy*
  </span>
</div>

          <a
  href={trip.viewTripUrl}
  className="flex h-10 items-center justify-center rounded-full bg-[#2D3482] px-5 text-sm font-semibold text-white md:h-[2vw] md:w-[6.2vw] md:px-0 md:text-[0.78vw]"
>
  {trip.viewTripText || "View Trip"}
</a>
        </div>

        {trip.offer && (
          <div className="mt-4 flex items-center gap-2 rounded-md bg-[#F4E5DA] px-3 py-2 text-xs text-[#65574D] md:mt-[1vw] md:gap-[0.4vw] md:rounded-[0.35vw] md:px-[0.65vw] md:py-[0.55vw] md:text-[0.58vw]">
            <Info size={11} />
            <span>{trip.offer}</span>
          </div>
        )}

        <div className="mt-4 border-t border-dashed border-[#D7D7D7] md:mt-[1vw]" />

<button
  onClick={handleAddToCompare}
  className="mt-3 flex items-center gap-2 text-sm text-[#4E4E4E] md:mt-[0.9vw] md:gap-[0.4vw] md:text-[0.78vw]"
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

      <div className="absolute bottom-[-2px] left-0 hidden w-full justify-between px-[0.42vw] md:flex">
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
