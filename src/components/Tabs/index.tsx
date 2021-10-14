import * as React from 'react'
import {Link,NavLink,withRouter} from 'react-router-dom'
import {createFromIconfontCN} from '@ant-design/icons'
import './index.less'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
function Tabs() {
  return (<footer>
    <NavLink exact to="/"><IconFont type="icon-tuichu"/><span>首页</span></NavLink>
    <NavLink exact to="/mine"><IconFont type="icon-facebook"/><span>购物车</span></NavLink>
    <NavLink exact to="/profile"><IconFont type="icon-twitter"/><span>个人中心</span></NavLink>
  </footer>)
}

export default Tabs