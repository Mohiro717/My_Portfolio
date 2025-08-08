
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
