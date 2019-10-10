# WebアプリケーションをHerokuにデプロイする

## Herokuとは

[Heroku](https://jp.heroku.com/)

- Paas(Platform as a Service)の一種
- OSや各実行環境が構築されたクラウド上のサーバーを提供するサービス
- Webアプリをそのままデプロイしてサービスを開始することが可能
- [価格](https://jp.heroku.com/pricing)
  - 無料プランの場合、月当たりの実行時間や連続実行時間に制約がある
  - 月当たり550時間/dyno
  - 30分間アクセスがない場合スリープする
    - 再度アクセスすることで再起動する
  - dyno：Herokuプラットフォーム上のLinuxコンテナ

## Heroku環境構築

1. GitHubと連携させる場合
   1. Herokuアプリケーション作成後にDeploy→Deployment methodでGitHubを選択
2. 自分でDeployする場合（Heroku CLIを使用する場合）
   1. [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)の実行環境を構築する
      1. [Gitをインストール](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)する
      2. [Node.js](https://nodejs.org/ja/)をインストールする
      3. Heroku CLIをインストールする
      4. `heroku --version`を実行してインストールされていることを確認する
      5. `heroku login`を実行してherokuへのログインを行う
         1. ブラウザが起動するので、ブラウザからログインを承認する

## デプロイ手順

1. GitHubと連携させる場合
   1. GitHubへのpushと連動して自動的にHeroku側でビルド・デプロイが実行される
2. 自分でDeployする場合（Heroku CLIを使用する場合）
   1. 前提：Gitリポジトリへのコミットが完了している
   2. .gitignoreでdistフォルダを除外している場合は、これを解除する
      1. herokuにデプロイしたdistフォルダを保持するため
   3. `heroku login`を実行してherokuへのログインを行う
   4. `heroku create <app_name>`を実行してHerokuアプリケーションを作成する
   5. `heroku git:remote --app <app_name>`を実行してGitのリモートリポジトリにherokuを追加
   6. `git push heroku master`を実行してherokuにpushする
   7. herokuで自動的にビルド・デプロイが実行される