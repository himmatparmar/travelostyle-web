import JourneyCard from "./JourneyCard";

export default function JourneyGrid({ journeys }) {
  if (!journeys.length) {
    return (
      <div className="py-10 text-center text-gray-500">
        No journeys found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-[1.4vw]">
      {journeys.map((trip) => (
        <JourneyCard
          key={trip.id}
          trip={trip}
        />
      ))}
    </div>
  );
}