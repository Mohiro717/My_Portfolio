import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-paper/50">
      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="bg-watercolor-blue/20 text-center rounded-3xl p-10 md:p-16" style={{ background: 'radial-gradient(ellipse at 10% 20%, rgba(245, 227, 227, 0.4) 0%, rgba(248,246,242,0) 50%), radial-gradient(ellipse at 90% 80%, rgba(221, 232, 240, 0.4) 0%, rgba(248,246,242,0) 50%)' }}>
            <h2 className="text-3xl font-serif-jp font-bold text-ink mb-4">
              あなたの物語も、聞かせてください
            </h2>
            <p className="text-ink/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              僕の挑戦はまだ始まったばかりです。最新のブログ記事や日々の活動はXで発信しています。<br/>お仕事のご相談や、ただの雑談でも、いつでもお待ちしています。
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <a href="https://x.com/3537Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gray-800 text-white font-bold font-sans-jp py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Xでフォローする</span>
              </a>
              <Link to="/contact" className="w-full sm:w-auto bg-watercolor-pink text-ink font-bold font-serif-jp py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-watercolor">
                お問い合わせ
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CallToAction;