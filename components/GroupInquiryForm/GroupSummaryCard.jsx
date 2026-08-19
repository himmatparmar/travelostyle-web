import Image from "next/image";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    day: "2-digit",
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

// Journey + departure snapshot shown alongside the Group Trip Inquiry form.
// Matches the same "frame + card" look as PrivateInquiryForm's
// JourneySummaryCard (square corners, bold outer frame, thin inner border).
// Unlike the private-journey card, this one is always tied to a specific
// confirmed group departure, so the departure date + guaranteed-departure
// badge are always shown.
export default function GroupSummaryCard({ journey, trip }) {
  if (!journey) return null;

  const startDate = trip?.startDate;
  const endDate = trip?.endDate;
  const price = trip?.discountedPrice ?? journey.offerPrice;
  const originalPrice = trip?.originalPrice ?? journey.originalPrice;
  const hasOffer = Number(trip?.offerPercentage) > 0 || Boolean(journey.earlyBird);

  return (
    <div className="w-full max-w-[270px] shrink-0 border-2 border-[#1A1A1A] bg-[#FAFAFA] p-2.5">
      <div className="overflow-hidden border border-[#D9D9D9] bg-white">
        <div className="relative h-[150px] w-full">
          <Image
            src={journey.image || "/Morocco.svg"}
            alt={journey.title || "Journey"}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="px-4 pb-4 pt-3.5">
          <h4 className="text-[16px] font-bold leading-tight text-[#1A1A1A]">
            {journey.title}
          </h4>

          <p className="mt-2 text-[13px] text-[#3A3A3A]">{journey.days}</p>
          <p className="text-[13px] text-[#3A3A3A]">{journey.destinations}</p>

          <div className="mt-2 flex flex-col gap-0.5">
            {trip?.seatsLeft != null && (
              <p className="text-[12px] font-semibold text-red-600">
                {trip.seatsLeft} seats left
              </p>
            )}
            <p className="text-[12px] font-semibold text-[#128914]">
              Guaranteed departure
            </p>
          </div>

          <div className="mt-2.5">
            {hasOffer && originalPrice ? (
              <p className="text-[12px] text-gray-400 line-through">
                ${Number(originalPrice).toLocaleString()}
              </p>
            ) : null}
            <p className="text-[21px] font-bold leading-tight text-[#1D1D1D]">
              ${Number(price || 0).toLocaleString()}
              <span className="text-[13px] font-semibold">*/person</span>
            </p>
            <p className="mt-0.5 text-[11px] text-gray-500">
              *double occupancy
            </p>
          </div>
        </div>

        {(startDate || endDate) && (
          <div className="bg-[#F2E5DE] px-4 py-3">
            <p className="text-[13px] font-bold text-[#1A1A1A]">
              Departure Date
            </p>
            <div className="mt-1.5 flex items-center justify-between text-[13px] text-[#1A1A1A]">
              <div>
                <p className="font-semibold">{formatDate(startDate)}</p>
                <p className="text-[11px] text-[#6B6B6B]">
                  {formatDay(startDate)}
                </p>
              </div>
              <span className="px-1 text-[#6B6B6B]">&rarr;</span>
              <div className="text-right">
                <p className="font-semibold">{formatDate(endDate)}</p>
                <p className="text-[11px] text-[#6B6B6B]">
                  {formatDay(endDate)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
