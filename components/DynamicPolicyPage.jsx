
export default function DynamicPolicyPage({ title, description }) {
  return (
    <div className="max-w-4xl mx-auto px-6 md:py-12">
      <div className="mb-12">
        {title ? (
          <h1 className="text-3xl md:text-5xl font-serif tracking-wide  mb-2">
            {title}
          </h1>
        ) : (
          <p className="text-[24px] font-medium text-ink">Coming Soon</p>
        )}
      </div>

      <div
        className="text-base md:text-lg leading-relaxed space-y-6 "
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
