import manifest from "./responsive-images.json";

type ResponsiveEntry = {
  width: number;
  height: number;
  variants: Array<{ width: number; avif: string; webp: string }>;
};

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

const responsiveManifest = manifest as Record<string, ResponsiveEntry>;

export function OptimizedImage({ src, alt, className, sizes = "100vw", priority = false, objectPosition }: OptimizedImageProps) {
  const entry = responsiveManifest[src];
  const commonStyle = { objectPosition };

  if (!entry) {
    return <img className={className} src={src} data-source-image={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"} style={commonStyle} />;
  }

  const avifSrcSet = entry.variants.map((item) => `${item.avif} ${item.width}w`).join(", ");
  const webpSrcSet = entry.variants.map((item) => `${item.webp} ${item.width}w`).join(", ");
  const fallback = entry.variants.at(-1)?.webp ?? src;

  return <picture className="optimized-picture">
    <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
    <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
    <img
      className={className}
      src={fallback}
      data-source-image={src}
      alt={alt}
      width={entry.width}
      height={entry.height}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      style={commonStyle}
    />
  </picture>;
}
