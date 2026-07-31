"use client";
import { useState } from "react";
import React from "react";

// const departures = [
//     {

//         startDate: "11 May 2026",
//         startDay: "Monday",
//         endDate: "24 May 2026",
//         endDay: "Friday",


//         statusType: "soldout",
//         line1: "Journey Sold Out",

//         statusColor: "text-red-600",
//         price: "$5000",
//         offer: "No offers available",
//         button: "Request a Private Journey",
//         buttonStyle: "bg-[#2C3078] text-white",
//     },

//     {
//         startDate: "11 May 2026",
//         startDay: "Monday",
//         endDate: "24 May 2026",
//         endDay: "Friday",

//         statusType: "guaranteed",
//         line1: "2 Seats Left",
//         line2: "Guaranteed Departure",

//         statusColor: "text-green-600",
//         price: "$5000",
//         offer: "No offers available",
//         button: "Enquire For This Date",
//         buttonStyle: "bg-[#2C3078] text-white",
//     },
//     {

//         startDate: "11 May 2026",
//         startDay: "Monday",
//         endDate: "24 May 2026",
//         endDay: "Friday",
//         statusType: "earlybird",
//         line1: "Seats Open",
//         line2: "Early Bird Available",


//         discountedPrice: "$3500",
//         originalPrice: "$5000",


//         offerPercent: "30% off",
//         offerText: "Early Bird Offer applied to price",


//         button: "Claim Early Bird Call",
//         buttonStyle: "bg-[#2C3078] text-white",
//     },
//     {

//         startDate: "11 May 2026",
//         startDay: "Monday",
//         endDate: "24 May 2026",
//         endDay: "Friday",


//         statusType: "open",
//         line1: "Seats Open",
//         statusColor: "text-green-600",
//         price: "$5000",
//         offer: "No offers available",
//         button: "Enquire For This Date",
//         buttonStyle: "bg-[#2C3078] text-white",
//     },
// ];



export default function JourneyPricing({
    journey,
    departures = [],
}) {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };
    const [selectedYear, setSelectedYear] = useState("2026");

    const trips = departures.map((item) => ({
        startDate: item.attributes?.field_departure_date,
        endDate: item.attributes?.field_return_date,
        statusType: item.attributes?.field_status,
        originalPrice: journey?.price,
        discountedPrice: journey?.price,
        offer: item.attributes?.field_offer,
        button:
            item.attributes?.field_status === "soldout"
                ? "Request a Private Journey"
                : "Enquire For This Date",
    }));
    const filteredTrips = trips.filter((trip) => {
        const year = new Date(trip.startDate)
            .getFullYear()
            .toString();

        return year === selectedYear;
    });
    if (filteredTrips.length === 0) {
  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-center text-[32px] font-semibold">
        Book Your Journey
      </h2>

      <div className="flex justify-center mt-4">
        <div className="flex border-2 border-black rounded-[5px] overflow-hidden">
          {["2026", "2027"].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 ${
                selectedYear === year
                  ? "bg-[#F2E2DA]"
                  : "bg-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-500">
          No departures currently available for {selectedYear}
        </p>
      </div>
    </section>
  );
}
    console.log("Departures:", departures);
    console.log("Trips:", trips);
    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

    const getDay = (date) =>
        new Date(date).toLocaleDateString("en-GB", {
            weekday: "long",
        });


    return (
        <section className="w-full max-w-full px-4 py-6 overflow-x-hidden">
            <div className="text-center mb-8">
                <h2

                    className="
          font-semibold
          text-[32px]
          leading-[56px]
          tracking-[0.05em]
          text-[#1A1A1A]
        "
                    style={{ fontFamily: "Nohemi" }}
                >
                    Book Your Journey
                </h2>

                <div className="flex justify-center">
                    <div
                        className="flex border-2 border-black rounded-[5px] overflow-hidden"
                        style={{
                            width: "160px",
                            height: "40px",
                        }}
                    >
                        {["2026", "2027"].map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(year)}
                                className={`flex-1 flex items-center justify-center transition-colors duration-200
              ${selectedYear === year
                                        ? "bg-[#F2E2DA] text-[#222222]"
                                        : "bg-white text-[#666666]"
                                    }`}
                                style={{
                                    fontFamily: "Nohemi",
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "13px",
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
            <div className="md:hidden w-full space-y-4">
                {filteredTrips.map((trip, index) => {
                    const isExpanded = expandedCard === index;

                    return (
                        <div
                            key={index}
                            className="border border-black rounded-[8px] bg-white overflow-hidden"
                        >
                            {/* Top Section - Always Visible */}
                            <div className="p-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[12px] font-semibold">
                                            Trip Start: {formatDate(trip.startDate)}
                                        </p>

                                        <p className="text-[12px] font-semibold mt-1">
                                            Trip End: {formatDate(trip.endDate)}
                                        </p>

                                        <div className="mt-2">
                                            {trip.statusType === "soldout" ? (
                                                <span className="text-red-600 text-[11px] font-semibold">
                                                    Journey Sold Out
                                                </span>
                                            ) : (
                                                <span className="text-[#128914] text-[11px] font-semibold">
                                                    Seats Available
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-[10px] text-gray-500">from</p>

                                        <p className="text-[22px] font-bold">
                                            {trip.discountedPrice || trip.originalPrice}
                                        </p>

                                        <p className="text-[10px] text-gray-500">
                                            / person
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Hidden Section */}
                            {isExpanded && (
                                <div className="border-t border-neutral-300 p-4">
                                    <div className="text-center mb-4">
                                        {trip.offer ? (
                                            <p className="text-[#128914] font-semibold">
                                                {trip.offer}
                                            </p>
                                        ) : (
                                            <p className="text-gray-500">
                                                No offers available
                                            </p>
                                        )}
                                    </div>

                                    <button className="w-full bg-[#2C3078] text-white rounded-full py-3 font-medium">
                                        {trip.button}
                                    </button>
                                </div>
                            )}

                            {/* Show More / Less */}
                            <button
                                onClick={() => toggleCard(index)}
                                className="w-full border-t border-neutral-300 py-3 text-xs font-semibold flex justify-center items-center gap-2"
                            >
                                {isExpanded ? "− Show less" : "+ Show more"}
                            </button>
                        </div>
                    );
                })}

            </div>
            <div className="hidden md:block">

                <div className="overflow-x-auto">
                    <div className="min-w-[1200px] border-2 border-black rounded-[10px] overflow-hidden">
                        <table
                            className="
    w-full
    border-separate
    border-spacing-0
    bg-white
  "
                        >
                            <thead>

                                <tr className="h-[60px] bg-[#F2E2DA] border-b-2 border-black">
                                    <th className="w-[24%] border-r-2 border-b-2 border-black text-center font-semibold">
                                        Trip Dates
                                    </th>

                                    <th className="border-r-2 border-b-2 border-black text-center font-semibold">
                                        Status
                                    </th>

                                    <th className="w-[20%] border-r-2 border-b-2 border-black text-center font-semibold">
                                        Pricing
                                    </th>

                                    <th className="w-[22%] border-r-2 border-b-2 border-black text-center font-semibold">
                                        Offers Available
                                    </th>

                                    <th className=" border-r-2 border-b-2 border-black text-center font-semibold">
                                        Book Your Trip
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTrips.map((trip, index) => (
                                    <tr key={index} className="h-[104px] border-b-2 border-black">
                                        <td className="border px-5 py-6 align-middle">
                                            <div className="flex items-start gap-3">
                                                <div>
                                                    <div
                                                        className="font-medium text-[16px] text-[#1A1A1A]"
                                                        style={{ fontFamily: "Nohemi" }}
                                                    >
                                                        {formatDate(trip.startDate)}
                                                    </div>

                                                    <div
                                                        className="text-[12px] text-[#6B7280] mt-1"
                                                        style={{ fontFamily: "Nohemi" }}
                                                    >
                                                        {getDay(trip.startDate)}
                                                    </div>
                                                </div>

                                                <span className="text-[16px] mt-[1px]">→</span>

                                                <div>
                                                    <div
                                                        className="font-medium text-[16px] text-[#1A1A1A]"
                                                        style={{ fontFamily: "Nohemi" }}
                                                    >
                                                        {formatDate(trip.endDate)}
                                                    </div>

                                                    <div
                                                        className="text-[12px] text-[#6B7280] mt-1"
                                                        style={{ fontFamily: "Nohemi" }}
                                                    >
                                                        {getDay(trip.endDate)}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="border px-4 py-5 align-middle">
                                            {trip.statusType === "available" && (
                                                <div
                                                    className="text-[#128914] text-[14px] leading-[16px] font-medium"
                                                    style={{ fontFamily: "Nohemi" }}
                                                >
                                                    Seats Available
                                                </div>
                                            )}
                                        </td>
                                        <td className="border px-4 py-5">
                                            <div className="flex items-baseline gap-[2px]">
                                                <span className="text-[20px] font-semibold">
                                                    {trip.discountedPrice || trip.originalPrice}
                                                </span>

                                                <span className="text-[12px]">
                                                    / per person
                                                </span>
                                            </div>

                                            {trip.discountedPrice && (
                                                <div className="text-[10px] text-[#9CA3AF]">
                                                    was ${trip.originalPrice}
                                                </div>
                                            )}
                                        </td>

                                        <td className="border px-4 py-5">
                                            {trip.offer ? (
                                                <div className="text-[14px] text-[#128914]">
                                                    {trip.offer}
                                                </div>
                                            ) : (
                                                <div className="text-[14px] text-[#4B5563]">
                                                    No offers available
                                                </div>
                                            )}
                                        </td>
                                        <td className="border px-4 py-5 text-center">
                                            {trip.statusType === "soldout" ? (
                                                <span
                                                    className="
        text-[14px]
        font-medium
        underline
        cursor-pointer
        text-[#1A1A1A]
      "
                                                    style={{ fontFamily: "Nohemi" }}
                                                >
                                                    Request a Private Journey
                                                </span>
                                            ) : (
                                                <button
                                                    className="
        bg-[#2C3078]
        text-white
        rounded-full
        px-6
        py-2
        text-[14px]
        font-medium
      "
                                                    style={{ fontFamily: "Nohemi" }}
                                                >
                                                    {trip.button}
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col items-start">
                <p
                    className="text-[#1A1A1A]"
                    style={{
                        width: "263px",
                        height: "13px",
                        fontFamily: "Nohemi",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "13px",
                    }}
                >
                    Not sure which date works?
                </p>

                <button
                    className="underline text-[#1A1A1A] mt-[12px]"
                    style={{
                        width: "185px",
                        height: "13px",
                        fontFamily: "Nohemi",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "13px",
                        textAlign: "left",
                    }}
                >
                    Speak to an advisor
                </button>
            </div>
        </section>
    );
}