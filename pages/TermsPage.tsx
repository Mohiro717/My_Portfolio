import React from 'react';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';

const TermsPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-serif-jp font-bold text-center text-ink mb-12"><span className="brush-underline">利用規約</span></h2>
        </ScrollReveal>
        
        <div className="watercolor-section p-8 md:p-12 space-y-10 text-ink/90 leading-loose">
          <ScrollReveal delay={100}>
            <p className="mb-8 p-6 bg-watercolor-blue/20 rounded-2xl">
              本サイトを心地よく、そして安全にご利用いただくために、いくつかのルールを定めました。少し堅苦しい言葉が続きますが、大切なことですので、ご一読いただけますと幸いです。
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第1条（適用）</h3>
              <p>
                本規約は、本サイトの利用に関する一切の関係に適用されます。
              </p>
            </section>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第2条（禁止事項）</h3>
              <p>
                ユーザーは、本サイトの利用にあたり、以下の行為をしてはなりません。
                <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>本サイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>その他、当方が不適切と判断する行為</li>
                </ul>
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第3条（免責事項）</h3>
              <p>
                当方は、本サイトに掲載されている情報の正確性について万全を期しておりますが、その内容を保証するものではありません。本サイトの利用により何らかの損害が発生した場合でも、当方は一切の責任を負いません。
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <section className="space-y-3">
              <h3 className="text-xl font-serif-jp font-bold text-ink">第4条（規約の変更）</h3>
              <p>
                当方は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
              </p>
            </section>
          </ScrollReveal>
          
          <ScrollReveal delay={600}>
            <p className="mt-10 pt-6 border-t border-dashed border-watercolor-border text-right text-sm text-ink/70">
              最終更新日：2024年7月24日
            </p>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;