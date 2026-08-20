import Image from "next/image";
import { MoveRight } from "lucide-react";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDay(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { weekday: "long" });
}

export default function JourneySummaryCard({
  journey,
  departure,
  // false hides the departure-date block entirely (the "inspirational"
  // variant, e.g. the generic CTA near "Love the itinerary, but need
  // more?"). true (default) shows the real departure date — the "private"
  // variant used from a specific sold-out trip.
  showDepartureDate = true,
}) {
  if (!journey) return null;

  const startDate = showDepartureDate ? departure?.startDate : null;
  const endDate = showDepartureDate ? departure?.endDate : null;
  const price = journey?.offerPrice;
  const originalPrice = journey?.originalPrice;
  const hasOffer = Boolean(journey?.earlyBird) || Boolean(originalPrice);

  return (
    <div className="w-full max-w-[210px] overflow-hidden rounded-[5px] border-[1.5px] border-[#222222] bg-[#fafafa] font-sans shadow-sm mb-6">
  
      <div className="p-2.5 pb-0">
        <div className="relative h-[125px] w-full overflow-hidden">
          <Image
            src={journey.image || "/Morocco.svg"}
            alt={journey.title || "Journey"}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>

      <div className="px-2.5 pb-3 pt-2">
        <h4 className="text-[12.5px] font-bold leading-snug text-[#1A1A1A]">
          {journey.title}
        </h4>

        <div className="mt-2 space-y-0.5 text-[10px] text-[#444444]">
          {journey.days && <p>{journey.days}</p>}
          {journey.destinations && <p>{journey.destinations}</p>}
          {journey.groupSize && <p>{journey.groupSize}</p>}
        </div>

        <div className="mt-2.5">
          {hasOffer && originalPrice && (
            <p className="text-[9px] font-medium text-[#666666] line-through leading-none">
              ${Number(originalPrice).toLocaleString()}
            </p>
          )}
          <p className="mt-0.5 text-[14px] font-extrabold leading-none text-[#1A1A1A]">
            ${Number(price || 0).toLocaleString()}*
            <span className="text-[9.5px] font-medium text-[#444444]">
              /person
            </span>
          </p>
          <p className="mt-1 text-[8.5px] font-normal text-[#666666] leading-none">
            *double occupancy
          </p>
        </div>
      </div>

      {(startDate || endDate) && (
        <div className="border-t-[1.5px] border-[#222222] bg-[#eddcd2] px-2.5 py-2">
          <p className="text-[11px] font-bold leading-none text-[#1A1A1A]">
            Departure Date
          </p>
          <div className="mt-1.5 flex items-center justify-between text-[#1A1A1A]">
            <div>
              <p className="text-[9.5px] font-bold leading-tight">
                {formatDate(startDate)}
              </p>
              <p className="text-[8.5px] font-normal text-[#555555] leading-tight">
                {formatDay(startDate)}
              </p>
            </div>

            <div className="flex items-center justify-center px-1">
              <MoveRight size={18} strokeWidth={1.5} className="text-[#333333]" />
            </div>

            <div className="text-right">
              <p className="text-[9.5px] font-bold leading-tight">
                {formatDate(endDate)}
              </p>
              <p className="text-[8.5px] font-normal text-[#555555] leading-tight">
                {formatDay(endDate)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}