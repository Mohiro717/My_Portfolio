import React from 'react';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';

interface ProjectProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
  skills: string[];
}

const ProjectItem: React.FC<ProjectProps & { delay: number }> = ({ category, title, description, imageUrl, linkUrl, linkText, skills, delay }) => (
  <ScrollReveal delay={delay}>
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-paper p-8 rounded-2xl shadow-watercolor">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="md:w-1/3 w-full flex-shrink-0 block">
        <img src={imageUrl} alt={title} className="rounded-xl object-cover w-full h-64 md:h-full transform transition-all duration-300 hover:scale-105 shadow-watercolor" />
      </a>
      <div className="md:w-2/3">
        <p className="font-sans-jp text-watercolor-pink font-bold mb-2">{category}</p>
        <h3 className="text-2xl font-serif-jp font-bold text-ink mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map(skill => (
            <span key={skill} className="bg-watercolor-blue/50 text-ink/80 text-xs font-bold px-3 py-1 rounded-full">{skill}</span>
          ))}
        </div>
        <p className="text-ink/80 leading-relaxed mb-6">{description}</p>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-watercolor-pink text-ink font-bold font-serif-jp py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-watercolor">
          {linkText}
        </a>
      </div>
    </div>
  </ScrollReveal>
);


const WorksPage: React.FC = () => {
  return (
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
          imageUrl="https://images.unsplash.com/photo-1534294645934-2a2b57a7e634?auto=format&fit=crop&w=800&q=80"
          linkUrl="https://www.fortnite.com/@mohiro?lang=ja"
          linkText="マップをプレイする"
          skills={['UEFN', 'Verse', 'Game Design']}
          delay={100}
        />
        <ProjectItem
          category="UEFN Contribution"
          title="BGL制作マップ協力"
          description="BGLのプロジェクトで、Verseを用いた特殊能力システムの開発に協力しました。チームでの開発、他のクリエイターとの連携を通して、コードがゲームに命を吹き込む瞬間を体験しました。"
          imageUrl="https://images.unsplash.com/photo-1516550755-9b226f92b78c?auto=format&fit=crop&w=800&q=80"
          linkUrl="https://www.fortnite.com/@bgl/1305-1553-1636?lang=ja"
          linkText="マップをプレイする"
          skills={['Verse', 'Team Development', 'System Design']}
          delay={200}
        />
         <ProjectItem
          category="Development"
          title="Webサイト制作"
          description="Vibe Codingで、デザインの再現性はもちろん、コンポーネント設計やパフォーマンスを意識して実装したWebサイトです。実装には Next.js (React) を採用し、Sass (SCSS) と CSS Modules でスタイリングを行うことで、再利用性が高く保守性に優れたコードを目指しました。私にとって、モダンなフロントエンド開発の基礎を固める上で、大きな一歩となった大切な作品です。"
          imageUrl="https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?auto=format&fit=crop&w=800&q=80"
          linkUrl="https://github.com/your-repo/your-repo-name" // TODO: Add actual repo link if available
          linkText="ソースコードを見る (準備中)"
          skills={['Next.js', 'Sass', 'CSS Modules', 'UI/UX Design']}
          delay={300}
        />
      </div>
    </Layout>
  );
};

export default WorksPage;