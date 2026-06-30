import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {
  const defaultTitle = "Helix Open Access Journals | International Peer-Reviewed Research Publisher";
  const defaultDescription = "Helix Open Access Journals is a global open access publisher of peer-reviewed research in science, medicine, engineering, and technology with global impact. Publish your research paper with us.";
  const defaultKeywords = "Open Access Journals, International Peer-Reviewed Research, Science Journals, Helix Open Access, Publish Research Paper, Medical Journals, Engineering Journals";
  const defaultUrl = "https://helixjournals.com";
  const defaultImage = "/Images/image.webp";

  const seoTitle = title ? `${title} | Helix Journals` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoUrl = url ? `${defaultUrl}${url}` : defaultUrl;
  const seoImage = image ? `${defaultUrl}${image}` : `${defaultUrl}${defaultImage}`;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
