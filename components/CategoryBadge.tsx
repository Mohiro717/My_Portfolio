import React from 'react';

interface CategoryBadgeProps {
  category: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ 
  category, 
  size = 'sm',
  onClick 
}) => {
  const getCategoryColor = (cat: string): string => {
    const categoryColorMap: { [key: string]: string } = {
      'UEFN学習': 'bg-watercolor-blue/20 text-blue-700 border-blue-200',
      '挑戦の記録': 'bg-watercolor-pink/20 text-pink-700 border-pink-200',
      'ゲーム開発': 'bg-watercolor-green/20 text-green-700 border-green-200',
      '日記': 'bg-watercolor-yellow/20 text-yellow-700 border-yellow-200',
      'コミュニティ': 'bg-watercolor-purple/20 text-purple-700 border-purple-200',
      'UEFN': 'bg-watercolor-blue/20 text-blue-700 border-blue-200',
      '学習': 'bg-watercolor-green/20 text-green-700 border-green-200',
      '挑戦': 'bg-watercolor-pink/20 text-pink-700 border-pink-200',
    };

    // 部分一致でカテゴリを判定
    for (const [key, color] of Object.entries(categoryColorMap)) {
      if (category.includes(key) || key.includes(category)) {
        return color;
      }
    }

    return 'bg-ink/10 text-ink/70 border-ink/20'; // デフォルト
  };

  const getSizeClasses = (size: string): string => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs';
      case 'md':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-4 py-2 text-base';
      default:
        return 'px-2 py-1 text-xs';
    }
  };

  const colorClasses = getCategoryColor(category);
  const sizeClasses = getSizeClasses(size);
  const baseClasses = 'inline-flex items-center font-medium rounded-full border transition-colors duration-200';
  const interactiveClasses = onClick ? 'cursor-pointer hover:opacity-80' : '';

  return (
    <span
      className={`${baseClasses} ${colorClasses} ${sizeClasses} ${interactiveClasses}`}
      onClick={onClick}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;