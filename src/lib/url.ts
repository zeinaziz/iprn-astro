/** Prefix a root-relative path with the site base (e.g. "/iprn-astro/" on GitHub Pages, "/" elsewhere). */
export function url(path: string): string {
  if (!path.startsWith("/")) return path; // external, #anchor, mailto:
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + path;
}
