import * as React from 'react'
import {createFromIconfontCN} from '@ant-design/icons'
import './index.less'
import { PropsWithChildren } from 'react';
import {History} from 'history';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
type Props = PropsWithChildren<{
  history:History // 不是路由渲染的，history来自父组件
}>
function Nav(props: Props) {
  return (
    <header className="nav-header">
      <IconFont type="icon-tuichu" onClick={()=>props.history.goBack()}/>
      {props.children}
    </header>
  )
}

export default Nav