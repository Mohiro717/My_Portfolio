import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-serif-jp font-bold text-center text-ink mb-12"><span className="brush-underline">プライバシーポリシー</span></h2>
        </ScrollReveal>

        <div className="p-8 md:p-12 space-y-10 text-ink/90 leading-loose">
          <ScrollReveal delay={100}>
            <p className="watercolor-card mb-8 p-6 bg-watercolor-pink/20 rounded-2xl">
              あなたのプライバシーは、私にとって非常に大切なものです。このサイトが、安心して過ごせる場所であるように。ここでは、個人情報の取り扱いについて、透明性をもってお伝えします。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第1条（個人情報の定義）</h3>
              <p>
                本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）を意味します。
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第2条（個人情報の非保持）</h3>
              <p>
                本サイトは、サーバー上でユーザーの個人情報を一切保持しません。お問い合わせフォームから送信された情報は、外部サービスであるFormspreeを通じて処理され、当方のサーバーには保存されません。
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第3条（お問い合わせフォームについて）</h3>
              <p>
                お問い合わせフォーム（Formspreeを利用）では、お名前、メールアドレス等の個人情報をご入力いただきます。これらの情報は、お問い合わせへの返信・連絡の目的でのみ利用し、それ以外の目的では利用いたしません。Formspreeのプライバシーポリシーについては、同社のサイトをご確認ください。
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第4条（アクセス解析ツールについて）</h3>
              <p>
                本サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用する場合があります。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第5条（本ポリシーの変更）</h3>
              <p>
                当方は、法令等の改正や社会情勢の変化に応じて、本ポリシーを随時変更することができるものとします。
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <p className="mt-10 pt-6 border-t border-dashed border-watercolor-border text-right text-sm text-ink/70">
              最終更新日：2024年7月24日
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;