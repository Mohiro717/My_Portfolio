
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { posts } from '../data/posts';
import ScrollReveal from '../components/ScrollReveal';

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

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
    <Layout>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-ink/70 font-medium mb-3">{post.date}</p>
            <h1 className="text-3xl md:text-4xl font-serif-jp font-extrabold text-ink leading-tight">{post.title}</h1>
          </div>
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl mb-12" />
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
  );
};

export default PostPage;