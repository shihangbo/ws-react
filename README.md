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
npm i -S react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom
```

#### webpack以及插件安装
```js
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin hoist-non-react-statics
```

#### redux以及依赖安装
```js
npm i -S redux react-redux @types/react-redux redux-thunk redux-logger @types/redux-logger
```

#### 依赖安装
```js
npm i -S connected-react-router
```