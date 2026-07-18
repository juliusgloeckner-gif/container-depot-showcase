import { renderSitemapIndex } from "../../seo-routes.mjs";

export function GET() {
  return new Response(renderSitemapIndex(), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
