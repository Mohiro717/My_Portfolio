import React from 'react';
import Layout from '../Layout';
import ScrollReveal from '../ScrollReveal';
import PostCard from '../PostCard';
import { posts } from '../../data/posts';

const BlogSection: React.FC = () => {
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
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 100}>
                <PostCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </Layout>
      </section>
  );
};

export default BlogSection;