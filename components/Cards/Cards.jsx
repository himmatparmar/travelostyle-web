export default function HowToBook() {
const bookingSteps = [
  {
    id: 1,
    number: "01",
    title: "Browse",
    description: "Explore from a range of group journeys offered by TravelOStyle to find a destination and departure that works for you ",
    bgColor: "#EFF3CF",
  },
  {
    id: 2,
    number: "02",
    title: "Confirm Details",
    description: "Check availability for your preferred date and confirm traveller details – number of people, ages, and anything else we should know to make your trip",
    bgColor: "#C2E5FF",
  },
  {
    id: 3,
    number: "03",
    title: "Complete Booking",
    description: "TravelOStyle will confirm your spot with an advance deposit. Complete the payment procedure and you’re all set!",
    bgColor: "#F2E2DA",
  },
  {
    id: 4,
    number: "04",
    title: "Set off",
    description: "We’ll send your pre-departure guides a few weeks before the trip, and stay in touch as the date gets closer.",
    bgColor: "#F2D09F",
  },
];
  return (
    <section className="py-16 px-6">
  <h2 className="font-taprom text-center text-2xl mb-12">
    how to Book <br />
   <span
    className="block text-3xl font-bold"
    style={{ fontFamily: "Nohemi" }}
  >
    Claim Your Spot
  </span>
  </h2>

      <div className="flex flex-wrap justify-center gap-5">
    {bookingSteps.map((step) => (
      <div
        key={step.id}
        className="w-[270px] h-[290px] rounded-2xl p-5 border border-black/10"
        style={{ backgroundColor: step.bgColor }}
      >
        <p
          className="text-4xl mb-4"
          style={{ fontFamily: "Taprom" }}
        >
          {step.number}
        </p>

        <h3
          className="text-xl font-bold mb-3"
          style={{ fontFamily: "Nohemi" }}
        >
          {step.title}
        </h3>

        <p
          className="text-sm leading-6"
          style={{ fontFamily: "Nohemi" }}
        >
          {step.description}
        </p>
      </div>
    ))}
      </div>
    </section>
  );
}