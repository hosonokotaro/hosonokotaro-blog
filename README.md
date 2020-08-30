# React Typescript starter

## はじめに

React プロジェクトのスターターです。create-react-app を使わずに始めたいと思い作りました。

## 使い方

### Install

クローンしたら下記のコマンドを実行してください。

```
// install
npm i

// Local server (localhost:3000) が起動します。localhost:3000をブラウザで開いてください。
npm start
```

ローカルサーバーが立ち上がっている時にスクリプトを変更すると Hot reload します。

### Build

buildする場合は下記のコマンドを実行してください。

```
npm run build
```

distディレクトリ配下にファイルが一式書き出されます。

### Lint, コードフォーマット

Lintやコードフォーマットをする場合は下記のコマンドを実行します。必要に応じて`.eslintrc`と`.prettierrc`の設定ファイルを変更してください。

```
// .eslintrcの設定でlintします。
npm run lint

// .prettierrcの設定でコードフォーマットします。
npm run prettier-format
```

## Buildされるファイルについて

- publicディレクトリ内のすべてのファイルはdistにコピーされます。
- Webpackで処理されたファイルはdistに書き出されます。

※ Webpackで処理されたファイルの書き出しは、publicディレクトリ内のすべてのファイルのコピー後に行われます。

## GitHub Actions について

masterにpull requestを送ると、`npm run build`コマンドが通るかを確認します。（例えば当リポジトリでは、buildが通ったらmasterブランチにマージできるようにマージルールを設定されています）

`.github/workflows/install-build.yml` を必要に応じて適宜変更してください。
