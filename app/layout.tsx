import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://graficaananisign.netlify.app"),
  title: "AnaniSign | Gráfica em Belém, Ananindeua e Marituba — PA",
  description: "Banners, adesivos, fachadas, brindes e impressão digital em Belém, Ananindeua e Marituba-PA. Qualidade profissional, atendimento rápido e entrega no prazo.",
  keywords: [
    "gráfica em Belém", "gráfica em Ananindeua", "gráfica em Marituba",
    "comunicação visual Belém", "comunicação visual Ananindeua", "comunicação visual Marituba",
    "banner Belém", "banner Ananindeua", "banner Marituba",
    "adesivos personalizados", "impressão digital",
    "fachada ACM Belém", "fachada ACM Ananindeua",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "AnaniSign",
    title: "AnaniSign | Gráfica em Belém, Ananindeua e Marituba",
    description: "Comunicação visual e impressão digital profissional em Belém, Ananindeua e Marituba-PA.",
    images: [{ url: "/images/logo-ananisign.jpg", width: 1080, height: 1080, alt: "AnaniSign Impressão Digital" }],
  },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }], shortcut: "/favicon.ico", apple: "/favicon.png" },
  other: { "codex-preview": "development" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "PrintShop",
  name: "Gráfica AnaniSign",
  image: "https://graficaananisign.netlify.app/images/logo-ananisign.jpg",
  url: "https://graficaananisign.netlify.app",
  telephone: "+55-91-98483-8437",
  email: "graficaananisign@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Principal, 975 - Centro",
    addressLocality: "Ananindeua",
    addressRegion: "PA",
    postalCode: "67000-000",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Belém", containedInPlace: { "@type": "State", name: "Pará" } },
    { "@type": "City", name: "Ananindeua", containedInPlace: { "@type": "State", name: "Pará" } },
    { "@type": "City", name: "Marituba", containedInPlace: { "@type": "State", name: "Pará" } },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
  ],
  sameAs: ["https://www.instagram.com/ananisign/", "https://www.facebook.com/ananisingimpressaodigital/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} ${playfair.variable}`}>
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TLJQWZGX');` }} />
        <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1456618649482799');fbq('track','PageView');` }} />
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLJQWZGX" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        {children}
      </body>
    </html>
  );
}
