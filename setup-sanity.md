# Sanity CMS セットアップガイド

## 1. Sanityプロジェクト作成

### アカウント作成
1. [sanity.io](https://www.sanity.io/) にアクセス
2. 「Get started for free」でGoogleアカウント連携

### プロジェクト初期化
```bash
# グローバルCLIインストール（完了済み）
npm install -g @sanity/cli

# ログイン
sanity login

# プロジェクトディレクトリ作成
mkdir mohiro-blog
cd mohiro-blog

# 初期化
sanity init
```

### 設定値
- **Project name**: `mohiro-portfolio-blog`
- **Dataset**: `production` (デフォルト)
- **Template**: `Clean project`

## 2. スキーマ設定

### 既存スキーマをコピー
以下のファイルを `mohiro-blog/schemas/` にコピー：

- `post.ts`
- `author.ts`  
- `category.ts`
- `blockContent.ts`
- `seo.ts`
- `index.ts`

### sanity.config.ts を更新
ルートの `sanity.config.ts` を既存のものと置き換える

## 3. 環境変数設定

プロジェクト作成後に表示される情報をメモ：

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

これらを `.env.local` に設定

## 4. Studio起動

```bash
cd mohiro-blog
npm install
npm run dev
```

ブラウザで `http://localhost:3333` にアクセスして管理画面を確認

## 5. 初期データ登録

Studioで以下を作成：

### 著者情報
1. 「著者」セクションで新規作成
2. 名前: `Mohiro`
3. 自己紹介文を入力
4. プロフィール画像をアップロード

### カテゴリ
1. 「カテゴリ」セクションで以下を作成：
   - UEFN学習
   - 挑戦の記録  
   - ゲーム開発
   - 日記

### ブログ投稿
1. 「ブログ投稿」でテスト記事を作成
2. 必須項目を入力
3. 公開状態に設定

## 6. プロジェクト統合

### .env.local 更新
```env
VITE_SANITY_PROJECT_ID=actual_project_id
VITE_SANITY_DATASET=production
```

### テスト
```bash
npm run dev
```

Sanityモードが有効になり、管理画面のデータが表示されることを確認

## 完了チェックリスト

- [ ] Sanityアカウント作成完了
- [ ] プロジェクト作成完了
- [ ] スキーマ設定完了
- [ ] Studio起動成功
- [ ] 初期データ登録完了
- [ ] 環境変数設定完了
- [ ] ローカル動作確認完了

## トラブルシューティング

### よくある問題
1. **認証エラー**: `sanity login` を再実行
2. **スキーマエラー**: ファイルパスと型定義を確認
3. **データが表示されない**: 環境変数とプロジェクトIDを確認

### サポート
- [Sanity Documentation](https://www.sanity.io/docs)
- [Community](https://www.sanity.io/community)