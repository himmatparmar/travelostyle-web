export default function Hero({ blog, categories }) {
  return (
    <section className="px-5 md:px-8 lg:px-[60px] pt-5 pb-5">
      <div className="flex justify-between items-center gap-4">
        <p className="text-[16px] font-semibold leading-[40px] tracking-[0.05em] text-[#000000]">
          {new Date(blog.attributes.created).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        {categories[0]?.attributes?.name && (
          <button
            className="
            h-[31px]
            px-[16px]
            shrink-0
            whitespace-nowrap
            bg-transparent md:bg-[#F2E2DA]
            border
            border-ink
            rounded-full
            text-[16px]
            leading-none
            text-[#2B2B2B]
            flex
            items-center
            justify-center
          "
          >
            {categories[0].attributes.name}
          </button>
        )}
      </div>

      <div className="mt-[24px] border-b border-[#2B2B2B]" />

      <h1 className="mt-8 w-full text-[36px] sm:text-[42px] lg:text-[50px] leading-[48px] sm:leading-[58px] lg:leading-[70px] font-semibold tracking-[-0.02em] text-ink">
        {blog.attributes.title}
      </h1>

      <div className="mt-[32px] border-b border-[#2B2B2B]" />
    </section>
  );
}