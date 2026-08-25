// field_journey_experience_type is an entity reference to the "Journey
// Experience Type" taxonomy vocabulary (Group / Inspirational) on the
// journey node. Shared between JourneyDetailClient (journey detail page)
// and Comparison (comparison page) so both resolve it the same way —
// requires "field_journey_experience_type" to be present in the page's
// JSON:API `include` list, otherwise the referenced term never shows up
// in `included` and this falls back to "" (treated as Group).
export function resolveExperienceType(item, included) {
  const attr = item.attributes?.field_journey_experience_type;

  // Plain string ("Group" / "inspirational" / ...).
  if (typeof attr === "string" && attr) return attr;

  // A formatted-text-style field comes through as { value: "...", ... }
  // instead of a bare string.
  if (attr && typeof attr === "object" && typeof attr.value === "string") {
    return attr.value;
  }

  // A multi-value list field comes through as an array of either shape
  // above — only one value is expected here, so just take the first.
  if (Array.isArray(attr) && attr.length) {
    const first = attr[0];
    if (typeof first === "string") return first;
    if (first && typeof first.value === "string") return first.value;
  }

  // Entity-reference shape (the real shape for this field) — resolve it
  // the same way field_journey_tag is resolved elsewhere.
  const rel = item.relationships?.field_journey_experience_type?.data;
  if (rel) {
    const relId = Array.isArray(rel) ? rel[0]?.id : rel.id;
    const entity = included.find((i) => i.id === relId);
    return entity?.attributes?.field_key || entity?.attributes?.name || "";
  }

  return "";
}

export function isInspirationalJourney(item, included) {
  return resolveExperienceType(item, included).toLowerCase().includes("inspir");
}
