import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Mohiro Portfolio - UEFNクリエイターの挑戦',
  description = 'UEFNクリエイターmohiroのポートフォリオサイト。逆境から生まれた挑戦の物語と、日々の学びを綴るブログ。持たざる者が築く新しい未来への道のり。',
  keywords = ['UEFN', 'Fortnite', 'クリエイター', 'ゲーム開発', 'ポートフォリオ', 'ブログ'],
  image = '/assets/home.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Mohiro',
  noIndex = false
}) => {
  const siteUrl = 'https://mohiro-portfolio.vercel.app';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Titleの更新
    document.title = title;

    // メタタグの更新
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 基本メタタグ
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', author);
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Open Graphタグ
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:site_name', 'Mohiro Portfolio', true);
    updateMetaTag('og:locale', 'ja_JP', true);

    // 記事固有のOGタグ
    if (type === 'article') {
      updateMetaTag('article:author', author, true);
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
    }

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);

    // カノニカルURL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 構造化データ
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'BlogPosting' : 'WebSite',
      "name": title,
      "description": description,
      "url": fullUrl,
      "image": fullImageUrl,
      ...(type === 'article' && {
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Person", 
          "name": "Mohiro"
        },
        ...(publishedTime && { "datePublished": publishedTime }),
        ...(modifiedTime && { "dateModified": modifiedTime })
      }),
      ...(type === 'website' && {
        "author": {
          "@type": "Person",
          "name": "Mohiro",
          "description": "UEFNクリエイター"
        }
      })
    };

    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, fullImageUrl, fullUrl, type, publishedTime, modifiedTime, author, noIndex]);

  return null;
};

export default SEO;