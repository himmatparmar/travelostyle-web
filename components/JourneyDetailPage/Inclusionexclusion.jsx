"use client";
import {
    Utensils,
    Hotel,
    Briefcase,
    Car,
    UserCheck,
    Plane,
    Shield,
    Wallet,
    FileText,
    HandCoins,
} from "lucide-react";

import { useState } from "react";
import { Info } from "lucide-react";

function TableCard({ title, items = [], theme }) {
    const current =
        theme === "inclusion"
            ? {
                bg: "bg-[#EFF3CF]",
                border: "border-black",
                text: "text-black",
            }
            : {
                bg: "bg-[#F2E2DA]",
                border: "border-black",
                text: "text-black",
            };
    return (

        <div
            className={`${current.bg} border-2 ${current.border} rounded-lg overflow-hidden`}
        >

            {/* Heading */}
            <div
                className={`
  h-[52px]
  self-start
  flex
  items-center
  justify-center
  font-bold
  text-[18px]
border-b-2
  ${current.border}
  ${current.text}
`}
            >
                {title}
            </div>


            {(items || []).map((item, index) => (
                <div
                    key={item.title + index}
                    className={`
  grid
  grid-cols-[220px_1fr]
  border-b-2
  ${current.border}
  last:border-b-0
`}
                >

                    {/* Icon + Title fixed column */}
                    <div
                        className={`
  flex
  items-center
  gap-3
  px-5
  h-full
  py-4
border-r-2
  ${current.border}
`}
                    >

                        {/* fixed icon position */}
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            {item.icon && (
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="
              w-10
              h-10
              object-contain
            "
                                />
                            )}
                        </div>


                        {/* title area, fills remaining space so it never overflows the fixed column */}
                        <div className="flex-1 min-w-0">
                            <h4
                                className={`
            font-semibold
            text-left
            text-[16px]
            leading-[20px]
            break-words
            ${current.text}
          `}
                            >
                                {item.title}
                            </h4>
                        </div>

                    </div>


                    {/* Description */}
                    <div
                        className="
        flex
        items-center
        px-5
        py-4
        text-[13px]
        leading-[20px]
        text-gray-600
      "
                    >
                        {item.description}
                    </div>


                </div>
            ))}
        </div>   // closes main card
    );
}
function MobileInclusions({
    inclusions = [],
    exclusions = []
}) {


    console.log("MOBILE INC DATA", inclusions);
    console.log("MOBILE EXC DATA", exclusions);

    const [openInc, setOpenInc] = useState(true);
    const [openExc, setOpenExc] = useState(false);


    return (

        <div className="block md:hidden px-4 py-5">


            <div className="
flex gap-3 
bg-[#FAF0E6]
rounded-lg
p-4
text-xs
mb-5
">

                <Info size={16} />

                <p>
                    Everything listed below is included in your journey pricing.
                </p>

            </div>



            {/* INCLUSIONS */}

            <div className="
rounded-xl
border
border-black
overflow-hidden
mb-5
">


                <button
                    onClick={() => setOpenInc(!openInc)}
                    className="
w-full
flex
justify-between
bg-[#EBF3CE]
px-4
py-4
font-bold
"
                >

                    INCLUSIONS

                    <span>
                        {openInc ? "-" : "+"}
                    </span>

                </button>


                {
                    openInc &&
                    (inclusions || []).map((item, index) => (

                        <div
                            key={index}
                            className="
p-4
border-t
border-black
"
                        >

                            <div className="
flex
gap-3
font-bold
text-sm
">

                                <img
                                    src={item.icon}
                                    className="w-6 h-6"
                                />

                                {item.title}

                            </div>


                            <p className="
text-xs
mt-2
">
                                {item.description}
                            </p>


                        </div>

                    ))
                }


            </div>




            {/* EXCLUSIONS */}

            <div className="
rounded-xl
border
border-black
overflow-hidden
">


                <button
                    onClick={() => setOpenExc(!openExc)}
                    className="
w-full
flex
justify-between
bg-[#FADBD8]
px-4
py-4
font-bold
"
                >

                    EXCLUSIONS

                    <span>
                        {openExc ? "-" : "+"}
                    </span>

                </button>



                {
                    openExc &&
                    exclusions.map((item, index) => (

                        <div
                            key={index}
                            className="
p-4
border-t
border-black
"
                        >

                            <div className="
flex
gap-3
font-bold
text-sm
">

                                <img
                                    src={item.icon}
                                    className="w-6 h-6"
                                />

                                {item.title}

                            </div>


                            <p className="
text-xs
mt-2
">
                                {item.description}
                            </p>


                        </div>

                    ))
                }



            </div>


        </div>

    )

}        // closes TableCard
export default function InclusionsExclusions({
    inclusions,
    exclusions,
}) {
    return (
        <>
            {/* DESKTOP ONLY */}
            <section className="hidden md:block max-w-7xl mx-auto px-4 py-10">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <TableCard
                        title="Inclusions"
                        items={inclusions}
                        theme="inclusion"
                    />

                    <TableCard
                        title="Exclusions"
                        items={exclusions}
                        theme="exclusion"
                    />

                </div>
            </section>



            {/* MOBILE ONLY */}
            <MobileInclusions
                inclusions={inclusions}
                exclusions={exclusions}
            />

        </>
    );
}