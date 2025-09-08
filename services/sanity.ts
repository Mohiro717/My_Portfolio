import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanityプロジェクト設定
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'kuw8yakr',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // 開発中はCDNを無効にして最新データを確実に取得
  apiVersion: '2022-06-01', // CLIと同じバージョンに統一
  perspective: 'published', // 公開済みコンテンツのみ取得
});


// 画像URL生成用のbuilder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// ブログ用のクエリ
export const blogQueries = {
  // 全ブログ投稿取得
  getAllPosts: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage,
      author->,
      categories[]->
    }
  `,
  
  // 特定の投稿取得
  getPostBySlug: (slug: string) => `
    *[_type == "post" && slug.current == "${slug}"][0] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage,
      body,
      author->,
      categories[]->
    }
  `,
  
  // 最新投稿取得（指定件数）
  getRecentPosts: (limit: number = 3) => `
    *[_type == "post"] | order(publishedAt desc) [0...${limit}] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage,
      author->
    }
  `
};