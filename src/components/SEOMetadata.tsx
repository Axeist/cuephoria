
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
  title = "Cuephoria - Premier Gaming Lounge & 8-Ball Pool Club in Trichy",
  description = "Experience Trichy's premier gaming lounge and 8-ball pool club at Cuephoria. Enjoy PS5, VR games, billiards, and more in an electrifying atmosphere with special online booking discounts.",
  keywords = "gaming lounge, 8-ball club, billiards, Trichy, PS5, VR games, pool table, AR games, online booking, cuephoria",
  canonicalUrl = "https://cuephoria.in",
  ogImage = "/lovable-uploads/2fa0e70e-4a7a-42ae-b82c-a47608a6d4ee.png"
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
    </Helmet>
  );
};

export default SEOMetadata;
