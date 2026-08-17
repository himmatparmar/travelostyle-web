import Image from "next/image";
import { API_BASE_URL, buildFileUrl } from "@/lib/config";

const INCLUDE = "field_promise_items.field_icon.field_media_image";

// Local fallbacks for the three promise icons until each promise_item
// paragraph gets a real field_icon uploaded in Drupal's media library.
const FALLBACK_ICONS = ["/copy.svg", "/HeartIcon.svg", "/Handshake.svg"];

async function getPromiseBlock() {
  const res = await fetch(
    `${API_BASE_URL}/jsonapi/block_content/travelostyle_promise?include=${INCLUDE}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch TravelOStyle Promise block");
    return null;
  }

  const { data = [], included = [] } = await res.json();
  return { block: data[0] || null, included };
}

function resolveIcon(item, included, index) {
  const mediaId = item.relationships?.field_icon?.data?.id;
  const media = included.find((i) => i.type === "media--image" && i.id === mediaId);
  const fileId = media?.relationships?.field_media_image?.data?.id;
  const file = included.find((i) => i.type === "file--file" && i.id === fileId);
  const raw = file?.attributes?.uri?.url;

  return buildFileUrl(raw) || FALLBACK_ICONS[index % FALLBACK_ICONS.length];
}

export default async function TravelOStylePromise() {
  const result = await getPromiseBlock();

  if (!result?.block) return null;

  const { block, included } = result;

  const heading = block.attributes.field_heading || "";
  const rawDescription = block.attributes.field_description?.value || "";

  // Force "We truly believe..." onto its own paragraph on mobile, even if
  // the CMS content doesn't already break it into a separate <p>. Uses a
  // mobile-only spacer block (line break + gap) so desktop rendering is
  // unaffected.
  const description = rawDescription.replace(
    /(\s*)(We truly believe)/i,
    '<span class="block h-6 md:hidden" aria-hidden="true"></span>$2'
  );

  const itemRefs = block.relationships?.field_promise_items?.data || [];
  const promises = itemRefs
    .map((ref, index) => {
      const item = included.find((i) => i.id === ref.id);
      if (!item) return null;

      return {
        icon: resolveIcon(item, included, index),
        title: item.attributes?.field_item_title || "",
        bg: item.attributes?.field_bg_color || "#EFE5DE",
      };
    })
    .filter(Boolean);

  return (
    <section className="py-16 md:py-20 bg-[#fbfbfb] select-none">
      <div className="mx-auto max-w-[1200px] px-6">
<div className="text-left md:text-center w-full mx-auto">
          <h2
  className="
    mx-auto
    w-full
    max-w-[380px]
    text-left
    text-[30px]
    leading-[30px]
    font-bold
    text-[#2C2C2C]

    md:max-w-[741px]
    md:text-center
    md:text-[40px]
    md:leading-[40px]
    md:font-medium
  "
>
  {heading}
</h2>
     <div className="mx-auto w-full max-w-[1246px]">
  <div
    className="
    mt-[25px]
      w-full
      text-left
      text-[19px]
      leading-[26px]
      text-[#4A4A4A]
      [&_p]:mb-4
      [&_p:last-child]:mb-0
      md:text-center
      md:text-[18px]
      md:leading-[24px]
      md:[&_p]:mb-0
    "
    dangerouslySetInnerHTML={{ __html: description || "" }}
  />
</div>

        
        </div>
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row flex-wrap justify-center items-center gap-5 md:gap-8 max-w-[340px] md:max-w-none mx-auto">
          {promises.map((item, index) => {
            return (
              <div
                key={index}
                className="flex h-[150px] md:h-[145px] w-full md:w-[290px] flex-col items-center justify-center rounded-[6px] border border-[#6A67B5]/70 md:border-[#6A67B5] gap-3 p-5"
                style={{ backgroundColor: item.bg }}
              >
                <div className="relative w-[36px] h-[36px] md:w-[40px] md:h-[40px] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="Promise Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <p className="whitespace-pre-line max-md:whitespace-normal text-center text-[15px] md:text-[18px] font-bold md:font-semibold leading-[20px] md:leading-[1.25] text-[#2C2C2C]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
