"use client";
import { useRouter } from "next/navigation";

const trustItems = [
  "Trusted local partners",
  "24/7 on-ground support",
  "Transparent inclusions",
];

export default function TrustBar() {
  const router = useRouter();
  return (
    <div className="w-full border-y border-[#EAE0D8] bg-[#F2E2DA] hidden md:block">
      <div className="flex items-center justify-around py-[1.15vw]">
       <div className="flex items-center justify-around py-[1.15vw]">
  {trustItems?.map((label, i) => (
    <div key={i} className="flex items-center">
      {i > 0 && (
        <span className="mx-[2.8vw] text-[0.9vw] font-bold text-ink">
          ✦
        </span>
      )}

      <span className="text-[18px] font-semibold text-ink">
        {label}
      </span>
    </div>
  ))}

  <span className="mx-[2.8vw] text-[0.9vw] font-bold text-ink">
    ✦
  </span>

  <button
    onClick={() => router.push("/comparison")}
    className="hidden md:flex items-center justify-center h-[36px] px-5 rounded-[6px] bg-[#2E2787] text-white text-[14px] font-semibold border border-white hover:bg-[#3B33A0] transition-colors"
  >
    Compare Trips
  </button>
</div>
      </div>
    </div>
  );
}
