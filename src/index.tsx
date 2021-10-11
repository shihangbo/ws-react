import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2';

// 让组件和仓库 进行链接
import {Provider} from 'react-redux'
import store from './store'

let root = document.getElementById('root')
let elem = <Provider store={store}>
  <Counter1 />
  <Counter2 />
</Provider>

ReactDOM.render(elem,root)