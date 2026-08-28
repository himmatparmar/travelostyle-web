"use client";
import BookingSteps from "../BookingSteps";
import JourneyRevelationsMobile from "../JourneyRevelationsMobile";
import JourneyRevelationsSection from "../JourneyRevelationsSection";
import CustomFromGroundUp from "./CustomFromGroundUp";
import NotSureWhereToBegin from "./NotSureWhereToBegin";
import PopularRegions from "./PopularRegions";
import ComingSoon from "../ComingSoon";

export default function Index({ matrixContent, bookingStepsContent, hero }) {
  return (
    <div>
      {hero}
      {matrixContent ? (
        <>
          <JourneyRevelationsSection
            badgeText={matrixContent.badgeText}
            titleText={matrixContent.titleText}
            features={matrixContent.features}
            topIntroText={matrixContent.topIntroText}
            matrixRows={matrixContent.matrixRows}
            footerText={matrixContent.footerText}
            theme={{
              cardBg: "bg-[#f2d09f]",
              borderColor: "#444444",
            }}
          />
          <JourneyRevelationsMobile
            badgeText={matrixContent.badgeText}
            titleText={matrixContent.titleText}
            features={matrixContent.features}
            topIntroText={matrixContent.topIntroText}
            matrixRows={matrixContent.matrixRows}
            footerText={matrixContent.footerText}
            theme={{
              cardBg: "#f2d09f",
              borderColor: "#444444",
            }}
          />
        </>
      ) : (
        <ComingSoon label="Journey Type Matrix" />
      )}
      <NotSureWhereToBegin />
      <CustomFromGroundUp />
      <PopularRegions />
      {bookingStepsContent ? (
        <BookingSteps bookingRecords={bookingStepsContent} />
      ) : (
        <ComingSoon label="Booking Steps" />
      )}
    </div>
  );
}
