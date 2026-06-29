const trustItems = [
  "Trusted local partners",
  "24/7 on-ground support",
  "Transparent inclusions",
  "Advisor-led planning",
];

export default function TrustBar() {
  return (
    <div className="w-full border-y border-[#EAE0D8] bg-[#F2E2DA] hidden md:block">
      <div className="flex items-center justify-around py-[1.15vw]">
        {trustItems.map((label, i) => (
          <div key={i} className="flex items-center">
            {i > 0 && (
              <span className="mx-[2.8vw] text-[0.9vw] font-bold text-[#1A1A1A]">
               ✦
              </span>
            )}
            <span className="text-[18px] font-semibold text-[#1A1A1A]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
