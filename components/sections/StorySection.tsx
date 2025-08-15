import React from 'react';
import Layout from '../Layout';
import ScrollReveal from '../ScrollReveal';

const StorySection: React.FC = () => {
  return (
    <section id="story">
        <Layout>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl md:text-4xl font-serif-jp font-bold text-center text-ink mb-6"><span className="brush-underline">僕が挑戦の道を歩む理由</span></h2>
              <p className="text-center text-ink/80 mb-8 md:mb-16 leading-relaxed px-4">
                これは、特別な才能もなかった一人の男が、絶望の淵から「挑戦」という光を見つけ、<br className="hidden md:block" />息子の未来と自分自身の希望のために、再び歩き出すまでの物語です。
              </p>
            </ScrollReveal>
            
            <div className="p-4 md:p-8 lg:p-12">
                <div className="space-y-8 md:space-y-16 text-ink/90 leading-loose text-sm md:text-base">
                  <ScrollReveal delay={200}>
                    <section>
                      <h3 className="text-lg md:text-2xl font-serif-jp font-bold text-ink mb-4 md:mb-6 text-left"><span className="brush-underline">第一章：軋む日常と、突然の絶望</span></h3>
                        <p className="mb-4">
                          「特別裕福じゃないけど、何とかやっていける。これでいいか。」
                        </p>
                        <p className="mb-4">
                          空気中に飛散する化学物質と絶え間ない機械の轟音が支配する工場。三交替勤務の不規則なリズムの中、僕はそんな風に自分を納得させながら、ただ時間をやり過ごしていました。Fランク大学を１浪して卒業し、特別なスキルもない僕にとっては、それが分相応の人生だと、いつしか思い込んでいたのです。
                        </p>
                        <p className="mb-4">
                          2018年に今の奥さんと結婚し、二人の子供に恵まれました。公園で遊ぶ娘の笑い声、家族で囲む温かい食卓。そんなありふれた日常が、僕の唯一の誇りであり、守るべきすべてでした。でもその日常は、突然崩れ去ります。
                        </p>
                        <p className="mb-4">
                          2023年、生まれたばかりの長男が難病を患っていることが判明したのです。医師から告げられた病名は、まるで異世界の言葉のように僕の頭をすり抜けていきました。
                        </p>
                         <figure className="my-6 md:my-12">
                           <img src="/images/story1.jpg" alt="先の見えない道" className="w-full rounded-2xl" />
                           <figcaption className="text-center text-xs text-ink/60 mt-2 px-2">入院中の息子。コロナ禍だった為、外部との接触はNG。まるで軟禁状態がツラ過ぎた。</figcaption>
                        </figure>
                        <p className="mb-4">
                          入退院を繰り返す小さな息子。日に日に憔悴していく妻。不安を感じ泣きじゃくる娘。僕は家族を支えようと必死でしたが、不規則な勤務がそれを阻みました。そして、情けないことに、僕自身が過労で肺炎を患い倒れてしまったのです。
                        </p>
                        <p>
                          病院の白い天井を見上げながら、ネガティブな思考が渦巻きました。「なぜ、うちの子が？」「これからどうすれば？」「俺はなんて無力なんだ…」先の見えない長いトンネルをたった一人で歩いているような、息の詰まる孤独感。まさに、ドン底でした。
                        </p>
                    </section>
                  </ScrollReveal>

                  <ScrollReveal delay={400}>
                    <section>
                      <h3 className="text-lg md:text-2xl font-serif-jp font-bold text-ink mb-4 md:mb-6 text-left"><span className="brush-underline">第二章：一筋の光と、忘れかけた情熱</span></h3>
                         <p className="mb-4">
                          「このままでは家族がバラバラになる」ーーその一心でした。退職も覚悟の上で会社に育児休業を申請しました。幸いにもこの申し出は承認され、家族のサポートに専念する時間を得ることができました。でも月の半分を入院して過ごす息子の傍らで、時間はあっという間に溶けていきました。復職後、家族の時間を優先するために日勤を選びましたが、各種手当が消え収入は激減。未来への不安は、より一層、黒く重くのしかかってきました。
                        </p>
                        <p className="mb-4">
                          そんな灰色の毎日の中、本当に偶然、一筋の光が差し込みます。以前からXでフォローしていたマナブさんの発信で知った「BGL」というコミュニティでした。
                        </p>
                        <p className="mb-4">
                          「おー、なんか楽しそう！」
                        </p>
                        <p className="mb-4">
                          本当に、ただそれだけでした。何かに吸い寄せられるようにDiscordのサーバーを覗くと、そこにはまるで大学の研究室や部室のような、熱気と遊び心に満ちた空間が広がっていました。FiNANCiEのコミュニティにも参加し、昔夢中になったゲームの話で盛り上がるうちに、僕の中で何かが再燃するのを感じました。忘れていた「熱中する」という感覚。乾ききった心に水がじわりと染み渡るようでした。
                        </p>
                         <p className="font-black text-center text-lg md:text-xl text-ink my-6 md:my-8 px-4 font-serif-jp" style={{ textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.6), 0 4px 8px rgba(255,255,255,0.4)', filter: 'brightness(1.2) contrast(1.3)', fontWeight: '900' }}>
                          「もしかしたら、今の自分でも。スキルがなくても、ここなら挑戦できるかもしれない。」
                        </p>
                        <p>
                          まちゃさんとマナブさんの言葉が、諦めで固く閉ざしていた僕の心の扉を何度も何度も叩きました。仕事中も、布団の中でも、その思いが頭から離れない。「ここで一歩踏み出さなければ、一生後悔する」。そう確信した僕は、、UEFNの学習を始めることを決意したのでした。
                        </p>
                    </section>
                  </ScrollReveal>
                      
                  <ScrollReveal delay={600}>
                    <section>
                      <h3 className="text-lg md:text-2xl font-serif-jp font-bold text-ink mb-4 md:mb-6 text-left"><span className="brush-underline">第三章：嵐の中の船出</span></h3>
                        <p className="mb-4">
                          しかし、僕がようやく希望の船に乗り込み少しずつ手ごたえを感じてきた矢先、船は大きな嵐に見舞われます。
                        </p>
                        <blockquote className="relative bg-transparent p-4 md:p-6 my-6 md:my-8 text-xs md:text-sm text-ink/80">
                          <div className="absolute inset-0 bg-watercolor-blue opacity-20 rounded-full blur-xl"></div>
                          <div className="relative">
                            <p className="font-bold mb-2">■結論：</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>事業縮小して、マナブとまちゃで再スタートする</li>
                                <li>コア事業に集中するため、コミュニティ運営を停止</li>
                            </ul>
                             <p className="mt-4">…成果を出すための痛みのある改革です。…BGLは終了じゃなく、成果の出る体制にシフトです。</p>
                             <cite className="block text-right mt-4 not-italic">- 2025年7月 BGLからの発表より抜粋</cite>
                          </div>
                        </blockquote>
                        <p className="mb-4">
                          コミュニティは停止され、事業はコアメンバーで再スタートする。この発表は大きな衝撃でした。やっと見つけた「居場所」がなくなることへの不安。
                        </p>
                        <p>
                          でも、僕の決意はもう誰かや何かに依存するものではなくなっていました。「環境が変わっても、自分の足で立つしかない。BGLが結果を出すために変わるのなら、僕も個人として結果を出す為に動き方を変える」。船を襲った嵐は、むしろ僕の覚悟を固めるための最初の試練となったのです。
                        </p>
                    </section>
                  </ScrollReveal>

                  <ScrollReveal delay={800}>
                    <section>
                      <h3 className="text-lg md:text-2xl font-serif-jp font-bold text-ink mb-4 md:mb-6 text-left"><span className="brush-underline">最終章：父として、挑戦者として</span></h3>
                        <figure className="my-6 md:my-12">
                           <img src="/images/story2.jpg" alt="子供との未来" className="w-full rounded-2xl" />
                           <figcaption className="text-center text-xs text-ink/60 mt-2 px-2">僕が創る未来は、君の未来に繋がっている。</figcaption>
                        </figure>
                        <p className="mb-4">
                          嬉しいことに、長男の入院頻度は少しずつ減ってきています。それでも、彼の未来はまだ不透明です。身体的な問題から、僕がしてきたような肉体労働は不可能でしょう。
                        </p>
                        <p className="mb-4">
                          だからこそ、僕は挑戦し続けます。父親として、彼の未来に「こんな生き方もあるんだ」という選択肢を、僕自身の背中で示すために。そして何よりも、心の底からワクワクする、僕自身の人生を取り戻すために。
                        </p>
                        <p className="mb-4">
                          リソースに限りがあり、全力でのコミットは難しい。でも、今まさによちよち歩きを始めた長男と同じように、僕もクリエイターとして、一歩一歩、昨日より少しだけ前に進んでいきます。
                        </p>
                         <div className="relative my-8 md:my-12">
                          <div className="absolute inset-0 bg-watercolor-pink/10 rounded-2xl blur-xl"></div>
                          <p className="relative font-black text-center text-lg md:text-2xl my-6 md:my-8 font-serif-jp text-ink py-6 md:py-8 px-4 md:px-6" style={{ textShadow: '0 0 25px rgba(255,255,255,0.9), 0 0 50px rgba(255,255,255,0.7), 0 6px 12px rgba(255,255,255,0.5)', filter: 'brightness(1.3) contrast(1.4)', lineHeight: '1.8', fontWeight: '900' }}>
                            BGLに出会い、挑戦という希望に触れ、僕は救われました。まだ形に残る成果は小さいですが、ドン底から這い上がる活力と勇気をいただきました。どんな逆境だって前を向いて本気で歩いていれば必ず幸せな明日はやってきます。この物語が、今、かつての僕と同じように暗闇の中にいる誰かの、小さな灯火になることを願って。
                          </p>
                        </div>
                    </section>
                  </ScrollReveal>

                  <ScrollReveal delay={1000}>
                    <section id="son-details" className="watercolor-card bg-paper p-4 md:p-8 rounded-2xl shadow-watercolor mt-8 md:mt-16">
                        <h4 className="text-base md:text-lg font-serif-jp font-bold text-ink mb-3 md:mb-4">参考：長男の病状について</h4>
                        <p className="text-xs md:text-sm text-ink/80 leading-relaxed">
                          長男はX染色体の一部に欠損があり、それが骨系への症状として現れています。具体的には鼻の低形成、頚椎の異形成不全などがあり、骨を作る設計図の異常により骨格に異常が出る、という状態です。合併症として心臓疾患、難聴、発達・摂食障害の可能性も指摘されています。これまでの入院はいずれも鼻腔・気管狭窄によるもので、普段から気道が狭いため、風邪などで呼吸困難に陥ります。自宅の寝室では、ネーザルハイフローという人工呼吸機を常に装着しています。
                        </p>
                    </section>
                  </ScrollReveal>

                </div>
            </div>

          </div>
        </Layout>
      </section>
  );
};

export default StorySection;