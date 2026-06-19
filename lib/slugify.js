export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[–—]/g, "-")        // em/en dash → hyphen
    .replace(/[^a-z0-9\s-]/g, "") // strip other special chars
    .trim()
    .replace(/[\s-]+/g, "-");     // spaces/multiple hyphens → single hyphen
}
