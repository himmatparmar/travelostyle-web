export default function Hero({ blog, categories, heroImage }) {
  return (
    <section className="px-[60px] pt-[20px] pb-[20px]">
      <div className="flex justify-between items-center border-b border-[#2B2B2B] pb-[10px]">
        <p className="font-Nohemi text-[16px] font-semibold leading-[40px] tracking-[0.05em] text-[#000000]">
          {new Date(blog.attributes.created).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <button
          className="
          w-[134px]
          h-[31px]
          px-[16px]
          bg-[#F2E2DA]
          border
          border-[#8E7C72]
          rounded-[100px]
          text-[16px]
          font-Nohemi
          leading-none
          text-[#2B2B2B]
          flex
          items-center
          justify-center
        "
        >
          {categories[0]?.attributes?.name}
        </button>
      </div>

      <h1 className="mt-[40px] w-[1300px] text-[50px] font-semibold leading-[70px] tracking-[-0.02em] text-[#1A1A1A]">
        {blog.attributes.title}
      </h1>

      <div className="mt-[32px] border-b border-[#2B2B2B]" />
    </section>
  );
}