
import React from 'react';

export interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    content: React.ReactNode;
}

// Sanity用の型定義
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityPost {
  _id: string;
  _type: 'post';
  title: string;
  slug: SanitySlug;
  excerpt: string;
  publishedAt: string;
  mainImage: SanityImage;
  body: any[]; // Portable Text
  author?: {
    name: string;
    image?: SanityImage;
  };
  categories?: {
    title: string;
    slug: SanitySlug;
  }[];
}

// Sanity PostをローカルPost形式に変換する際の型
export interface ConvertedPost extends Omit<Post, 'date' | 'content'> {
  date: string;
  content: React.ReactNode;
  sanityData?: SanityPost; // 元データの参照用
}
