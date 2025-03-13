# Vercel AI SDK、Cloudflare、Next.js、Stripeを使用したデモチャットエージェント

このデモアプリケーションは、Vercel AI SDK、Cloudflare、Next.js、および使用量ベースの課金のためのStripeを使って構築されたAIチャットエージェントを紹介します。アプリケーションには2つのチャットインターフェースがあります：

1. Anthropicのクラウドモデルを使用したシンプルなAIチャット
2. 請求書作成などのStripe操作を支援するStripeエージェントチャット

## デモ

https://github.com/user-attachments/assets/cadc399d-fa72-43a3-8c71-354d18f726dd

## 機能

- AI モデルとの対話のためのVercel AI SDKの統合
- Next on Pagesを使用したCloudflareデプロイメントのサポート
- 使用量ベースの課金のためのStripe統合
- 異なる機能を持つ2つのチャットインターフェース
- 最適なパフォーマンスのためのEdgeランタイム

## 技術スタック

- **フレームワーク**: App Routerを使用したNext.js 15
- **AI**: Vercel AI SDK、Anthropic Claude
- **デプロイメント**: Cloudflare Pages
- **課金**: Stripe使用量ベース課金
- **UI**: React 19、Tailwind CSS

## はじめに

### 前提条件

- Node.js（最新のLTSバージョン推奨）
- APIキーを持つStripeアカウント
- Anthropic APIキー
- Cloudflareアカウント（デプロイメント用）

### インストール

1. リポジトリをクローンします：
   ```bash
   git clone [repo-url]
   cd demo-cf-vercel-ai-with-stripe
   ```

2. 依存関係をインストールします：
   ```bash
   npm install
   ```

3. 環境変数を設定します：
   ```bash
   cp .dev.vars.example .dev.vars
   ```

4. `.dev.vars`を編集してAPIキーを追加します：
   ```
   STRIPE_SECRET_API_KEY=sk_test_xxx
   STRIPE_METER_NAME_INPUT=alpaca_ai_tokens
   STRIPE_METER_NAME_OUTPUT=alpaca_ai_tokens
   STRIPE_CUSTOMER_ID=cus_xxxxx
   CLAUDE_API_KEY=sk-ant-api03-xxxxx
   ```

### 開発

開発サーバーを実行します：
```bash
npm run dev
```

### Cloudflareでのプレビュー

Cloudflare Pagesでアプリケーションをプレビューします：
```bash
npm run preview
```

### デプロイメント

Cloudflare Pagesにデプロイします：
```bash
npm run deploy
```

## 使用方法

このアプリケーションは2つのチャットインターフェースを提供します：

1. **シンプルなAIチャット**：Claude AIモデルを使用した基本的なチャットインターフェース。
2. **Stripeエージェントチャット**：請求書、顧客、商品の作成などの操作を実行するためにStripe APIと対話できるAIエージェント。

チャット入力フィールドにプロンプトを入力して、AIからの応答を受け取ることができます。

## ライセンス

[MIT](https://choosealicense.com/licenses/mit/)

## 謝辞

- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Next.js](https://nextjs.org/)
- [Stripe API](https://stripe.com/docs/api)
- [Anthropic Claude](https://www.anthropic.com/claude) 