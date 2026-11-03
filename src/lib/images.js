import fs from "node:fs";
import path from "node:path";

// Reads /public/images at build/request time. Drop files in with these names, no code changes needed:
//   hero.jpg   about.jpg   gallery-1.jpg  gallery-2.jpg ... (any of jpg, jpeg, png, webp, avif)
export function getImages() {
  const dir = path.join(process.cwd(), "public", "images");
  let files = [];
  try { files = fs.readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f)); } catch {}
  const url = (f) => `/images/${f}`;
  const pick = (name) => { const f = files.find((x) => x.toLowerCase().startsWith(name + ".")); return f ? url(f) : null; };
  const gallery = files
    .filter((f) => /^gallery[-_ ]?\d*/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map(url);
  return { hero: pick("hero"), about: pick("about"), gallery };
}
