import React, { useState } from 'react';
import type { Post } from '../types';

interface BlogSearchProps {
  posts: Post[];
  onFilter: (filteredPosts: Post[]) => void;
  categories?: string[];
}

const BlogSearch: React.FC<BlogSearchProps> = ({ 
  posts, 
  onFilter, 
  categories = ['UEFN学習', '挑戦の記録', 'ゲーム開発', '日記']
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // 全投稿からタグを抽出
  const allTags = Array.from(
    new Set(
      posts.flatMap(post => 
        post.title.includes('UEFN') ? ['UEFN'] :
        post.title.includes('挑戦') ? ['挑戦'] :
        post.title.includes('学習') ? ['学習'] :
        post.title.includes('コミュニティ') ? ['コミュニティ'] :
        post.title.includes('ゲーム') ? ['ゲーム開発'] :
        ['その他']
      )
    )
  );

  const handleSearch = () => {
    let filteredPosts = posts;

    // テキスト検索
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term)
      );
    }

    // カテゴリフィルタ
    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.includes(selectedCategory) ||
        post.excerpt.includes(selectedCategory)
      );
    }

    // タグフィルタ
    if (selectedTag) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.includes(selectedTag) ||
        post.excerpt.includes(selectedTag)
      );
    }

    onFilter(filteredPosts);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    onFilter(posts);
  };

  // リアルタイム検索
  React.useEffect(() => {
    handleSearch();
  }, [searchTerm, selectedCategory, selectedTag]);

  return (
    <div className="mb-8">
      <div className="watercolor-section p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 検索ボックス */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-ink/80 mb-2">
              キーワード検索
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="タイトルや内容を検索..."
              className="w-full px-4 py-2 border border-watercolor-border rounded-lg focus:ring-2 focus:ring-watercolor-pink focus:border-transparent outline-none transition-colors"
            />
          </div>

          {/* カテゴリ選択 */}
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-2">
              カテゴリ
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-watercolor-border rounded-lg focus:ring-2 focus:ring-watercolor-pink focus:border-transparent outline-none transition-colors"
            >
              <option value="">すべて</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* タグ選択 */}
          <div>
            <label className="block text-sm font-medium text-ink/80 mb-2">
              タグ
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-2 border border-watercolor-border rounded-lg focus:ring-2 focus:ring-watercolor-pink focus:border-transparent outline-none transition-colors"
            >
              <option value="">すべて</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* フィルタ状態とリセットボタン */}
        {(searchTerm || selectedCategory || selectedTag) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-ink/60">フィルタ中:</span>
            
            {searchTerm && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-watercolor-pink/20 text-ink">
                "{searchTerm}"
                <button
                  onClick={() => setSearchTerm('')}
                  className="ml-1 text-ink/60 hover:text-ink"
                >
                  ×
                </button>
              </span>
            )}
            
            {selectedCategory && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-watercolor-blue/20 text-ink">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory('')}
                  className="ml-1 text-ink/60 hover:text-ink"
                >
                  ×
                </button>
              </span>
            )}
            
            {selectedTag && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-watercolor-green/20 text-ink">
                {selectedTag}
                <button
                  onClick={() => setSelectedTag('')}
                  className="ml-1 text-ink/60 hover:text-ink"
                >
                  ×
                </button>
              </span>
            )}

            <button
              onClick={handleReset}
              className="text-xs text-watercolor-pink hover:underline ml-2"
            >
              すべてクリア
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;