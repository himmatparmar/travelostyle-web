"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  CirclePlus,
  CheckCircle2,
  Clock3,
  Info,
  MapPin,
} from "lucide-react";
import JourneyCardImage from "@/components/JourneyCardImage";
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
      className={`relative flex h-auto min-w-0 flex-col overflow-hidden rounded-2xl px-4 pt-4 pb-5
      md:w-[390px] md:min-w-[390px] md:h-[640px] md:rounded-xl md:px-3 md:pt-3 md:pb-4
      ${
        trip.active
          ? "border border-[#6BA6FF]"
          : "border border-[#E8E8E8]"
      }`}
      style={{ backgroundColor: "#FAFAFA", boxShadow: "0px 10px 15px 0px #0000001A" }}
    >
      <div className="mb-3 flex min-h-[1.5rem] flex-wrap gap-2 md:mb-3 md:min-h-[28px] md:gap-2">
        {(trip.tags || []).map((tag) => (
          <span
            key={tag}
            className={`rounded-md px-3 py-1 text-xs font-medium md:rounded-[5px] md:px-3 md:py-1 md:text-[11px]
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

      <div className="relative h-48 w-full overflow-hidden rounded-lg md:h-[213px] md:w-[349px] md:rounded-[3px]">
        <JourneyCardImage src={trip.image} alt={trip.title} />
      </div>

      <div className="flex flex-1 flex-col pt-3 md:pt-4">
        <h3 className="text-lg font-semibold leading-[1.3] text-[#232323] md:text-[16px]">
          {trip.title}
        </h3>

        <p className="mt-2 text-sm leading-[1.55] text-[#666666] md:mt-2 md:text-[11px]">
          {trip.desc}
        </p>

        <div className="mt-3 flex items-center gap-4 text-xs text-[#717171] md:mt-3 md:gap-4 md:text-[8px]">
          <div className="flex items-center gap-1 md:gap-1">
            <Clock3 size={12} strokeWidth={1.8} />
            {trip.days}
          </div>

          <div className="flex items-center gap-1 md:gap-1">
            <MapPin size={12} strokeWidth={1.8} />
            {trip.destinations}
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between md:mt-4">
 <div className="flex items-end gap-1 md:gap-1">
  <div className="flex flex-col">
    <h4 className="text-2xl font-semibold leading-none text-[#1D1D1D] md:text-[20px]">
      ${Number(trip.price).toLocaleString()}*
    </h4>

  {trip.originalPrice > trip.price && (
  <span className="mt-1 text-xs text-[#7B7B7B] leading-none md:mt-[2px] md:text-[11px]">
    was{" "}
    <span className="line-through">
      ${Number(trip.originalPrice).toLocaleString()}
    </span>
  </span>
)}
  </div>

  <span className="mb-1 text-[10px] leading-[1.15] text-[#7B7B7B] md:mb-[2px] md:text-[8px]">
    /person
    <br />
    double occupancy*
  </span>
</div>

          <a
  href={trip.viewTripUrl}
  className="flex h-10 items-center justify-center rounded-full bg-[#2D3482] px-5 text-sm font-semibold text-white md:h-[29px] md:w-[89px] md:px-0 md:text-[11px]"
>
  {trip.viewTripText || "View Trip"}
</a>
        </div>

        {trip.offer && (
          <div className="mt-4 flex items-center gap-2 rounded-md bg-[#F4E5DA] px-3 py-2 text-xs text-[#65574D] md:mt-4 md:gap-1.5 md:rounded-[5px] md:px-2.5 md:py-2 md:text-[8px]">
            <Info size={11} />
            <span>{trip.offer}</span>
          </div>
        )}

        <div className="mt-4 border-t border-dashed border-[#D7D7D7] md:mt-4" />

<button
  onClick={handleAddToCompare}
  className="mt-3 flex items-center gap-2 text-sm text-[#4E4E4E] md:mt-3 md:gap-1.5 md:text-[11px]"
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

      <div className="absolute bottom-[-2px] left-0 hidden w-full justify-between px-1.5 md:flex">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="h-3 w-3 rounded-full bg-[#F5F5F3]"
          />
        ))}
      </div>
    </div>
  );
}
