
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
  title = "Cuephoria | Best PS5 Gaming, VR & Pool Club for Students in Trichy",
  description = "Cuephoria - Trichy's #1 gaming lounge for college & school students with PS5 games, Meta Quest 3S VR gaming, 8-ball pool, snooker & student discounts. The perfect hangout spot for friends. Book online now!",
  keywords = "Cuephoria, gaming lounge Trichy, PS5 gaming Trichy, VR gaming Trichy, Meta Quest 3S, virtual reality Trichy, mixed reality gaming, 8-ball pool Trichy, snooker Trichy, pool table Trichy, PlayStation games Trichy, VR games, metashot challenges, hangout place Trichy, chill out spot Trichy, billiards Trichy, gaming center Trichy, best gaming lounge Trichy, weekend hangout Trichy, gaming cafe Trichy, student gaming Trichy, college hangout Trichy, student discount gaming Trichy, student recreation Trichy",
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
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Cuephoria Gaming Lounge" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Trichy" />
      <meta name="geo.position" content="10.7905;78.7047" />
      <meta name="ICBM" content="10.7905, 78.7047" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="audience" content="all, students, gamers, youth" />
      <meta name="target" content="College Students, School Students, Gamers" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": canonicalUrl,
          "name": "Cuephoria Gaming Lounge",
          "image": ogImage,
          "url": canonicalUrl,
          "telephone": "+918637625155",
          "priceRange": "₹₹",
          "description": "Cuephoria is Trichy's premier gaming lounge and 8-ball pool club, offering PS5, VR games, billiards, snooker, and special student discounts in an electrifying atmosphere.",
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
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": "College Students, School Students, Young Adults",
            "geographicArea": {
              "@type": "GeoShape",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Trichy",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
            }
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cuephoria Gaming Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "PS5 Gaming in Trichy",
                "description": "Premium PlayStation 5 gaming experience with latest titles"
              },
              {
                "@type": "Offer",
                "name": "8-Ball Pool in Trichy",
                "description": "Professional 8-Ball Pool tables with premium equipment"
              },
              {
                "@type": "Offer",
                "name": "Snooker in Trichy",
                "description": "Full-size snooker tables for casual and competitive play"
              },
              {
                "@type": "Offer",
                "name": "VR Gaming Experience",
                "description": "Immersive VR gaming with latest technology"
              },
              {
                "@type": "Offer",
                "name": "Hangout Space in Trichy",
                "description": "Premium chill-out space for friends and groups"
              },
              {
                "@type": "Offer",
                "name": "Student Discount Gaming",
                "description": "Special rates and packages for college and school students"
              }
            ]
          },
          "specialOpeningHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "name": "Student Happy Hours",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
              "opens": "14:00",
              "closes": "17:00",
              "description": "Special rates for students with valid ID"
            }
          ],
          "keywords": [
            "PS5 gaming Trichy",
            "8-Ball Pool Trichy",
            "Snooker in Trichy",
            "Gaming lounge Trichy",
            "PlayStation games Trichy",
            "Chill out place Trichy",
            "Hangout place Trichy",
            "VR gaming Trichy",
            "Pool table Trichy",
            "Gaming center Trichy",
            "Billiards Trichy",
            "College student gaming Trichy",
            "School student gaming Trichy",
            "Student discount gaming Trichy",
            "Student recreation Trichy",
            "Gaming cafe near college Trichy",
            "Best hangout place for students Trichy"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOMetadata;
