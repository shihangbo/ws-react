import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2';

// 让组件和仓库 进行链接
import {Provider} from 'react-redux'
import store from './store'

// 增加路由 连接仓库 连接reducer 组件配置路由
import {Route,Redirect,Switch} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import history from './history'

// 引入组件库antd
import 'antd/dist/antd.css'
import {Layout} from 'antd'
import NavBar from './components/NavBar'
let {Content} = Layout

// 绘制User组件
import User from './components/User'

// 绘制 HelloWork 组件
import HelloWorld from './components/HelloWorld/HelloWorld'
import './components/HelloWorld/helloWorld.css'

// 二期项目
import {ConfigProvider} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import './assets/style/common.less'
import Home from './routes/Home' // routes路由组件
import Mine from './routes/Mine'
import Profile from './routes/Profile'

let root = document.getElementById('root')
let elem = <Provider store={store}>
  <ConnectedRouter history={history}>
    <ConfigProvider locale={zh_CN}>
      <main className="main-container">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/mine" exact component={Mine}></Route>
          <Route path="/profile" exact component={Profile}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </main>
    </ConfigProvider>
    {/* <Layout>
      <NavBar />
      <Content style={{padding:"20px"}}>
        <Switch>
          <Route path="/counter1" component={Counter1}></Route>
          <Route path="/counter2" component={Counter2}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/helloWorld" component={HelloWorld}></Route>
          <Redirect to="/counter1"></Redirect>
        </Switch>
      </Content>
    </Layout> */}
  </ConnectedRouter>
</Provider>

ReactDOM.render(elem,root)