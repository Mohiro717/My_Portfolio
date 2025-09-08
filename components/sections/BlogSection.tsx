import React, { useState, useEffect } from 'react';
import Layout from '../Layout';
import ScrollReveal from '../ScrollReveal';
import PostCard from '../PostCard';
import { BlogService } from '../../services/blogService';
import type { Post } from '../../types';

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const recentPosts = await BlogService.getRecentPosts(6); // 最新6件を表示
        setPosts(recentPosts);
      } catch (error) {
        console.error('ブログ投稿の読み込みに失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <section id="blog">
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
      </section>
    );
  }


  return (
    <section id="blog">
        <Layout>
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-serif-jp font-bold text-ink mb-4"><span className="brush-underline">ブログ</span></h2>
              <p className="text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
                UEFNクリエイターとしての挑戦、学び、そして日々の気づき。<br/>僕が歩む道のりを、ありのままに綴っていきます。
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={post.slug}>
                  <PostCard post={post} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-ink/60">ブログ投稿が見つかりませんでした</p>
              </div>
            )}
          </div>
        </Layout>
      </section>
  );
};

export default BlogSection;