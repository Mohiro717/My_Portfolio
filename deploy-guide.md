# 🚀 本番デプロイガイド

## Vercelデプロイ手順

### 1. GitHubにプッシュ

```bash
# 変更をコミット
git add .
git commit -m "feat: 全機能統合完了 - Sanity CMS, SEO, PWA対応"
git push origin master
```

### 2. Vercelアカウント作成・連携

1. **[vercel.com](https://vercel.com/)** にアクセス
2. **「Start Deploying」** → **「Continue with GitHub」**
3. GitHubアカウントで認証

### 3. プロジェクトインポート

1. **「New Project」** をクリック
2. **GitHubリポジトリを選択**: `My_Portfolio`
3. **「Import」** をクリック

### 4. デプロイ設定

#### Build Settings (自動検出される)
- **Framework Preset**: `Vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

#### 環境変数設定
以下の環境変数を追加：

```env
VITE_SANITY_PROJECT_ID=your_actual_project_id
VITE_SANITY_DATASET=production
GEMINI_API_KEY=your_gemini_api_key
```

### 5. デプロイ実行

1. **「Deploy」** をクリック
2. ビルド完了まで約2-3分待機
3. デプロイ完了後、URLが発行される

### 6. カスタムドメイン設定（オプション）

1. Vercel Dashboard → **「Domains」**
2. 独自ドメインを追加
3. DNS設定を更新

## デプロイ後の確認項目

### ✅ 機能動作確認

1. **基本表示**: ホームページが正常に表示される
2. **PWA機能**: アプリインストールプロンプトが表示される
3. **SEO**: ページソースでメタタグが正しく設定されている
4. **パフォーマンス**: 画像遅延読み込みが動作する
5. **ブログ機能**: 検索・フィルタリングが動作する

### 🔧 Lighthouse監査

デプロイ後、Chrome DevToolsでLighthouse監査を実行：

- **Performance**: 90+ 目標
- **Accessibility**: 95+ 目標  
- **Best Practices**: 95+ 目標
- **SEO**: 95+ 目標
- **PWA**: すべてのチェックが緑

### 📊 Analytics設定

#### Google Analytics 4 設定

1. [analytics.google.com](https://analytics.google.com/) でプロパティ作成
2. 測定IDを取得
3. 以下を `index.html` の `<head>` に追加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Google Search Console設定

### 1. Search Console登録

1. [search.google.com/search-console](https://search.google.com/search-console) にアクセス
2. **「プロパティを追加」** → **「URLプレフィックス」**
3. デプロイ済みのURL（例: `https://mohiro-portfolio.vercel.app`）を入力

### 2. 所有権確認

**HTMLファイル方式**が簡単：

1. 指定されたHTMLファイルをダウンロード
2. `public/` フォルダにアップロード  
3. 再デプロイ
4. **「確認」** をクリック

### 3. サイトマップ送信

1. **「サイトマップ」** セクション
2. **「新しいサイトマップの追加」**
3. `sitemap.xml` を入力して送信

### 4. URL検査

1. **「URL検査」** でメインページをテスト
2. **「インデックス登録をリクエスト」** を実行
3. 主要ページ（ブログ投稿など）も同様に実行

## 監視とメンテナンス

### 自動デプロイ設定

- GitHubプッシュで自動デプロイ（設定済み）
- プルリクエストでプレビューデプロイ

### パフォーマンス監視

1. **Vercel Analytics**: 自動で有効化
2. **Google PageSpeed Insights**: 定期チェック
3. **Core Web Vitals**: Search Consoleで監視

### セキュリティ更新

```bash
# 依存関係の定期更新
npm audit
npm update
```

## トラブルシューティング

### よくある問題

1. **404エラー**: `vercel.json` の rewrite 設定確認
2. **環境変数エラー**: Vercel Dashboardで設定確認
3. **ビルドエラー**: ローカルで `npm run build` テスト

### サポートリンク

- [Vercel Documentation](https://vercel.com/docs)
- [Google Search Console Help](https://support.google.com/webmasters)

---

## 🎯 デプロイ完了後の次のアクション

1. **Sanity CMS**: データ登録とコンテンツ作成
2. **SEO最適化**: キーワード分析・コンテンツ改善
3. **パフォーマンス監視**: 定期的な測定・改善
4. **コンテンツ更新**: ブログ投稿・ポートフォリオ追加