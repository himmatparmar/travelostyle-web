import React from 'react';

export default function BookingSteps() {
  const steps = [
    {
      number: "1",
      title: "Browse",
      description: "Explore from a range of group journeys offered by TravelOStyle to find a destination and departure that works for you.",
      bgColor: "bg-[#eff3cf]", 
    },
    {
      number: "2",
      title: "Confirm Details",
      description: "Check availability for your preferred date and confirm traveller details – number of people, ages, and anything else we should know to make your trip.",
      bgColor: "bg-[#c2e5ff]",
    },
    {
      number: "3",
      title: "Complete booking",
      description: "TravelOStyle will confirm your spot with an advance deposit. Complete the payment procedure and you're all set!",
      bgColor: "bg-[#f2e2da]",
    },
    {
      number: "4",
      title: "Set Off!",
      description: "We'll send your pre-departure guides a few weeks before the trip, and stay in touch as the date gets closer.",
      bgColor: "bg-[#f2d09f]", 
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 w-full text-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <span className="block font-serif italic text-2xl text-gray-700 tracking-wide font-medium lowercase">
            how to book
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 mt-1">
            Claim Your Spot
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border border-black/80 flex flex-col text-left p-8 rounded-lg min-h-[340px] shadow-sm transition-transform duration-200 hover:-translate-y-1 ${step.bgColor} ${step.borderColor} ${step.borderWidth}`}
            >
              <span className="text-4xl font-extrabold text-gray-950 block mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-gray-950 tracking-tight mb-4">
                {step.title}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-800">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}