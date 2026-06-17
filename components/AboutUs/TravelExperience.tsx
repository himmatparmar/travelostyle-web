export default function TravelExperience() {
  const items = [
    {
      title: "Feeling Understood",
      text: "Before anything is booked, there is space to understand what you want, what matters to you, and what kind of trip actually fits.",
    },
    {
      title: "Good Judgment",
      text: "Recommendations are explained clearly, so you understand why something is being suggested and what it means for your trip.",
    },
    {
      title: "Having Clarity",
      text: "There is clarity around what is covered, what needs separate planning, and what may be unnecessary. You have the full picture.",
    },
    {
      title: "Feeling Supported",
      text: "You are not left to untangle any confusion on your own. There is support when something needs to be sorted.",
    },
    {
      title: "Frictionless planning",
      text: "Things move seamlessly, which leaves more room for you to be present in the experience instead of caught up in logistics.",
    },
    {
      title: "Experiencing Joy",
      text: "Beyond the logistics and planning, a trip should feel good while you are in it. It should feel uplifting, rejuvenating, and full of the moments that stay with you for a lifetime.",
    },
  ];

  return (
    <section className="px-[113px] py-[100px]">
      <div className="overflow-hidden rounded-[6px] border border-[#4A4A4A]">
        
        {/* Heading */}
        <div className="h-[70px] bg-[#E7ECC7] flex items-center justify-center border-b border-[#4A4A4A]">
          <h2 className="text-[22px] font-semibold">
            Our Idea Of A Good Travel Experience
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`p-6 min-h-[260px] ${
                index !== items.length - 1
                  ? "border-r border-[#4A4A4A]"
                  : ""
              }`}
            >
              <h3 className="text-[18px] font-semibold leading-[24px] mb-6">
                {item.title}
              </h3>

              <p className="text-[13px] leading-[28px] text-[#4A4A4A]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}