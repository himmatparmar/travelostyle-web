"use client";
import { useState } from "react";
import React from "react";

const departures = [
    {

        startDate: "11 May 2026",
        startDay: "Monday",
        endDate: "24 May 2026",
        endDay: "Friday",


        statusType: "soldout",
        line1: "Journey Sold Out",

        statusColor: "text-red-600",
        price: "$5000",
        offer: "No offers available",
        button: "Request a Private Journey",
        buttonStyle: "bg-[#2C3078] text-white",
    },

    {
        startDate: "11 May 2026",
        startDay: "Monday",
        endDate: "24 May 2026",
        endDay: "Friday",

        statusType: "guaranteed",
        line1: "2 Seats Left",
        line2: "Guaranteed Departure",

        statusColor: "text-green-600",
        price: "$5000",
        offer: "No offers available",
        button: "Enquire For This Date",
        buttonStyle: "bg-[#2C3078] text-white",
    },
    {

        startDate: "11 May 2026",
        startDay: "Monday",
        endDate: "24 May 2026",
        endDay: "Friday",
        statusType: "earlybird",
        line1: "Seats Open",
        line2: "Early Bird Available",


        discountedPrice: "$3500",
        originalPrice: "$5000",


        offerPercent: "30% off",
        offerText: "Early Bird Offer applied to price",


        button: "Claim Early Bird Call",
        buttonStyle: "bg-[#2C3078] text-white",
    },
    {

        startDate: "11 May 2026",
        startDay: "Monday",
        endDate: "24 May 2026",
        endDay: "Friday",


        statusType: "open",
        line1: "Seats Open",
        statusColor: "text-green-600",
        price: "$5000",
        offer: "No offers available",
        button: "Enquire For This Date",
        buttonStyle: "bg-[#2C3078] text-white",
    },
];

export default function JourneyPricing() {
    const [selectedYear, setSelectedYear] = useState("2026");

    return (
        <section className="max-w-[1701px]  px-4 py-10">
            <div className="text-left md:text-center mb-8">
                <h2
                
                    className="
          font-semibold
          text-[28px] md:text-[32px]
          leading-[36px] md:leading-[56px]
          tracking-[0.05em]
          text-[#1A1A1A]
        "
                    style={{ fontFamily: "Nohemi" }}
                >
                    Book Your Journey
                </h2>

                <div className="flex justify-center">
                    <div
                        className="flex w-[110px] h-[34px] md:w-[160px] md:h-[40px] border-2 border-black rounded-[5px] overflow-hidden"
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
            {/* Mobile View */}
    <div className="block md:hidden space-y-4">
        {departures.map((trip, index) => (
    <div
        key={index}
        className="border-2 border-black rounded-[6px] overflow-hidden"
    >
    <div className="p-3">

        <div className="font-semibold text-[16px]">
            Trip Start: <span className="font-normal">{trip.startDate}</span>
        </div>

        <div className="font-semibold text-[16px] mt-1">
          Trip End: <span className="font-normal">{trip.endDate}</span>
        </div>

        <div className="flex justify-between items-start mt-3">
          <div>
            {trip.statusType === "soldout" && (
              <p className="text-[#C22121] text-[12px]">
                Journey sold out
              </p>
            )}

            {trip.statusType === "guaranteed" && (
              <>
                <p className="text-[#C22121] text-[12px]">
                  2 seats left
                </p>

                <p className="text-[#128914] text-[12px]">
                  Guaranteed departure
                </p>
              </>
            )}

            {trip.statusType === "earlybird" && (
              <>
                <p className="text-[#C22121] text-[12px]">
            2 seats left
                </p>

                <p className="text-[#128914] text-[12px]">
            Guaranteed departure
                </p>

                <div className="mt-3 text-center">
            <p className="text-[#128914] font-semibold text-[24px]">
                    30% off
                  </p>

                  <p className="text-[14px]">
                    Early Bird Offer applied to price
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="text-right">
            <p className="text-[10px]">from</p>

            <p className="font-semibold text-[28px] leading-none">
              {trip.discountedPrice || trip.price}
            </p>

            <p className="text-[12px]">/person</p>

            {trip.originalPrice && (
              <p className="text-[11px] text-gray-500">
                was {trip.originalPrice}
              </p>
            )}
          </div>
        </div>

        <button
          className="w-full bg-[#2C3078] text-white rounded-full py-3 mt-5"
        >
          {trip.statusType === "soldout"
            ? "Request a Private Journey"
            : trip.button}
        </button>

      </div>

      <div className="border-t border-black py-2 flex justify-center">
        <button className="flex items-center gap-2 text-[14px]">
          +
          Show more
        </button>
      </div>
    </div>
  ))}
</div>

          <div className="hidden md:block overflow-x-auto">
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
                        {departures.map((trip, index) => (
                            <tr key={index} className="h-[104px] border-b-2 border-black">
                                <td className="border px-5 py-6 align-middle">
                                    <div className="flex items-start gap-3">
                                        <div>
                                            <div
                                                className="font-medium text-[16px] text-[#1A1A1A]"
                                                style={{ fontFamily: "Nohemi" }}
                                            >
                                                {trip.startDate}
                                            </div>

                                            <div
                                                className="text-[12px] text-[#6B7280] mt-1"
                                                style={{ fontFamily: "Nohemi" }}
                                            >
                                                {trip.startDay}
                                            </div>
                                        </div>

                                        <span className="text-[16px] mt-[1px]">→</span>

                                        <div>
                                            <div
                                                className="font-medium text-[16px] text-[#1A1A1A]"
                                                style={{ fontFamily: "Nohemi" }}
                                            >
                                                {trip.endDate}
                                            </div>

                                            <div
                                                className="text-[12px] text-[#6B7280] mt-1"
                                                style={{ fontFamily: "Nohemi" }}
                                            >
                                                {trip.endDay}
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td className="border px-4 py-5 align-middle">
                                    {trip.statusType === "soldout" && (
                                        <div
                                            className="text-[#891722] text-[14px] leading-[16px] font-medium"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
                                            {trip.line1}
                                        </div>
                                    )}

                                    {trip.statusType === "guaranteed" && (
                                        <div
                                            className="flex flex-col gap-[2px]"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
                                            <span className="text-[#891722] text-[14px] leading-[16px] font-medium">
                                                {trip.line1}
                                            </span>

                                            <span className="text-[#128914] text-[14px] leading-[16px] font-medium">
                                                {trip.line2}
                                            </span>
                                        </div>
                                    )}

                                    {trip.statusType === "earlybird" && (
                                        <div
                                            className="flex flex-col gap-[2px]"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
                                            <span className="text-[#128914] text-[14px] leading-[16px] font-medium">
                                                {trip.line1}
                                            </span>

                                            <span className="text-[#128914] text-[14px] leading-[16px] font-medium">
                                                {trip.line2}
                                            </span>
                                        </div>
                                    )}

                                    {trip.statusType === "open" && (
                                        <div
                                            className="text-[#128914] text-[14px] leading-[16px] font-medium"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
                                            {trip.line1}
                                        </div>
                                    )}
                                </td>
                                <td className="border px-4 py-5">
                                    <div
                                        className="text-[10px] text-[#9CA3AF] mb-1"
                                        style={{ fontFamily: "Nohemi" }}
                                    >
                                        from
                                    </div>

                                    <div className="flex items-baseline gap-[2px]">
                                        <span
                                            className="text-[20px] font-semibold text-[#1A1A1A] leading-none"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
                                            {trip.discountedPrice || trip.price}
                                            {trip.discountedPrice && "*"}
                                        </span>

                                        <span
                                            className="text-[12px] text-[#6B7280]"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
                                            / per person
                                        </span>
                                    </div>

                                    {trip.originalPrice && (
                                        <div
                                            className="text-[10px] text-[#9CA3AF] mt-1"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
                                            was {trip.originalPrice}
                                        </div>
                                    )}
                                </td>
                                <td className="border px-4 py-5">
                                    {trip.statusType === "earlybird" ? (
                                        <div style={{ fontFamily: "Nohemi" }}>
                                            <div className="text-[#128914] text-[14px] font-semibold leading-[16px]">
                                                {trip.offerPercent}
                                            </div>

                                            <div className="text-[#4B5563] text-[12px] leading-[14px] mt-[2px]">
                                                {trip.offerText}
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className="text-[14px] text-[#4B5563]"
                                            style={{ fontFamily: "Nohemi" }}
                                        >
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