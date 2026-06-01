"use client";

import Image from "next/image";

export default function ContactInquiry() {
  return (
    <section className="w-full bg-[#efefef] px-[1vw] py-[1vw]">
      <div className="relative mx-auto h-[39vw] max-w-[95vw] overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/Australia.svg"
          alt="Australia"
          fill
          priority
          className="object-cover"
        />

    
        <div className="absolute inset-0 bg-[#000]/30" />

     
        <div className="relative z-10 flex h-full gap-[5vw] px-[4.5vw] py-[2vw] text-white">
     
          <div className="w-[28%] pt-[1vw]">
            <h2 className="max-w-[18vw] text-[2.45vw] font-semibold leading-[1.05] tracking-[-0.08vw]">
              Not sure where to begin? Talk to us!
            </h2>

            <p className="mt-[1.2vw] max-w-[16vw] text-[0.8vw] leading-[1.7] text-white/80">
              We’re here to design the kind of travel
              that actually gives something back.
            </p>
          </div>

     
          <div className="flex-1 pt-[0.1vw]">
            <div className="grid grid-cols-2 gap-x-[4vw] gap-y-[1.6vw]">
              
           
              <div>
                <label className="mb-[0.25vw] block text-[0.63vw] font-medium">
                  First Name*
                </label>

                <input
                  type="text"
                  placeholder="Your first name"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.72vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-[0.25vw] block text-[0.63vw] font-medium">
                  Last Name*
                </label>

                <input
                  type="text"
                  placeholder="Your last name"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.72vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-[0.25vw] block text-[0.63vw] font-medium">
                  Title*
                </label>

                <input
                  type="text"
                  placeholder="Your title"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.72vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

             
              <div>
                <label className="mb-[0.25vw] block text-[0.63vw] font-medium">
                  Email ID*
                </label>

                <input
                  type="email"
                  placeholder="Your email ID"
                  className="w-full border-b border-white/70 bg-transparent pb-[0.45vw] text-[0.72vw] text-white placeholder:text-white/45 focus:outline-none"
                />
              </div>

        
              <div>
                <label className="mb-[0.25vw] block text-[0.63vw] font-medium">
                  Contact Number*
                </label>

                <div className="flex items-center gap-[0.6vw] border-b border-white/70 pb-[0.45vw]">
                  <select className="bg-transparent text-[0.72vw] text-white outline-none">
                    <option className="text-black">+1</option>
                    <option className="text-black">+91</option>
                  </select>

                  <input
                    type="text"
                    placeholder="+1"
                    className="w-full bg-transparent text-[0.72vw] text-white placeholder:text-white/45 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-[1.7vw]">
              <label className="mb-[0.45vw] block text-[0.63vw] font-medium">
                Your Message*
              </label>

              <textarea
                rows={5}
                placeholder="Tell us everything- your budget, your vision, your interests. The more the better."
                className="h-[7vw] w-full resize-none rounded-[0.7vw] bg-white px-[1vw] py-[0.9vw] text-[0.7vw] text-[#222] placeholder:text-[#8d8d8d] focus:outline-none"
              />
            </div>

            <button className="mt-[1vw] rounded-full bg-white px-[1.5vw] py-[0.55vw] text-[0.72vw] font-semibold text-[#2f2d89] transition-all duration-300 hover:bg-[#f5f5f5]">
              Submit Inquiry
            </button>

        
            <div className="mt-[1vw] flex items-start gap-[0.7vw]">
              
              <div className="mt-[0.15vw] h-[0.8vw] w-[0.8vw] rounded-[0.15vw] border border-white bg-white/10" />

              <div className="space-y-[0.2vw] text-[0.62vw] leading-[1.7] text-white/75">
                <p>
                  I consent to being contacted on the above provided details by TravelOStyle.
                </p>

                <p>
                  TravelOStyle typically responds within 48 hours. Your details are never shared with third parties.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}