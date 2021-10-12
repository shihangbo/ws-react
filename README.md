## react + ts


### 创建项目

#### 良好的commit
```js
// 1. commitizen安装依赖包
npm i commitizen validate-commit-msg conve
ntional-changelog-cli -D
// 生成配置文件
npx commitizen init cz-conventional-changelog --save --save-exact

// 2.husky 可以把validate-commit-msg 作为一个 githook 来验证提交信息
npm i husky -D
"husky":{
  "hooks":{
    "commit-msg":"validate-commit-msg"
  }
}
```

#### ts以及loader安装
```js
// 3.ts 安装
npm i typescript -g
npm i -D typescript ts-loader source-map-loader
// ts 初始化配置
tsc init
```

#### react安装
```js
npm i -S react react-dom @types/react @types/react-dom
```

#### reactRouter安装
```js
npm i -S react-router-dom @types/react-router-dom connected-react-router
```

#### antd安装
```js
npm i -S antd
npm i style-loader css-loader -D
```

#### axios安装
```js
npm i -S axios
```

#### webpack以及插件安装
```js
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin hoist-non-react-statics
```

#### redux以及依赖安装
```js
npm i -S redux react-redux @types/react-redux redux-thunk redux-logger @types/redux-logger
```

#### 代码规范 eslint安装
```js
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

#### 持续集成
```js
Travis CI 持续集成服务，他绑定github上的项目，只要有新代码，就回自动抓取，然后提供一个运行环境，执行测试，完成构建，部署到服务器

WS_TOKEN: xxx
WS_REF: xxx

官网：travis-ci.com

1.登录github创建项目获取WS_REF，项目配置 .travis.yml，生成WS_TOKEN
2.进入官网：travis-ci.com，同步仓库
```