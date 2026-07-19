import fs from "node:fs/promises";
import path from "node:path";
import sharp from "file:///C:/Users/juliu/Documents/Obsidian/2nd%20brain/2nd%20Brain/outputs/united-container-depot/node_modules/sharp/lib/index.js";

const project = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(project, "public");
const outputDir = path.join(publicDir, "responsive");
const manifestPath = path.join(project, "app", "responsive-images.json");
const widths = [640, 960, 1600];
const sourceExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const minimumBytes = 250_000;

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === "responsive") continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

await fs.rm(outputDir, { recursive: true, force: true });
const manifest = {};
const sources = await walk(publicDir);

for (const sourcePath of sources) {
  const extension = path.extname(sourcePath).toLowerCase();
  if (!sourceExtensions.has(extension)) continue;
  const stats = await fs.stat(sourcePath);
  if (stats.size < minimumBytes) continue;
  const metadata = await sharp(sourcePath).metadata();
  if (!metadata.width || !metadata.height) continue;

  const relative = path.relative(publicDir, sourcePath).replaceAll("\\", "/");
  const publicPath = `/${relative}`;
  const parsed = path.parse(relative);
  const relativeDirectory = parsed.dir;
  const targetDirectory = path.join(outputDir, relativeDirectory);
  await fs.mkdir(targetDirectory, { recursive: true });

  const variants = [];
  for (const width of widths.filter((candidate) => candidate < metadata.width)) {
    const avifName = `${parsed.name}-${width}.avif`;
    const webpName = `${parsed.name}-${width}.webp`;
    const avifPath = path.join(targetDirectory, avifName);
    const webpPath = path.join(targetDirectory, webpName);
    await sharp(sourcePath).rotate().resize({ width, withoutEnlargement: true }).avif({ quality: width === 640 ? 58 : width === 960 ? 62 : 67, effort: 6 }).toFile(avifPath);
    await sharp(sourcePath).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: width === 640 ? 74 : width === 960 ? 78 : 82, effort: 5 }).toFile(webpPath);
    const relativePrefix = relativeDirectory ? `${relativeDirectory}/` : "";
    variants.push({
      width,
      avif: `/responsive/${relativePrefix}${avifName}`,
      webp: `/responsive/${relativePrefix}${webpName}`,
    });
  }

  if (variants.length) {
    manifest[publicPath] = {
      width: metadata.width,
      height: metadata.height,
      variants,
    };
  }
}

await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Generated responsive AVIF and WebP variants for ${Object.keys(manifest).length} source images.`);
