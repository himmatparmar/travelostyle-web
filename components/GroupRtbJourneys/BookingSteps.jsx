import React from "react";

export default function BookingSteps({ bookingRecords }) {
  const { subheading, mainHeading, steps } = bookingRecords;

  return (
    <section className="w-full py-16 px-4 md:px-12 bg-white font-sans text-stone-900">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="font-taprom font-serif text-xl text-stone-600 mb-2 lowercase tracking-wide">
          {subheading}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
          {mainHeading}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {steps?.map((step, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl border border-black/10 flex flex-col justify-between transition-shadow hover:shadow-md w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[280px] min-h-[380px] ${step.bgColor || "bg-white"}`}
          >
            <div>
              <span className="block text-4xl font-extrabold text-black mb-6">
                {step.number}
              </span>

              <h3 className="text-xl font-bold text-black mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-stone-800 text-sm md:text-[15px] leading-relaxed tracking-normal font-normal">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
