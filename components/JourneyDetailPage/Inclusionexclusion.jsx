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

function TableCard({ title, items = [], theme }) { const current =
  theme === "inclusion"
    ? {
        bg: "bg-[#EFF3CF]",
        border: "border-[#D8DFA5]",
        text: "text-green-700",
      }
    : {
        bg: "bg-[#F2E2DA]",
        border: "border-[#E5C8B8]",
        text: "text-red-700",
      };
  return (
    <div
      className={`${current.bg} border ${current.border} rounded-lg overflow-hidden`}
    >

      {/* Heading */}
      <div
        className={`
          h-[60px]
          flex
          items-center
          justify-center
          font-bold
          text-[24px]
          border-b
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
      border-b
      ${current.border}
      last:border-b-0
    `}
  >

    {/* Icon + Title fixed column */}
    <div
      className={`
        flex
        items-center
        gap-4
        px-6
        py-5
        border-r
        ${current.border}
      `}
    >

      {/* fixed icon position */}
      <div className="w-[64px] h-[46px] flex items-center justify-center shrink-0">
        {item.icon && (
          <img
            src={item.icon}
            alt={item.title}
            className="
              w-[64px]
              h-[46px]
              object-contain
            "
          />
        )}
      </div>


      {/* fixed title area */}
      <div className="w-[120px]">
        <h4
          className={`
            font-semibold
            text-left
            text-[16px]
            leading-[20px]
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
        py-5
        text-[14px]
        leading-[22px]
        text-gray-700
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

const [openInc,setOpenInc]=useState(true);
const [openExc,setOpenExc]=useState(false);


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

<Info size={16}/>

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
onClick={()=>setOpenInc(!openInc)}
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
(inclusions || []).map((item,index)=>(

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
onClick={()=>setOpenExc(!openExc)}
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
exclusions.map((item,index)=>(

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
        <div className="grid lg:grid-cols-2 gap-8">

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