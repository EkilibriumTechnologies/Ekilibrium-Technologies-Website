import Head from "next/head";
import { absoluteUrl } from "@/lib/site";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  locale?: "en" | "es";
}

const DEFAULT_TITLE = "Ekilibrium Technologies | Rental Technology & Automation";
const DEFAULT_DESCRIPTION =
  "Enterprise software, automation, AI and integrations for independent vehicle rental businesses. Specializing in car, Jeep, exotic, van, golf cart, and ATV rentals.";

export function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = "/og-image.png",
  url = "/",
  locale = "en",
}: SEOProps) {
  const canonical = absoluteUrl(url);
  const imageUrl = absoluteUrl(image);
  const englishUrl = absoluteUrl("/");
  const spanishUrl = absoluteUrl("/es");
  const ogLocale = locale === "es" ? "es_ES" : "en_US";
  const alternateLocale = locale === "es" ? "en_US" : "es_ES";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={englishUrl} />
      <link rel="alternate" hrefLang="es" href={spanishUrl} />
      <link rel="alternate" hrefLang="x-default" href={englishUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
