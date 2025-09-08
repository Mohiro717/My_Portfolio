import React from 'react';
import { urlFor } from './sanity';
import type { SanityPost, Post, ConvertedPost } from '../types';

// Portable Textを簡単なReact要素に変換する関数
export const portableTextToReact = (blocks: any[]): React.ReactNode => {
  if (!blocks || !Array.isArray(blocks)) {
    return React.createElement('p', null, 'コンテンツがありません');
  }

  return React.createElement('div', { className: 'space-y-6' },
    blocks.map((block, index) => {
      if (!block._type) return null;

      switch (block._type) {
        case 'block':
          const style = block.style || 'normal';
          
          if (style === 'h1') {
            return React.createElement('h1', 
              { 
                key: index, 
                className: 'text-2xl md:text-3xl font-serif-jp font-bold text-ink pt-4' 
              }, 
              getTextFromChildren(block.children)
            );
          }
          if (style === 'h2') {
            return React.createElement('h2', 
              { 
                key: index, 
                className: 'text-xl md:text-2xl font-serif-jp font-bold text-ink pt-4' 
              }, 
              getTextFromChildren(block.children)
            );
          }
          if (style === 'h3') {
            return React.createElement('h3', 
              { 
                key: index, 
                className: 'text-lg md:text-xl font-serif-jp font-bold text-ink pt-4' 
              }, 
              getTextFromChildren(block.children)
            );
          }
          
          // 通常のパラグラフ
          return React.createElement('p', 
            { key: index }, 
            getTextFromChildren(block.children)
          );

        case 'image':
          const imageUrl = urlFor(block).width(800).url();
          return React.createElement('img', {
            key: index,
            src: imageUrl,
            alt: block.alt || 'ブログ画像',
            className: 'w-full rounded-2xl my-6'
          });

        default:
          return null;
      }
    }).filter(Boolean)
  );
};

// Portable TextのchildrenからテキストContent を抽出
const getTextFromChildren = (children: any[]): string => {
  if (!children) return '';
  
  return children.map(child => {
    if (child._type === 'span') {
      return child.text || '';
    }
    return '';
  }).join('');
};

// SanityPostをローカルPost形式に変換
export const convertSanityPost = (sanityPost: SanityPost): ConvertedPost => {
  const imageUrl = sanityPost.mainImage 
    ? urlFor(sanityPost.mainImage).width(800).url()
    : 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80';

  return {
    slug: sanityPost.slug.current,
    title: sanityPost.title,
    excerpt: sanityPost.excerpt,
    date: new Date(sanityPost.publishedAt).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) + '日',
    imageUrl,
    content: portableTextToReact(sanityPost.body),
    sanityData: sanityPost
  };
};

// 複数のSanityPostを変換
export const convertSanityPosts = (sanityPosts: SanityPost[]): ConvertedPost[] => {
  return sanityPosts.map(convertSanityPost);
};