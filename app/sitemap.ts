import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.iyibirwms.io";
const LOCALES = ["tr", "en"] as const;
// "" = ana sayfa
const PATHS = ["", "/demo", "/contact", "/privacy", "/terms"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PATHS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE}/${locale}${path}/`,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: {
          languages: {
            tr: `${BASE}/tr${path}/`,
            en: `${BASE}/en${path}/`,
          },
        },
      });
    }
  }

  return entries;
}
