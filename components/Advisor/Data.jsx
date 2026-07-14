export default function Data() {

    return (
        <section className="py-16 px-40">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    <div className="flex flex-col">
                    <h2 className="font-nohemi text-2xl mb-12">
                        Not sure yet?
                        {/* That’s okay! <br /> */}
                        <span
                            className="block text-3xl font-bold"
                            style={{ fontFamily: "Nohemi" }}
                        >
                            That’s okay! <br />  
                            </span>
                    </h2>
                    <button
                        className="block rounded-2xl p-2"
                        style={{ fontFamily: "Nohemi", backgroundColor: "#2C3078", color: "white" }}
                    >
                        Talk to a Travel Advisor  </button>
                </div>

                <div className="max-w-xl" style={{ fontFamily: "Nohemi" }}>

                     <p className="text-xl">

                        Group journeys work beautifully for some travelers and less well
                        for others. At TravelOStyle, we would rather have that conversation
                        upfront than send you on a trip that doesn’t suit how you travel.
</p>
<p className="leading-7 mt-6">
                        Tell us how you like to move through the world. We’ll help you
                        figure out whether a group journey, a private option or something
                        tailor-made is a better fit for you.
                    </p>
                </div>
        </div> 
  </section>
    )
}