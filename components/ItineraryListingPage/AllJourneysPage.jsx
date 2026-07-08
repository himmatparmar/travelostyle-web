"use client";

import { useMemo, useState, useEffect } from "react";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import JourneyGrid from "./JourneyGrid";
import Pagination from "./Pagination";
import { slugify } from "@/lib/slugify";
import { API_BASE_URL } from "@/lib/config";

export default function AllJourneysPage() {
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    displayAllOffers: true,
    region: [],
    style: [],
    offer: [],
    category: [],
    month: [],
    pricing: [], // ✅ added
    duration: [], // ✅ added
  });

  const [filterOptions, setFilterOptions] = useState({
    region: [],
    style: [],
    offer: [],
    category: [],
    month: [],
  });

  const [sort, setSort] = useState("Recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ================= JOURNEYS FETCH =================
  useEffect(() => {
    async function loadJourneys() {
      try {
        setLoading(true);

        const res = await fetch(
  `${API_BASE_URL}/jsonapi/node/journey?include=field_journey_image.field_media_image,field_journey_tag,field_month`,
);

        const json = await res.json();
        const included = json.included || [];

        const drupalJourneys = json.data.map((item, index) => {
          const mediaId = item.relationships?.field_journey_image?.data?.id;

          const mediaEntity = included.find(
            (inc) => inc.type === "media--image" && inc.id === mediaId,
          );
          const monthId = item.relationships?.field_month?.data?.id;

          const monthEntity = included.find(
            (inc) => inc.type === "taxonomy_term--month" && inc.id === monthId,
          );

          const monthName = monthEntity?.attributes?.name || "";
          const fileId =
            mediaEntity?.relationships?.field_media_image?.data?.id;

          const fileEntity = included.find(
            (inc) => inc.type === "file--file" && inc.id === fileId,
          );

          const rawUrl = fileEntity?.attributes?.uri?.url;

         const imageUrl = rawUrl
  ? `${API_BASE_URL}${decodeURIComponent(rawUrl)}`
  : "/GoldenTriange.svg";

          const tagIds = item.relationships?.field_journey_tag?.data || [];

          const tagData = item.relationships?.field_journey_tag?.data;

          const tagArray = Array.isArray(tagData)
            ? tagData
            : tagData
              ? [tagData]
              : [];

          const tagNames = tagArray
            .map((tag) => {
              const tagEntity = included.find(
                (inc) =>
                  inc.type === "taxonomy_term--tags" && inc.id === tag.id,
              );

              return tagEntity?.attributes?.name;
            })
            .filter(Boolean);

          const cta = item.attributes?.field_cta;

          const titleSlug = slugify(item.attributes.title || "");
          let viewTripUrl = `/journeys/${titleSlug}`;

          if (cta?.uri && !cta.uri.startsWith("entity:")) {
            viewTripUrl = cta.uri;
          }

          return {
            id: item.id,
            title: item.attributes.title || "",
            desc: item.attributes.field_short_description || "",

            days: `${item.attributes.field_duration_days || 0} Days | ${
              item.attributes.field_duration_nights || 0
            } Nights`,

            destinations: `${
              item.attributes.field_destinations_count || 0
            } Destinations`,

            price: Number(item.attributes.field_offer_price) || 0,
            offer: item.attributes.field_offer_message || "",

            image: imageUrl,

            tags: tagNames,
            style: tagNames[0] || "Group Journey",
            region: item.attributes?.field_region || "",
            category: item.attributes?.field_category || "",
            month: monthName,

            viewTripUrl,
            viewTripText: cta?.title || "View Trip",

            active: index === 0,
          };
        });

        setJourneys(drupalJourneys);
      } catch (error) {
        console.error("API ERROR:", error);
      } finally {
        setLoading(false);
      }
    }

    loadJourneys();
  }, []);

  // ================= FILTER OPTIONS =================
  useEffect(() => {
    async function loadFilters() {
      try {
        const endpoints = {
  region: `${API_BASE_URL}/jsonapi/taxonomy_term/country`,
  style: `${API_BASE_URL}/jsonapi/taxonomy_term/tags`,
  offer: `${API_BASE_URL}/jsonapi/taxonomy_term/offers`,
  category: `${API_BASE_URL}/jsonapi/taxonomy_term/category`,
  month: `${API_BASE_URL}/jsonapi/taxonomy_term/month`,
};

        const results = {};

        for (const key in endpoints) {
          const res = await fetch(endpoints[key]);
          const json = await res.json();

          results[key] = (json.data || []).map(
            (item) => item?.attributes?.name,
          );
        }

        setFilterOptions(results);
      } catch (err) {
        console.error("Filter API error:", err);
      }
    }

    loadFilters();
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);
  // ================= FILTER =================
  const filteredJourneys = useMemo(() => {
    let data = [...journeys];

    if (!filters.displayAllOffers) {
      data = data.filter((item) => !item.offer);
    }

    if (filters.region.length) {
      data = data.filter((item) => filters.region.includes(item.region));
    }

    if (filters.style.length) {
      data = data.filter((item) =>
        item.tags?.some((t) => filters.style.includes(t)),
      );
    }

    if (filters.offer.length) {
      data = data.filter((item) => filters.offer.includes(item.offer));
    }

    if (filters.category.length) {
      data = data.filter((item) => filters.category.includes(item.category));
    }

    if (filters.month.length) {
      data = data.filter((item) => filters.month.includes(item.month));
    }

    if (filters.pricing.length) {
      data = data.filter((item) => {
        return filters.pricing.some((range) => {
          if (range === "$3000 under") return item.price < 3000;
          if (range === "$3,000-$8,000")
            return item.price >= 3000 && item.price <= 8000;
          if (range === "$10,000+") return item.price >= 10000;
          return true;
        });
      });
    }

    if (filters.duration.length) {
      data = data.filter((item) => {
        const days = parseInt(item.days?.split(" ")[0] || 0);

        return filters.duration.some((range) => {
          if (range === "5–8 Days") return days >= 5 && days <= 8;
          if (range === "8–15 Days") return days >= 8 && days <= 15;
          if (range === "15–25 Days") return days >= 15 && days <= 25;
          if (range === "25+ Days") return days >= 25;
          return true;
        });
      });
    }

    // SORTING
    if (sort === "Price: Low to High") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [journeys, filters, sort]);
  const totalPages = Math.ceil(filteredJourneys.length / itemsPerPage);

  const paginatedJourneys = filteredJourneys.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const popularJourneys = journeys.slice(0, 6);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading journeys...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans px-14">
      <div className="flex gap-[2vw] py-[0.8vw] items-baseline">
        {/* Breadcrumb — aligns with filter sidebar column */}
        <div className="w-[220px] shrink-0">
          <nav className="text-[0.72vw] text-[#888]">
            <span>home</span>
            <span className="mx-[0.3vw]">&gt;</span>
            <span className="text-[#1a1a1a] font-medium">all journeys</span>
          </nav>
        </div>
        {/* Sort bar aligned with grid column */}
        <div className="flex-1 min-w-0">
          <SortBar
            resultCount={filteredJourneys.length}
            selected={sort}
            setSelected={setSort}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </div>

      <div className="flex gap-[2vw] pb-[3vw]">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          filterOptions={filterOptions}
          journeys={filteredJourneys}
        />

        <div className="flex-1 min-w-0">
          {filteredJourneys.length === 0 ? (
            <div className="flex flex-col gap-2 items-center justify-center py-[6vw] text-center">
              <img
                src="/no-results.svg"
                alt="No journeys found"
                className="mb-8 w-[18vw] h-auto "
              />

              <h3 className="font-[Nohemi] font-medium text-[32px] leading-[40px] tracking-[0.05em] text-center text-[#1A1A1A] mt-8">
                Sorry! We were unable to find the <br /> trip you requested.
              </h3>
              <p className="mt-[16px] max-w-[520px] font-[Nohemi] font-normal text-[16px] leading-[100%] tracking-[0.05em] text-center text-[#1A1A1A] mt-2">
                Please adjust your filters to find a trip that fits you
              </p>

              <div className="my-[16px] font-[Nohemi] font-normal text-[16px] leading-[100%] tracking-[0.05em] text-center text-[#1A1A1A] mt-2">
                OR
              </div>

              <button
                onClick={() =>
                  setFilters({
                    displayAllOffers: true,
                    region: [],
                    style: [],
                    offer: [],
                    category: [],
                    month: [],
                    pricing: [],
                    duration: [],
                  })
                }
                className="h-[2.25vw] min-w-[10.5vw] rounded-full bg-[#2E348D]  text-[0.9vw]  text-white transition hover:bg-[#252b78] mt-2"
              >
                Explore All Journeys
              </button>
              <div className="w-full mt-16">
                <div className="border-b-2 border-[#1A1A1A] mb-6">
                  <h2 className="text-left text-[24px] font-medium pb-2 border-b-2">
                    Popular Journeys
                  </h2>
                  {/* <span className="border-b border-[#1A1A1A] block mb-6 mt-2"></span> */}
                </div>

                <JourneyGrid journeys={popularJourneys} />
              </div>
            </div>
          ) : (
            <>
              <JourneyGrid journeys={paginatedJourneys} />

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
