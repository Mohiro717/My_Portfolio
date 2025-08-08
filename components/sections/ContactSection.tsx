import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import ScrollReveal from '../ScrollReveal';

const formspreeEndpoint = "https://formspree.io/f/xblkpbdg";

const ContactSection: React.FC = () => {
  return (
    <section id="contact">
        <Layout>
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif-jp font-bold text-ink mb-4"><span className="brush-underline">連絡先</span></h2>
                <p className="text-ink/80 leading-relaxed">僕の物語や制作物に少しでも興味を持っていただけたら、<br/>ぜひお気軽にご連絡ください。</p>
              </div>

              <div className="text-center mb-12 p-8 rounded-2xl bg-watercolor-blue/30 shadow-watercolor">
                <h3 className="text-xl font-serif-jp font-bold text-ink mb-3">気軽にフォローしてください</h3>
                <p className="text-ink/80 mb-6">
                  日々の学習の様子はXで、よりカジュアルな音声配信はstand.fmで行っています。<br/>
                  フォローやDM、いつでも大歓迎です！
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://x.com/3537Hi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-ink/90 text-paper font-bold font-sans-jp py-3 px-6 rounded-lg hover:bg-ink transition-all duration-300 shadow-lg">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>Xでフォロー</span>
                  </a>
                  <a href="https://stand.fm/channels/6892ddc1b09e6a462a52dd21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-watercolor-pink/80 text-ink font-bold font-sans-jp py-3 px-6 rounded-lg hover:bg-watercolor-pink transition-all duration-300 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8h-1a6 6 0 11-12 0H3a7.001 7.001 0 006 6.93V17H7v1h6v-1h-2v-2.07z" clipRule="evenodd" />
                    </svg>
                    <span>stand.fmを聴く</span>
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-paper rounded-2xl shadow-watercolor">
                <h3 className="text-xl font-serif-jp font-bold text-ink text-center mb-8">お問い合わせはこちらから</h3>
                <form action={formspreeEndpoint} method="POST">
                  <div className="space-y-6">
                    <div className="form-field-wc">
                      <label htmlFor="name" className="form-label-wc">お名前</label>
                      <input type="text" name="name" id="name" required className="form-input-wc" placeholder="例：希望 はなこ" />
                    </div>
                    <div className="form-field-wc">
                      <label htmlFor="email" className="form-label-wc">メールアドレス</label>
                      <input type="email" name="email" id="email" required className="form-input-wc" placeholder="例：hope@example.com" />
                    </div>
                    <div className="form-field-wc">
                      <label htmlFor="message" className="form-label-wc">メッセージ</label>
                      <textarea name="message" id="message" rows={5} required className="form-textarea-wc" placeholder="ここにメッセージを入力してください..."></textarea>
                    </div>
                    <div className="flex items-center pt-2">
                      <input type="checkbox" id="agreement" name="agreement" required className="h-5 w-5 text-watercolor-pink focus:ring-watercolor-pink/50 border-watercolor-border rounded" />
                      <label htmlFor="agreement" className="ml-3 block text-sm text-ink">
                        <Link to="/privacy" className="underline hover:text-watercolor-pink transition-colors">プライバシーポリシー</Link>に同意する
                      </label>
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="btn-primary w-full">
                        送信する
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </Layout>
      </section>
  );
};

export default ContactSection;