
import React from 'react';
import type { Post } from '../types';

export const posts: Post[] = [
  {
    slug: 'why-i-chose-uefn',
    title: 'UEFN学習の第一歩：僕がBlenderではなくUEFNを選んだ理由',
    excerpt: '多くの3Dツールがある中で、なぜ僕はUEFNを選んだのか。それは、単なるツール選択以上の、未来への投資でした。僕がUEFNに感じた可能性と、学習を始めるに至った思考のプロセスを綴ります。',
    date: '2024年7月15日',
    imageUrl: 'https://images.unsplash.com/photo-1664574653716-1592a8368143?auto=format&fit=crop&w=800&q=80',
    content: React.createElement('div', { className: "space-y-6" },
      React.createElement('p', null, 'こんにちは、mohiroです。僕のポートフォリオサイトに来てくださり、ありがとうございます。このブログでは、僕がUEFNクリエイターとして歩む道のりを、リアルタイムで綴っていきたいと思います。'),
      React.createElement('p', null, '最初の記事として、僕が数ある3Dツールの中からなぜUEFN（Unreal Editor for Fortnite）を選んだのか、その理由についてお話しします。'),
      React.createElement('h3', { className: "text-xl font-serif-jp font-bold text-ink pt-4" }, '迫られた選択：時間という最も貴重なリソース'),
      React.createElement('p', null, '僕のプロフィールを読んでくださった方はご存知の通り、僕には学習に割ける時間が限られています。日中は家族を支えるための仕事、そして息子のケア。僕が自由に使えるのは、家族が寝静まった後の、深夜のわずかな時間だけです。'),
      React.createElement('p', null, 'そんな状況で新しいスキルを身につけるには、選択と集中が不可欠でした。Blenderのような汎用性の高い3Dモデリングツールを学ぶ道も考えました。しかし、モデリング、テクスチャリング、ライティング...と、一つの作品を完成させるまでに必要な工程の多さに、正直なところ圧倒されてしまったのです。'),
      React.createElement('h3', { className: "text-xl font-serif-jp font-bold text-ink pt-4" }, 'UEFNに見た「ゲームを創る」への最短距離'),
      React.createElement('p', null, 'その点、UEFNは違いました。高品質なアセットが豊富に用意されており、それらを組み合わせることで、アイデアを素早く形にすることができます。僕にとってこれは、まさに革命的でした。'),
      React.createElement('p', null, '重要なのは「ゼロからすべてを創ること」ではなく、「面白いゲーム体験を創ること」。UEFNは、その本質に集中させてくれるプラットフォームだと感じたのです。Verseというプログラミング言語を使えば、独自のロジックやシステムも組み込める。これは、僕がしたかった「挑戦」そのものでした。'),
      React.createElement('p', null, '限られた時間の中で、目に見える成果を出し、モチベーションを維持しながら学習を続ける。UEFNは、そんな僕の無茶な要求に応えてくれる、唯一の選択肢だったのかもしれません。'),
      React.createElement('p', null, 'これから、このブログを通して僕の挑戦の記録を発信していきます。もしあなたが同じように限られた時間の中で何かを目指しているなら、僕の失敗や成功が、何かのヒントになれば嬉しいです。')
    )
  },
  {
    slug: 'struggling-with-verse',
    title: 'Verseと格闘した一週間：初めてのシステム実装で得た3つの学び',
    excerpt: '「コードを書けば、何でもできる」そんな幻想はすぐに打ち砕かれました。Verseとの最初の戦いは、まさにエラーとの対話。僕が暗闇の中で掴んだ、プログラミング学習における大切な気づきを共有します。',
    date: '2024年7月22日',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80',
    content: React.createElement('div', { className: "space-y-6" },
      React.createElement('p', null, 'UEFNの学習を始めて数週間。基本的な操作にも慣れてきた頃、僕は次のステップとしてVerseの学習に足を踏み入れました。独自のゲームシステムを作るには避けては通れない道です。'),
      React.createElement('p', null, 'そして、見事に玉砕しました。今回は、僕がVerseと格闘し、心が折れそうになりながらも得た3つの学びについてお話しします。'),
      React.createElement('h3', { className: "text-xl font-serif-jp font-bold text-ink pt-4" }, '学び1：完璧な理解など存在しない'),
      React.createElement('p', null, '最初、僕は公式ドキュメントを隅から隅まで読み込み、すべてを理解してからコードを書き始めようとしました。しかし、これは間違いでした。読んでも分からない、書いても動かない。時間は無情にも過ぎていきました。'),
      React.createElement('p', null, 'ある時ふと、「とにかく動くものを作ろう」と考えを改めました。他人のコードをコピーし、少しだけ書き換えてみる。エラーが出たら、その意味を調べる。その繰り返しの中で、点と点だった知識が少しずつ線になっていくのを感じました。完璧な理解を待つのではなく、不完全なまま走り出す勇気が大切だと知りました。'),
      React.createElement('h3', { className: "text-xl font-serif-jp font-bold text-ink pt-4" }, '学び2：エラーメッセージは最高の教師'),
      React.createElement('p', null, '赤い文字で表示されるエラーメッセージ。最初は見るのも嫌でした。しかし、ある時から「これはVerseが僕に送ってくれているヒントなんだ」と捉え方を変えました。「この行のここが違うよ」「この型は期待しているものと違うよ」と、丁寧（時には不親切）に教えてくれているのです。エラーを恐れるのではなく、対話するように向き合うことで、解決の糸口が見えるようになりました。'),
      React.createElement('h3', { className: "text-xl font-serif-jp font-bold text-ink pt-4" }, '学び3：人に聞く勇気'),
      React.createElement('p', null, 'これが一番難しかったかもしれません。ドン底だった頃の僕は、人に頼ることが苦手でした。しかし、BGLで出会った仲間たちに勇気を出して質問してみると、驚くほど親身に教えてくれました。一人で数時間悩んでいた問題が、たった5分で解決することも。プライドを守るより、時間を守る方がずっと重要です。頼ることは、弱さではなく、前に進むための戦略なのだと学びました。'),
      React.createElement('p', null, 'Verseとの戦いはまだ始まったばかりです。でも、この3つの学びを胸に、これからも諦めずにコードと向き合っていこうと思います。')
    )
  }
];