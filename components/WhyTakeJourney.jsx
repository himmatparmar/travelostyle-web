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
          <h2 className="text-3xl md:text-5xl font-bold text-center tracking-tight mb-16 max-w-3xl mx-auto leading-tight">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="border-t border-white/40 pt-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold tracking-wide mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

          <div className="border-t border-white/40 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold tracking-wide">{ctaTitle}</h3>
              <p className="text-white/90 text-sm font-semibold mt-1">{ctaSubtitle}</p>
            </div>
            <div className="pt-2 sm:pt-0">
              <button
                onClick={onCtaClick}
                className="inline-block bg-white text-blue-900 font-bold px-6 py-2 rounded-full text-sm tracking-wide shadow-md hover:bg-neutral-100 transition-colors whitespace-nowrap"
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