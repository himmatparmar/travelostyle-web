import Journey from "./Journeys";

export default function Index() {
  return (
    <div>
      <section className="w-full px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-[300px] md:max-w-none">
            <h2 className="text-[36px] md:text-[2.8vw] font-bold text-[#222] leading-tight text-left md:text-center">
              Find Your Fit
            </h2>

            <p className="mt-4 text-[16px] md:text-[1.05vw] leading-[26px] text-[#4A4A4A] text-left md:text-center">
              Whether you want to join a group, take a proven route and make it
              your own, or build something entirely from scratch, there&apos;s a
              way of travelling with us that fits exactly how you like to do it.
            </p>
          </div>
        </div>
      </section>
      <Journey
        title="GROUP JOURNEYS"
        imageSrc="GroupJourneys.svg"
        imageQuote="The ease of a shared journey with the comfort of the friends you make along the way"
        description="Travel with a small group of like-minded people on a set-departure itinerary. The route is established, the dates are fixed, and the logistics taken care of. You simply show up, take your seat, & enjoy the company."
        steps={[
          {
            id: 1,
            title: "Find a journey & departure you like",
            desc: "Browse TravelStyle's great journeys and choose a destination and date that works for you.",
          },
          {
            id: 2,
            title: "Review the Details",
            desc: "See what's included, what's not, and what you should expect before you commit.",
          },
          {
            id: 3,
            title: "Reserve your spot",
            desc: "Confirm your booking and we'll send everything you need to prepare.",
          },
          {
            id: 4,
            title: "Set Off!",
            desc: "Tour guide, transport, accommodation, and day-by-day plans all in place. Sit back and enjoy the journey!",
          },
        ]}
        btnText="Explore Group Journeys"
        bgColor="#E6ECCE"
      />
      <Journey
        title="PRIVATE JOURNEYS"
        imageSrc="/PrivateJouneys.svg"
        imageQuote="Reassurance of a well-planned route with the freedom to make it your own!"
        description="Start with one of TravelStyle's carefully designed itineraries, then reshape it around you. Add days, swap routes, fold in extra regions, adjust the pace, or bring the group size or go solo!"
        steps={[
          {
            id: 1,
            title: "Find Your Inspiration",
            desc: "Choose an itinerary from our private ready-to-go journeys that feel close to what you have in mind.",
          },
          {
            id: 2,
            title: "Collaborate With Us",
            desc: "Talk to us about your needs — more days, different accommodation, a slower trek or inter-island travel, we'll work it through with you.",
          },
          {
            id: 3,
            title: "Book Your Trip & Go!",
            desc: "Once the journey feels right, TravelStyle handles the booking, logistics, and on-ground support.",
          },
        ]}
        btnText="Get Inspired"
        bgColor="#F2E2DA"
      />

      <Journey
        title="TAILOR-MADE JOURNEYS"
        imageSrc="TailorJourneys.svg"
        imageQuote="An itinerary that feels like something you intentionally decided upon"
        description="An exciting template, like TravelStyle, but in a sitting conversation about how you like to travel and what you're hoping to feel — and then TravelStyle builds a journey entirely around that."
        steps={[
          {
            id: 1,
            title: "Tell Us Everything",
            desc: "Your interests, your timeline, your budget, your dream, and what you hope to feel and see to us.",
          },
          {
            id: 2,
            title: "We'll Build Your Journey",
            desc: "Our travel consultants will design a personalized itinerary around everything you've shared.",
          },
          {
            id: 3,
            title: "Refine Until It Feels Right",
            desc: "We'll bounce ideas until the journey on paper matches the one in your head. Then we take it from there and make it happen.",
          },
        ]}
        btnText="Build Your Journey"
        bgColor="#FFDDBD"
      />
    </div>
  );
}
