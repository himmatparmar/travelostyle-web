import React from 'react';

export default function TravelOStylePromo() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 lg:px-24" 
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      <div className="absolute inset-0 bg-black/40 bg-blend-multiply pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full text-white">
        
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight max-w-3xl mx-auto leading-tight">
          Why take a group journey with TravelOStyle?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          <div className="space-y-4">
            <hr className="border-t border-white/40 w-full" />
            <h3 className="text-xl font-bold tracking-wide pt-2">Shared Expenses</h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-md">
              Group pricing makes certain journeys genuinely accessible without cutting corners on quality.
            </p>
          </div>

          <div className="space-y-4">
            <hr className="border-t border-white/40 w-full" />
            <h3 className="text-xl font-bold tracking-wide pt-2">Set Departure Dates</h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-md">
              With itineraries that run throughout the year, you can plan ahead or book closer to when the mood strikes.
            </p>
          </div>
          <div className="space-y-4">
            <hr className="border-t border-white/40 w-full" />
            <h3 className="text-xl font-bold tracking-wide pt-2">Built-in Travel Community</h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-md">
              You arrive on the journey with strangers but you rarely leave that way.
            </p>
          </div>

          <div className="space-y-4">
            <hr className="border-t border-white/40 w-full" />
            <h3 className="text-xl font-bold tracking-wide pt-2">Perfected Routes</h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-md">
              Our group journeys have been run multiple times — so the kinks are worked out, the operators are trusted, and nothing is being figured out for the first time.
            </p>
          </div>
          <div className="space-y-4">
            <hr className="border-t border-white/40 w-full" />
            <h3 className="text-xl font-bold tracking-wide pt-2">TravelOStyle Destination Experts</h3>
            <p className="text-sm text-gray-200 leading-relaxed max-w-md">
              You&apos;re guided throughout the journey by someone who knows the destination, handles the logistics and makes the whole thing feel effortless.
            </p>
          </div>

          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <hr className="border-t border-white/40 w-full" />
              <h3 className="text-xl font-bold tracking-wide pt-2">What are you waiting for?</h3>
              <p className="text-lg font-semibold text-gray-200">You group awaits!</p>
            </div>
            
            <div className="pt-4">
              <button className="bg-white text-gray-900 font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100 transition duration-300 shadow-md text-sm">
                Discover All Group Journeys
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}