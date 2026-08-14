"use client";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-6 md:gap-[0.5vw] md:py-[1.5vw]">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-all md:h-[2vw] md:w-[2vw] md:text-[0.8vw] ${
              currentPage === page
                ? "bg-[#2f2d89] text-white"
                : "text-[#555] hover:bg-[#f0f0f0]"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() =>
          setCurrentPage((p) =>
            Math.min(p + 1, totalPages)
          )
        }
        disabled={currentPage === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-full text-sm text-[#555] hover:bg-[#f0f0f0] transition-colors md:h-[2vw] md:w-[2vw] md:text-[0.8vw]"
      >
        →
      </button>
    </div>
  );
}