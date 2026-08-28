import React from 'react';


export default function WhyTakeJourney({
  title,
  bgImageUrl,
  features = [],
  ctaTitle,
  ctaSubtitle,
  ctaButtonText,
  onCtaClick
}) {
  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center py-16 px-4 md:px-12 text-white"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {title && (
          <h2 className="font-nohemi max-w-[374px] md:max-w-3xl mx-auto text-[32px] md:text-5xl font-semibold md:font-bold text-center tracking-[0.05em] md:tracking-tight mb-16 leading-[40px] md:leading-tight text-[#FAFAFA] md:text-white">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="border-t-2 md:border-t border-[#FAFAFA] md:border-white/40 pt-6 flex flex-col justify-between">
              <div>
                <h3 className="font-nohemi text-[16px] md:text-xl font-semibold md:font-bold leading-[28px] md:leading-normal tracking-[0.05em] md:tracking-wide text-[#FAFAFA] mb-3">{feature.title}</h3>
                <p className="font-nohemi max-w-[336px] md:max-w-md text-[16px] md:text-sm font-normal leading-[24px] md:leading-relaxed tracking-[0.05em] md:tracking-normal text-[#FAFAFA] md:text-white/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          <div className="border-t-2 md:border-t border-[#FAFAFA] md:border-white/40 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-nohemi max-w-[247px] md:max-w-none text-[18px] md:text-xl font-semibold md:font-bold leading-[28px] md:leading-normal tracking-[0.05em] md:tracking-wide text-[#FAFAFA]">{ctaTitle}</h3>
              <p className="text-white/90 text-sm font-semibold mt-1">{ctaSubtitle}</p>
            </div>
            <div className="pt-2 sm:pt-0">
              <button
                onClick={onCtaClick}
                className="inline-block bg-[#FAFAFA] text-blue-900 font-bold px-4 py-3 md:px-6 md:py-2 rounded-full text-sm tracking-wide shadow-md hover:bg-neutral-100 transition-colors whitespace-nowrap"
              >
                {ctaButtonText}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}