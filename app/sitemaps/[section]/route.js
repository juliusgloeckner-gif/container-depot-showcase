import { renderUrlset, sitemapSections } from "../../../seo-routes.mjs";

export async function GET(_request, { params }) {
  const { section } = await params;
  const key = section.replace(/\.xml$/, "");
  const entries = sitemapSections[key];
  if (!entries) return new Response("Not found", { status: 404 });

  return new Response(renderUrlset(entries), {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
