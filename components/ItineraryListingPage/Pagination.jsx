"use client";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-[0.5vw] py-[1.5vw]">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`flex h-[2vw] w-[2vw] items-center justify-center rounded-full text-[0.8vw] font-medium transition-all ${
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
        className="flex h-[2vw] w-[2vw] items-center justify-center rounded-full text-[#555] hover:bg-[#f0f0f0] transition-colors text-[0.8vw]"
      >
        →
      </button>
    </div>
  );
}