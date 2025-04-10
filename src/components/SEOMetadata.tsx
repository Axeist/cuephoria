
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOMetadata = ({
  title = "Cuephoria | Premier 8-Ball Pool Club & Gaming Lounge in Trichy",
  description = "Visit Cuephoria Gaming Lounge in Trichy for the best 8-ball pool, snooker, PS5 gaming & VR experiences. Book online for exclusive discounts!",
  keywords = "Cuephoria, gaming lounge, 8-ball club, billiards, Trichy, PS5, VR games, pool table, snooker, metashot challenges, premier gaming Trichy",
  canonicalUrl = "https://cuephoria.in",
  ogImage = "/lovable-uploads/bf64c942-20de-45f0-a655-188a21952fc4.png"
}: SEOMetadataProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Cuephoria Gaming Lounge" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Trichy" />
      <meta name="geo.position" content="10.7905;78.7047" />
      <meta name="ICBM" content="10.7905, 78.7047" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EntertainmentBusiness",
          "name": "Cuephoria Gaming Lounge",
          "image": ogImage,
          "@id": canonicalUrl,
          "url": canonicalUrl,
          "telephone": "+918637625155",
          "priceRange": "₹₹",
          "description": "Cuephoria is Trichy's premier gaming lounge and 8-ball pool club, offering PS5, VR games, billiards, and more in an electrifying atmosphere.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Roof Top, No.1, Shivani Complex, Vaithiyalingam St, Muthu Nagar",
            "addressLocality": "Thiruverumbur, Trichy",
            "postalCode": "620013",
            "addressCountry": "IN",
            "addressRegion": "Tamil Nadu"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.794156358865413,
            "longitude": 78.75926407557512
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "11:00",
            "closes": "23:00"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61574215405586&sk=about",
            "https://www.instagram.com/cuephoriaclub/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;
