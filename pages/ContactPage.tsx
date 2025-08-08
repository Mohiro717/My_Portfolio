import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';

const ContactPage: React.FC = () => {
  const formspreeEndpoint = "https://formspree.io/f/xblkpbdg";

  const inputStyles = "w-full bg-transparent border-0 border-b-2 border-watercolor-border focus:outline-none focus:ring-0 focus:border-watercolor-pink transition-colors duration-300 placeholder:text-ink/40 py-2";
  const labelStyles = "block text-sm font-serif-jp font-bold text-ink mb-2";

  return (
    <Layout>
      <ScrollReveal>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif-jp font-bold text-ink mb-4"><span className="brush-underline">連絡先</span></h2>
            <p className="text-ink/80 leading-relaxed">僕の物語や制作物に少しでも興味を持っていただけたら、<br/>ぜひお気軽にご連絡ください。</p>
          </div>

          <div className="watercolor-card bg-watercolor-blue/30 text-center mb-12 p-8 rounded-2xl shadow-watercolor">
            <h3 className="text-xl font-serif-jp font-bold text-ink mb-3">まずは、お気軽にX (旧Twitter) から</h3>
            <p className="text-ink/80 mb-6">日々の学習の様子や、ちょっとしたつぶやきを発信しています。<br/>フォローやDM、いつでも大歓迎です！</p>
            <a href="https://x.com/3537Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-800 text-white font-bold font-sans-jp py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@3537Hi をフォローする</span>
            </a>
          </div>

          <div className="watercolor-card bg-paper p-8 md:p-12 rounded-2xl shadow-watercolor">
            <h3 className="text-xl font-serif-jp font-bold text-ink text-center mb-8">お問い合わせはこちらから</h3>
            <form action={formspreeEndpoint} method="POST">
              <div className="space-y-8">
                <div>
                  <label htmlFor="name" className={labelStyles}>お名前</label>
                  <input type="text" name="name" id="name" required className={inputStyles} placeholder="例：希望 はなこ" />
                </div>
                <div>
                  <label htmlFor="email" className={labelStyles}>メールアドレス</label>
                  <input type="email" name="email" id="email" required className={inputStyles} placeholder="例：hope@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className={labelStyles}>メッセージ</label>
                  <textarea name="message" id="message" rows={5} required className={`${inputStyles} resize-none`} placeholder="ここにメッセージを入力してください..."></textarea>
                </div>
                <div className="flex items-center pt-2">
                  <input type="checkbox" id="agreement" name="agreement" required className="h-5 w-5 text-watercolor-pink focus:ring-watercolor-pink/50 border-watercolor-border rounded" />
                  <label htmlFor="agreement" className="ml-3 block text-sm text-ink">
                    <Link to="/privacy" className="underline hover:text-watercolor-pink transition-colors">プライバシーポリシー</Link>に同意する
                  </label>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-watercolor-pink text-ink font-bold font-serif-jp py-3 px-4 rounded-lg hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-watercolor-pink transform transition-all duration-300 ease-in-out shadow-watercolor hover:shadow-watercolor-hover">
                    送信する
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ScrollReveal>
    </Layout>
  );
};

export default ContactPage;