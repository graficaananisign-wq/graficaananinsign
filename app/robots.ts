export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/.next/", "/api/", "/admin/"],
      },
    ],
    sitemap: "https://graficaananisign.netlify.app/sitemap.xml",
  };
}
