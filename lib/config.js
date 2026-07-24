export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(
  /\/+$/,
  "",
);

// Safely joins the API base with a Drupal-provided file path, avoiding the
// double-slash bug that breaks next/image's remotePatterns matching.
export function buildFileUrl(rawUrl) {
  if (!rawUrl) return null;
  const decoded = decodeURIComponent(rawUrl).replace(/^\/+/, "/");
  return `${API_BASE_URL}${decoded}`;
}