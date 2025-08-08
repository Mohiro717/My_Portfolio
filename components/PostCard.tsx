import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="group block watercolor-card overflow-hidden h-full">
      <div className="overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-xs text-ink/60 font-medium mb-2">{post.date}</p>
        <h3 className="text-base font-serif-jp font-bold text-ink mb-2 transition-colors duration-300 group-hover:text-watercolor-pink">{post.title}</h3>
        <p className="text-ink/80 text-sm leading-relaxed">{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCard;