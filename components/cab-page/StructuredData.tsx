type Props = {
  route: {
    fromName: string;
    toName: string;
  };
  vehicle: {
    name: string;
  };
  url: string;
};

export function StructuredData({
  route,
  vehicle,
  url,
}: Props) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://noidacab.com";

  const normalizedBaseUrl = baseUrl.replace(/\/$/, "");
  const pageUrl = `${normalizedBaseUrl}${url}`;

  const pageTitle = `${vehicle.name} Cab from ${route.fromName} to ${route.toName}`;

  const pageDescription = `Book a ${vehicle.name} cab from ${route.fromName} to ${route.toName}. Get comfortable travel, professional drivers and transparent cab fare information with NoidaCab.`;

  const organizationId = `${normalizedBaseUrl}/#organization`;
  const websiteId = `${normalizedBaseUrl}/#website`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;

  /* ---------------------------------------------
   * Breadcrumb Schema
   * --------------------------------------------- */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: normalizedBaseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: route.fromName,
        item: `${normalizedBaseUrl}/${route.fromName
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${route.fromName} to ${route.toName}`,
        item: pageUrl,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${vehicle.name} Cab`,
        item: pageUrl,
      },
    ],
  };

  /* ---------------------------------------------
   * Organization Schema
   * --------------------------------------------- */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "NoidaCab",
    url: normalizedBaseUrl,
  };

  /* ---------------------------------------------
   * WebSite Schema
   * --------------------------------------------- */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: "NoidaCab",
    url: normalizedBaseUrl,
    publisher: {
      "@id": organizationId,
    },
  };

  /* ---------------------------------------------
   * WebPage Schema
   * --------------------------------------------- */
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageId,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,

    isPartOf: {
      "@id": websiteId,
    },

    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },

    mainEntity: {
      "@id": serviceId,
    },
  };

  /* ---------------------------------------------
   * Service Schema
   * --------------------------------------------- */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,

    name: pageTitle,

    description: pageDescription,

    serviceType: "Cab Booking",

    provider: {
      "@id": organizationId,
    },

    areaServed: [
      {
        "@type": "Place",
        name: route.fromName,
      },
      {
        "@type": "Place",
        name: route.toName,
      },
    ],

    serviceOutput: {
      "@type": "Trip",
      name: `${route.fromName} to ${route.toName} journey`,
    },

    url: pageUrl,
  };

  return (
    <>
      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {/* WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />

      {/* Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}