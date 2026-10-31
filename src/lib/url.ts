// Prefix site-relative paths with the configured base so links keep working
// when the site is served from a sub-path (e.g. a GitHub project page).
export function withBase(path: string): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}
