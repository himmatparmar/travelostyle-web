"use client";

import { useEffect, useState } from "react";
import PopularRegionCard from "../PopularRegionCard";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";

export default function PopularRegions() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRegions() {
      try {
        const res = await fetch(
          `${API_BASE_URL}/jsonapi/taxonomy_term/region?include=field_region_image.field_media_image`,
        );

        const json = await res.json();
        const included = json.included || [];

        const regionData = (json.data || []).map((item) => {
          const mediaId = item.relationships?.field_region_image?.data?.id;

          const mediaEntity = included.find(
            (inc) => inc.type === "media--image" && inc.id === mediaId,
          );

          const fileId =
            mediaEntity?.relationships?.field_media_image?.data?.id;

          const fileEntity = included.find(
            (inc) => inc.type === "file--file" && inc.id === fileId,
          );

          const image =
            buildFileUrl(fileEntity?.attributes?.uri?.url) ||
            "/placeholder.jpg";

          return {
            id: item.id,
            title: item.attributes?.name || "",
            subtitle:
              item.attributes?.description?.processed ||
              item.attributes?.description?.value ||
              "",
            image,
          };
        });

        setRegions(regionData);
      } catch (err) {
        console.error("Region API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadRegions();
  }, []);

  return (
    <div className="bg-white px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
      {" "}
      <h3 className="text-black font-bold text-center text-[21px] leading-[28px] w-[244px] mx-auto  tracking-tight mb-6 sm:mb-8">
        Explore some of our popular regions!
      </h3>
      {loading ? (
        <p className="text-sm text-[#757575]">Loading regions...</p>
      ) : (
        <PopularRegionCard regions={regions} />
      )}
    </div>
  );
}