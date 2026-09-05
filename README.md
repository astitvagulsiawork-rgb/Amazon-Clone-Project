<img width="1920" height="1200" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/71957cc8-a5c1-4584-a44d-959139e229ed" />
<img width="1920" height="1200" alt="Screenshot (52)" src="https://github.com/user-attachments/assets/cb52e638-5a42-4510-a39d-770b5a061967" />
# Amazon Clone (Frontend-Only Demo)

**[English](#english) | [日本語](#japanese)**

<a id="english"></a>

A multi-page e-commerce site inspired by Amazon's UI, built with **plain HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools, no backend. Cart and order data are stored entirely in the browser (`localStorage`), so the whole thing runs by just opening `index.html`.

> **This is a portfolio project, not a real store.** No real products are sold, no payments are processed, and there is no real account system. It exists to demonstrate frontend development skills: multi-page layout, DOM manipulation, state management with `localStorage`, and responsive design.

## Features

- **17 linked pages**: Home, Category, Product detail, Cart, Checkout, Order confirmation, Search, Sign in, Account, Orders, Today's Deals, Gift Cards, Sell, Registry, Prime Video, Customer Service, and a shared template for informational/legal pages
- **36-item product catalog** (32 products across 8 categories + 4 gift cards) driven by a single JS data file
- **Working cart**: add, update quantity, remove, and a live cart-count badge — all persisted in `localStorage`
- **Full checkout flow**: Cart → Checkout → Order Confirmation → appears on the Orders page
- **Search** across the whole catalog, plus category filtering
- **Category page**: sort by price/rating, filter to deals only
- **Product page**: hover-to-zoom image, related products
- **A working "All" navigation menu** with every category and quick link
- Fully responsive down to mobile widths

## Tech Stack

- HTML5, CSS3 (Flexbox + Grid, no preprocessor)
- Vanilla JavaScript (ES6+, no framework)
- `localStorage` for cart/order persistence — no backend or database

## Running it locally

No build step and no dependencies. Either:

1. Open `index.html` directly in a browser, **or**
2. Serve the folder with any static server, e.g.:
   ```bash
   npx serve .
   # or
   python3 -m http.server 5500
   ```

## Project Structure

```
Amazon Project/
├── index.html              # Home page
├── category.html            # Category listing (?cat=slug)
├── product.html              # Product detail (?id=productId)
├── cart.html, checkout.html, order-confirmation.html
├── search.html, signin.html, account.html, orders.html
├── deals.html, gift-cards.html, sell.html, registry.html,
│   prime-video.html, customer-service.html, info.html
├── products-data.js          # Product catalog + helper functions
├── cart.js                   # Cart/order logic (localStorage)
├── style.css                 # Single shared stylesheet
└── *.jpg / *.png             # Static images (logo, banner, category art)
```

## Known Limitations (by design)

- No backend — nothing is actually purchased, shipped, or charged
- No real authentication — the sign-in form is a UI-only simulation
- Product photos are placeholder/stock-style images tagged by keyword, not real product photography
- Data lives in the browser only — clearing site data resets the cart and order history

## License

This project is for portfolio/demo purposes. Not affiliated with, endorsed by, or connected to Amazon.com, Inc.

---

<a id="japanese"></a>

# Amazonクローン（フロントエンドのみのデモ）

**[English](#english) | [日本語](#japanese)**

Amazonの見た目を参考にした、複数ページ構成のECサイトです。**HTML・CSS・素のJavaScriptのみ**で構築されており、フレームワークやビルドツール、バックエンドは一切使用していません。カートと注文データはすべてブラウザ内（`localStorage`）に保存されるため、`index.html` を開くだけで動作します。

> **本プロジェクトはポートフォリオ用のデモであり、実際の店舗ではありません。** 実際の商品販売や決済処理、アカウント機能は一切ありません。複数ページ構成のレイアウト、DOM操作、`localStorage` を用いた状態管理、レスポンシブデザインといった、フロントエンド開発のスキルを示すことを目的として作成しました。

## 主な機能

- **17ページ構成**：ホーム、カテゴリー、商品詳細、カート、注文手続き、注文完了、検索、サインイン、アカウント、注文履歴、本日のセール、ギフトカード、出品、ほしい物リスト、Prime Video、カスタマーサービス、および情報・規約系ページ共通のテンプレート
- **36商品のカタログ**（8カテゴリー×32商品＋ギフトカード4種）を1つのJSデータファイルで管理
- **実際に動くカート機能**：商品の追加・数量変更・削除、リアルタイムのカート件数バッジ表示（すべて `localStorage` に保存）
- **注文フロー一式**：カート → 注文手続き → 注文完了 → 注文履歴ページに反映
- カタログ全体を対象にした**検索機能**、カテゴリー絞り込み
- **カテゴリーページ**：価格・評価順の並び替え、セール品のみの絞り込み
- **商品詳細ページ**：画像のホバーズーム、関連商品の表示
- 全カテゴリーとクイックリンクをまとめた、**実際に機能する「All」メニュー**
- スマートフォン幅まで対応した、フルレスポンシブデザイン

## 使用技術

- HTML5、CSS3（Flexbox・Gridを使用、プリプロセッサなし）
- 素のJavaScript（ES6以降、フレームワーク不使用）
- カート・注文データの永続化には `localStorage` を使用 — バックエンド・データベースなし

## ローカルでの動作確認方法

ビルド作業や依存パッケージは不要です。以下のいずれかの方法で動作します。

1. `index.html` をブラウザで直接開く、**または**
2. 任意の静的サーバーでフォルダを配信する（例）：
   ```bash
   npx serve .
   # または
   python3 -m http.server 5500
   ```

## フォルダ構成

```
Amazon Project/
├── index.html              # ホームページ
├── category.html            # カテゴリー一覧（?cat=スラッグ）
├── product.html              # 商品詳細（?id=商品ID）
├── cart.html, checkout.html, order-confirmation.html
├── search.html, signin.html, account.html, orders.html
├── deals.html, gift-cards.html, sell.html, registry.html,
│   prime-video.html, customer-service.html, info.html
├── products-data.js          # 商品カタログ・ヘルパー関数
├── cart.js                   # カート・注文ロジック（localStorage）
├── style.css                 # 共通スタイルシート
└── *.jpg / *.png             # 静的画像（ロゴ、バナー、カテゴリー画像）
```

## 既知の制限事項（意図的な仕様）

- バックエンドなし — 実際の購入・発送・決済は発生しません
- 実際の認証機能なし — サインインフォームはUIのみのシミュレーションです
- 商品画像はキーワードに基づくプレースホルダー／ストック風の画像であり、実際の商品写真ではありません
- データはブラウザ内にのみ保存されます — サイトデータを消去するとカートと注文履歴もリセットされます

## ライセンス

本プロジェクトはポートフォリオ・デモ用途のみを目的としています。Amazon.com, Inc. とは一切関係がなく、公認・提携もしていません。
