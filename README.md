# HOSONOKOTARO Tech Blog

自分の技術ブログを持ちたいと思い、仕組みから作成しました。

## URL

https://techblog.hosonokotaro.jp/

## 使用したサービス

- Firebase Hosting
- Firebase Cloud Firestore
- Firebase Cloud Storage

## 詳細

Firebase Hosting に React で SPA として Build したデータをアップしました。記事を投稿する管理画面（Google アカウントでログインすることで編集可能となる）で記事を投稿する形になります。

記事のデータは Cloud Firestore に格納され、記事のページを開くとデータを読み出します。画像を投稿する際は、Cloud Storage に格納され、記事本文でリンクすると表示される形になります。
