"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";

export default function Region() {
  const router = useRouter();

  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadRegions() {
      try {
        const res = await fetch(
          `${API_BASE_URL}/jsonapi/taxonomy_term/region?include=field_region_image.field_media_image`
        );

        const json = await res.json();

        const included = json.included || [];

        const regionData = (json.data || []).map((item) => {
          const mediaId =
            item.relationships?.field_region_image?.data?.id;

          const mediaEntity = included.find(
            (inc) =>
              inc.type === "media--image" &&
              inc.id === mediaId
          );

          const fileId =
            mediaEntity?.relationships?.field_media_image?.data?.id;

          const fileEntity = included.find(
            (inc) =>
              inc.type === "file--file" &&
              inc.id === fileId
          );

          const image =
            buildFileUrl(fileEntity?.attributes?.uri?.url) ||
            "/placeholder.jpg";

          return {
            id: item.id,
            name: item.attributes?.name || "",
            description:
              item.attributes?.description?.processed ||
              item.attributes?.description?.value ||
              "",
            image,
          };
        });

        console.log("Regions:", regionData);

        setRegions(regionData);
      } catch (err) {
        console.error("Region API Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadRegions();
  }, []);
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto py-16">
        Loading regions...
      </section>
    );
  }


  return (
    <section className="max-w-7xl mx-auto px-12 py-16">
      <div className="mb-12 flex flex-col items-center">
        <h2 className="
  w-full
  max-w-[792px]
  font-[Nohemi]
  font-semibold
  text-[32px] md:text-[48px]
  leading-[42px] md:leading-[80px]
  text-center
">
          Where are you headed to next?
        </h2>
        <p className="
  w-full
  max-w-[646px]
  mt-2
  px-4
  font-[Nohemi]
  text-[14px] md:text-[16px]
  leading-[24px] md:leading-[32px]
  text-center
">
          Begin with the part of the world that’s calling to you and narrow from there.
          Or wander freely. Either approach works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
        {regions.map((region) => (
          <div
            key={region.id}
            className="group relative cursor-pointer overflow-hidden rounded-[10px] border-2 border-[#1A1A1A]  w-full
"
          >

            <img
              src={region.image}
              alt={region.name}
              className="
    w-full
    h-[220px]
    md:h-[402px]
    object-cover
    rounded-[10px]
  "
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              {/* Title */}
              <h3 className="font-[Nohemi] font-semibold text-[22px] md:text-[32px] leading-[28px] md:leading-[40px]">
                {region.name}
              </h3>

              {/* Bottom Content */}
              <div>
                <p
                  className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] opacity-95"
                  dangerouslySetInnerHTML={{
                    __html: region.description,
                  }}
                />

                <div className="mt-3 h-[1px] w-full bg-white/60" />

              <button
  onClick={() =>
 router.push(
  `/itinerary?region=${encodeURIComponent(region.name)}`
)
  }
  className="
    mt-3 rounded-full bg-white
    px-3 py-1.5 md:px-4 md:py-2
    text-[11px] md:text-[12px]
    font-semibold text-[#24378C]
  "
>
  Explore Journeys
</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}