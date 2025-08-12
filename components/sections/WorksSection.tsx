import React from 'react';
import Layout from '../Layout';
import ScrollReveal from '../ScrollReveal';
import ProjectItem from '../ProjectItem';

const WorksSection: React.FC = () => {
  return (
    <section id="works">
        <Layout>
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-serif-jp font-bold text-ink mb-4"><span className="brush-underline">制作実績</span></h2>
              <p className="text-base text-ink/80 max-w-2xl mx-auto leading-relaxed">
                ドン底の日々で見つけた光は、やがて形になりました。<br/>限られた時間の中で、僕が情熱を注いで創り上げたものです。
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-16">
            <ProjectItem
              category="UEFN Game"
              title="個人制作マップ"
              description="初めてUEFNとVerseに触れ、アスレチックとスマブラ風アクションゲームの要素を詰め込んだマップ。手探り状態から、ゲームを「創る」ことの楽しさと難しさを学びました。僕のクリエイターとしての原点です。"
              imageUrl="/images/portfolio-uefn.jpg"
              linkUrl="https://www.fortnite.com/@mohiro?lang=ja"
              linkText="マップをプレイする"
              skills={['UEFN', 'Verse', 'Game Design']}
              delay={100}
            />
            <ProjectItem
              category="UEFN Contribution"
              title="BGL制作マップ協力"
              description="BGLのプロジェクトで、Verseを用いた特殊能力システムの開発に協力しました。チームでの開発、他のクリエイターとの連携を通して、コードがゲームに命を吹き込む瞬間を体験しました。"
              imageUrl="/images/roguelike_bgl.jpg"
              linkUrl="https://www.fortnite.com/@bgl/1305-1553-1636?lang=ja"
              linkText="マップをプレイする"
              skills={['Verse', 'Team Development', 'System Design']}
              delay={200}
            />
             <ProjectItem
              category="Development"
              title="Webサイト制作"
              description="Vibe Codingで、デザインの再現性はもちろん、コンポーネント設計やパフォーマンスを意識して実装したWebサイトです。実装には Next.js (React) を採用し、Sass (SCSS) と CSS Modules でスタイリングを行うことで、再利用性が高く保守性に優れたコードを目指しました。私にとって、モダンなフロントエンド開発の基礎を固める上で、大きな一歩となった大切な作品です。"
              imageUrl="/images/portfolio-screenshot.jpg"
              linkUrl="https://mokumokuhouse.vercel.app/"
              linkText="サイトを見る"
              skills={['Next.js', 'Sass', 'CSS Modules', 'UI/UX Design']}
              delay={300}
            />
          </div>
        </Layout>
      </section>
  );
};

export default WorksSection;