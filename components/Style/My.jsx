import bg from "./bg.jpg";
export default function My() {
  const leftItems = [
    {
      title: "Shared Expenses",
      description:
        "Group pricing makes certain journeys genuinely accessible without cutting corners on quality.",
    },
    {
      title: "Built-in Travel Community",
      description:
        "You arrive on the journey with strangers but you rarely leave that way.",
    },
    {
      title: "TravelOStyle Destination Experts",
      description:
        "You’re guided throughout the journey by someone who knows the destination, handles the logistics and makes the whole thing feel effortless.",
    },
  ];

  const rightItems = [
    {
      title: "Set Departure Dates",
      description:
        "With itineraries that run throughout the year, you can plan ahead or book closer to when the mood strikes.",
    },
    {
      title: "Perfected Routes",
      description:
        "Our group journeys have been run multiple times – so the kinks are worked out, the operators are trusted, and nothing is being figured out for the first time.",
    },
  ];

  return (
    <section
  className="relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${bg.src})`,
  }}
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 px-3 lg:px-24 py-5">
       <h2
  className="text-white text-center text-4xl lg:text-5xl font-bold mb-5"
  style={{ fontFamily: "Nohemi" }}
>
  Why take a group journey
  <span className="block">
    with TravelOStyle?
  </span>
</h2>

<div className="flex gap-16 mb-14 gap-10">
  <div className="flex-1 h-[2px] bg-white" />
  <div className="flex-1 h-[2px] bg-white" />
</div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

  {/* Left Column */}
  <div className="space-y-12 mt-5">

  {leftItems.map((item, index) => (
    <div key={index}>

      {index > 0 && (
        <div className="w-20 h-[2px] bg-white mb-4" />
      )}

      <h3
        className="text-white text-2xl font-bold mb-3"
        style={{ fontFamily: "Nohemi" }}
      >
        {item.title}
      </h3>

      <p
        className="text-white/90 leading-7"
        style={{ fontFamily: "Nohemi" }}
      >
        {item.description}
      </p>

    </div>
  ))}

</div>

  {/* Right Column */}
  <div className="space-y-12 mt-5">

  {rightItems.map((item, index) => (
    <div key={index}>

      {index > 0 && (
        <div className="w-20 h-[2px] bg-white mb-4" />
      )}

      <h3
        className="text-white text-2xl font-bold mb-3"
        style={{ fontFamily: "Nohemi" }}
      >
        {item.title}
      </h3>

      <p
        className="text-white/90 leading-7"
        style={{ fontFamily: "Nohemi" }}
      >
        {item.description}
      </p>

    </div>
  ))}

  {/* CTA */}
  <div>
    <div className="w-20 h-[2px] bg-white mb-6" />

    <div className="flex items-center justify-between gap-6">
      <h3
        className="text-white text-2xl font-bold"
        style={{ fontFamily: "Nohemi" }}
      >
        What are you waiting for?
        <br />
        Your group awaits!
      </h3>

      <button
        className="bg-white text-black px-6 py-3 rounded-full font-semibold whitespace-nowrap"
        style={{ fontFamily: "Nohemi" }}
      >
        Discover All Group Journeys
      </button>
    </div>

    </div>
  </div>
</div>
        </div>

</section>  
);
}