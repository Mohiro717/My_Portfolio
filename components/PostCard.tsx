import React from 'react';
import { Link } from 'react-router-dom';
import CategoryBadge from './CategoryBadge';
import LazyImage from './LazyImage';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // タイトルや抜粋からカテゴリを推測
  const getCategory = (post: Post): string => {
    const title = post.title.toLowerCase();
    const excerpt = post.excerpt.toLowerCase();
    
    if (title.includes('uefn') || excerpt.includes('uefn')) return 'UEFN学習';
    if (title.includes('挑戦') || excerpt.includes('挑戦')) return '挑戦の記録';
    if (title.includes('ゲーム') || title.includes('開発') || excerpt.includes('ゲーム')) return 'ゲーム開発';
    if (title.includes('コミュニティ') || excerpt.includes('コミュニティ')) return 'コミュニティ';
    return '日記';
  };

  // タグを抽出
  const getTags = (post: Post): string[] => {
    const tags: string[] = [];
    const content = (post.title + ' ' + post.excerpt).toLowerCase();
    
    if (content.includes('学習')) tags.push('学習');
    if (content.includes('初心者')) tags.push('初心者');
    if (content.includes('挑戦')) tags.push('挑戦');
    if (content.includes('困難') || content.includes('課題')) tags.push('困難克服');
    if (content.includes('成長')) tags.push('成長');
    if (content.includes('希望') || content.includes('夢')) tags.push('希望');
    
    return tags.slice(0, 2); // 最大2つまで
  };

  const category = getCategory(post);
  const tags = getTags(post);

  return (
    <Link to={`/blog/${post.slug}`} className="group block watercolor-card overflow-hidden h-full">
      <div className="overflow-hidden relative">
        <div className="transform transition-transform duration-500 ease-out group-hover:scale-105">
          <LazyImage
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-56"
          />
        </div>
        <div className="absolute top-3 left-3">
          <CategoryBadge category={category} />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-ink/60 font-medium">{post.date}</p>
          {tags.length > 0 && (
            <div className="flex gap-1">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-ink/5 text-ink/60 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className="text-base font-serif-jp font-bold text-ink mb-2 transition-colors duration-300 group-hover:text-watercolor-pink line-clamp-2">{post.title}</h3>
        <p className="text-ink/80 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCard;