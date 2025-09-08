
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { BlogService } from '../services/blogService';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import type { Post } from '../types';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }
      
      try {
        const foundPost = await BlogService.getPostBySlug(slug);
        setPost(foundPost);
      } catch (error) {
        // エラーログは削除（本番環境では適切なエラーハンドリングを実装）
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center py-12">
            <div className="text-ink/60">記事を読み込み中...</div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">記事が見つかりません</h2>
          <p className="mb-8">お探しのページは存在しないか、移動された可能性があります。</p>
          <Link to="/" className="inline-block bg-watercolor-pink text-ink font-bold font-serif-jp py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300">
            トップページへ戻る
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | Mohiro Portfolio`}
        description={post.excerpt}
        image={post.imageUrl}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        keywords={['UEFN', 'ブログ', post.title.split(' ').slice(0, 3)].flat()}
      />
      <Layout>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="text-ink/70 font-medium mb-3">{post.date}</p>
              <h1 className="text-3xl md:text-4xl font-serif-jp font-extrabold text-ink leading-tight">{post.title}</h1>
            </div>
            <div className="mb-12">
              <LazyImage
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto max-h-[500px] rounded-2xl"
              />
            </div>
          </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="watercolor-section p-8 md:p-12">
            <article className="prose prose-lg max-w-none text-ink leading-loose">
              {post.content}
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-16 pt-8 border-t-2 border-dashed border-watercolor-border text-center">
            <Link to="/#blog" className="inline-block text-watercolor-pink hover:underline font-bold">
              &larr; ブログ一覧へ戻る
            </Link>
          </div>
        </ScrollReveal>
        </div>
      </Layout>
    </>
  );
};

export default PostPage;