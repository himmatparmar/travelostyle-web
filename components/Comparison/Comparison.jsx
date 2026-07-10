import Image from "next/image";

export default function TripComparison() {
  const trips = [
    {
      id: 1,
      title: "The Golden Triangle",
      image: "/delhi.jpg",
      duration: "7 Days / 6 Nights",
      destinations: 5,
  itinerary: [
  { day: "Day 1", place: "Delhi" },
  { day: "Day 2", place: "Agra" },
  { day: "Day 3", place: "Jaipur" },
],
      stays: "4 Star Hotels",
      region: "Europe",
      offer: "15% OFF",
      price: "₹1,25,000",
    },
    {
      id: 2,
      title: "The Golden Triangle",
      image: "/delhi.jpg",
      duration: "8 Days / 7 Nights",
      destinations: 6,
       itinerary: [
  { day: "Day 1", place: "America" },
  { day: "Day 2", place: "jammu" },
  { day: "Day 3", place: "Kashmir" },
],
      stays: "3 Star Hotels",
      region: "Europe",
      offer: "Free Breakfast",
      price: "₹1,45,000",
    },
  ];

 return ( <div className="mb-8 font-nohemi">
   <h1 className="text-2xl font-bold mb-4 pt-8 px-6">
     Compare Trips </h1>
<div className="w-full max-w-[92%] border-2 border-gray-300 rounded-[10px] bg-white shadow-sm mb-6 mx-auto">
    <div className="pt-[27px] px-6"> <h2 className="text-[20px] font-semibold text-gray-800"> 
      Selected Trips </h2>
       <p className="text-sm text-gray-500 mt-1"> 
        
        Choose up to 3 Trips to Compare </p>
   </div> 
   <hr className="mt-3 border-gray-600" /> 
 <div className="grid gap-4 mt-6 px-6 pb-6" style={{ gridTemplateColumns: "140px repeat(3, minmax(0, 1fr))", }} > 
  {/* Labels */} 
  <div className="pt-[330px] pl-12">
  <div className="h-[20px] flex items-center text-[13px] font-bold">Duration</div>

  <div className="h-[95px] flex items-center text-[13px] font-bold">Destinations</div>

  <div className="h-[120px] flex items-start text-[13px] font-bold">
    Itinerary
  </div>

  <div className="h-[90px] flex items-center text-[13px] font-bold">Stays</div>

  <div className="h-[20px] flex items-center text-[13px] font-bold">Region</div>

  <div className="h-[90px] flex items-center text-[13px] font-bold">Offer</div>

  <div className="h-[120px] flex items-center text-[13px] font-bold">
    Price
  </div>

  <div className="h-[150px] flex items-center text-[13px] font-bold">
    Way to Travel
  </div>
</div>
    {/* Trip Cards */}
     {trips.map((trip, index) => (
   <div key={trip.id} className={`w-full h-[1006px] rounded-[10px] p-4 bg-white mt-6 ${ index === 0 ? "border border-gray-200" : "border border-gray-300" }`} > 
   <div className="relative h-[213px] rounded-lg overflow-hidden"> 
    <Image src={trip.image} alt={trip.title} fill className="object-cover" unoptimized />
     </div> <h3 className="text-center font-semibold mt-4 mb-8"> 
      {trip.title} 
      </h3> <div className="text-center space-y-8"> 
        <div>{trip.duration}</div> 
        <div>{trip.destinations}</div> 
        <div className="w-fit mx-auto text-left pb-7">
           {trip.itinerary.map((item, idx) => (
           <div key={idx} className="mb-2 whitespace-nowrap" > 
           <span className="font-bold"> {item.day}: </span>{" "} {item.place} 
           </div> ))}
           
            </div>
            <div>{trip.stays}</div> 
            <div>{trip.region}</div> 
            
            <div>{trip.offer}</div>
     <div className="bg-[#FFF3E8] rounded-lg p-4 flex justify-between items-center">
       <div className="text-left"> <div className="text-sm text-gray-600"> From </div> 
       <div className="font-bold text-xl leading-tight"> {trip.price} / Person </div> 
       <div className="text-xs text-gray-600 mt-1"> Double Occupancy </div> 
       </div> 
       <button className="bg-[#2C3078] hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-colors"> 
        View Trip 
        </button>
         </div> 
         <div className="mt-6">
           <div>{trip.travelMode}</div>
            <hr className="my-4 border-gray-300" />
         <div className="flex items-center justify-between py-3 gap-2">
  <span className="font-medium whitespace-nowrap">
    Group Journey
  </span>

  <a
    href={`/trips/${trip.id}/availability`}
    className="font-bold underline text-sm whitespace-nowrap"
  >
    Check Availability
  </a>
</div>
         <hr className="border-gray-300" />
          <div className="flex items-center justify-between py-3 gap-2">
  <span className="font-medium whitespace-nowrap">
    Private Journey
  </span>

  <a
    href={`/trips/${trip.id}/private`}
    className="font-bold underline text-sm whitespace-nowrap"
  >
    Request Private Journey
  </a>
</div>
     </div> 
     </div>
      </div> 
    ))} 
    {/* Add Trip */}
     <div className="w-full border-2 border-dashed border-gray-300 rounded-[10px] p-4 mt-6"> 
  <div className="h-[213px] flex items-center justify-center text-6xl text-gray-400"> 
    +
     </div>
      <h3 className="text-center font-semibold mt-6 mb-8"> Add Trip to Compare 
  </h3> 
  </div> 
  </div>
   </div>
    </div> ); }