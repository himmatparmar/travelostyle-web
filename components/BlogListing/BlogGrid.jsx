"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ITEMS_PER_PAGE = 9;

export default function BlogGrid({ blogs, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") return blogs;

    return blogs.filter((blog) =>
      blog.categoryNames.includes(selectedCategory)
    );
  }, [blogs, selectedCategory]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE)
  );

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Categories */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-[#222] sm:text-[13px]">
          Categories
        </h2>

        <div className="flex flex-wrap justify-end gap-1.5 sm:gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                rounded-full
                border
                px-2.5
                py-[4px]
                text-[6px]
                leading-none
                sm:px-3
                sm:py-[5px]
                sm:text-[8px]

                ${
                  selectedCategory === category
                    ? "border-[#1A1A1A] bg-[#F2E2DA] text-Black"
                    : "border-[#9B9B9B] bg-white text-[#333]"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5 w-full h-[2px] bg-[#1A1A1A]" />

      {/* =====================================================
          BLOG GRID
      ===================================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          lg:[grid-template-columns:repeat(3,524px)]
        "
      >
        {paginatedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="
              flex
              w-[524px]
              max-w-full
              flex-col
              overflow-hidden
              rounded-[10px]
              border-2
              border-[#1A1A1A]
              bg-[#FAFAFA]
            "
          >
            {/* TOP */}
            <div className="flex items-center justify-between px-[12px] py-[10px]">
              <p className="text-[9px] font-semibold text-[#1A1A1A]">
                {blog.dateLabel}
              </p>

              <button
                className="
                  flex
                  h-[25px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#1A1A1A]
                  bg-white
                  px-[10px]
                  text-[8px]
                  text-[#1A1A1A]
                "
              >
                {blog.categoryName}
              </button>
            </div>

            {/* IMAGE */}
            <div className="px-[12px]">
              <Image
                src={blog.imageUrl}
                alt={blog.title || "Blog"}
                width={524}
                height={296}
                className="
                  block
                  h-[296px]
                  w-full
                  object-cover
                "
              />
            </div>

            {/* TITLE */}
            <div className="min-h-[105px] px-[12px] pt-[12px]">
              <h4
                className="
                  text-[11px]
                  font-semibold
                  leading-[18px]
                  tracking-[0.02em]
                  text-[#1A1A1A]
                "
              >
                {blog.title}
              </h4>
            </div>

            {/* BOTTOM */}
            <div className="mt-auto px-[12px] pb-[10px]">
              <div className="border-t border-[#1A1A1A]" />

              <Link
                href={`/blog-detail/${blog.slug}`}
                className="mt-[10px] flex items-center justify-between"
              >
                <span
                  className="
                    text-[8px]
                    font-semibold
                    tracking-[0.08em]
                    text-[#1A1A1A]
                  "
                >
                  READ MORE
                </span>

                <Image
                  src="/ArrowUpRight.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          PAGINATION
      ===================================================== */}

      <div className="flex items-center justify-center gap-4 pt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? "text-[9px] font-semibold text-[#1A1A1A] underline underline-offset-4"
                : "text-[9px] text-[#9B9B9B]"
            }
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="text-[10px] text-[#1A1A1A]"
          >
            →
          </button>
        )}
      </div>
    </>
  );
}
