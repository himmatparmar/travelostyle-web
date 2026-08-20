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

export default function GroupSummaryCard({ journey, trip }) {
  if (!journey) return null;

  const startDate = trip?.startDate || journey?.startDate||'24May 2026';
  const endDate = trip?.endDate || journey?.endDate||'24May 2026';
  const price = trip?.discountedPrice ?? journey?.offerPrice;
  const originalPrice = trip?.originalPrice ?? journey?.originalPrice;
  const hasOffer = Number(trip?.offerPercentage) > 0 || Boolean(journey?.earlyBird) || Boolean(originalPrice);

  return (
    <div className="w-full max-w-[210px] overflow-hidden rounded-[5px] border-[1.5px] border-[#222222] bg-white font-sans shadow-sm">
  
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

        <div className="mt-2 flex flex-col gap-0.5">
          {trip?.seatsLeft != null && (
            <p className="text-[9.5px] font-bold leading-tight text-[#b91c1c]">
              {trip.seatsLeft} seats left
            </p>
          )}
          <p className="text-[9.5px] font-bold leading-tight text-[#15803d]">
            Guaranteed departure
          </p>
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