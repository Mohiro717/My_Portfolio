import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import PostCard from '../components/PostCard';
import BlogSearch from '../components/BlogSearch';
import { BlogService } from '../services/blogService';
import type { Post } from '../types';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await BlogService.getAllPosts();
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      } catch (error) {
        // エラーログは削除（本番環境では適切なエラーハンドリングを実装）
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleFilter = (filtered: Post[]) => {
    setFilteredPosts(filtered);
  };

  if (loading) {
    return (
      <Layout>
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl font-serif-jp font-bold text-ink mb-4">
              <span className="brush-underline">ブログ</span>
            </h2>
            <p className="text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
              UEFNクリエイターとしての挑戦、学び、そして日々の気づき。<br/>僕が歩む道のりを、ありのままに綴っていきます。
            </p>
          </ScrollReveal>
        </div>
        <div className="flex justify-center items-center py-12">
          <div className="text-ink/60">ブログ投稿を読み込み中...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="text-center mb-16">
        <ScrollReveal>
          <h2 className="text-4xl font-serif-jp font-bold text-ink mb-4"><span className="brush-underline">ブログ</span></h2>
          <p className="text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
            UEFNクリエイターとしての挑戦、学び、そして日々の気づき。<br/>僕が歩む道のりを、ありのままに綴っていきます。
          </p>
        </ScrollReveal>
      </div>
      
      <BlogSearch 
        posts={posts} 
        onFilter={handleFilter}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 100}>
              <PostCard post={post} />
            </ScrollReveal>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-ink/60 text-lg">検索条件に一致する投稿が見つかりませんでした。</p>
            <p className="text-ink/40 text-sm mt-2">別のキーワードやカテゴリをお試しください。</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;