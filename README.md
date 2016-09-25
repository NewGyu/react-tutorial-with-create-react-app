# Reactチュートリアル on create-react-app

これは[Reactチュートリアル](https://facebook.github.io/react/docs/tutorial-ja-JP.html)を[create-react-app](https://github.com/facebookincubator/create-react-app)で生成されるプロジェクト形式に合わせたものです。

## ディレクトリ構成

```
./
├── README.md
├── docker-compose.yaml
├── express-api
│   ├── Dockerfile
│   ├── comments.json
│   ├── package.json
│   └── server.js
└── react-front
    ├── Dockerfile
    ├── README.md
    ├── package.json
    ├── public
    ├── src
    └── test
```

## 実行方法

```shell-session
$ docker-compose up    
```