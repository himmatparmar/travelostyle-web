export default function ComingSoon({ label }) {
  return (
    <section className="w-full py-16 px-6 flex items-center justify-center bg-[#f6f6f6]">
      <p className="text-[#8a8a8a] text-sm md:text-base tracking-wide">
        {label ? `${label} — Coming Soon` : "Coming Soon"}
      </p>
    </section>
  );
}
