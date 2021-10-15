
import * as React from 'react'
import {useState} from 'react'
import classnames from 'classnames'
import {createFromIconfontCN} from '@ant-design/icons'
import './index.less'
import {duration,defaultStyle,transitionStyles} from '@/assets/style/reactTransitionGroup'
import { Transition } from 'react-transition-group'

// let logo = require('@/assets/imgs/logo.png')
// require获取的图片，logo.default获取图片地址

import logo from '@/assets/imgs/logo.png'
// import获取的图片，直接使用logo获取地址


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

interface Props {
  currentCategory:string, // 当前分类
  setCurrentCategory: (currentCategory:string) => any
}
function HomeHeader (props: Props) {
  let [isMenuVisble, setIsMenuVisble] = useState(false)
  const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
    let target:HTMLUListElement = event.target as HTMLUListElement
    let category = target.dataset.category
    props.setCurrentCategory(category || '')
    setIsMenuVisble(false)
  }
  return (
    <header className="home-header">
      <div className="logo-header">
        <img src={logo} />
        <IconFont type="icon-tuichu" onClick={() => setIsMenuVisble(!isMenuVisble)}/>
      </div>
      <Transition
        in={isMenuVisble}
        timeout={duration}
      >
        {(state:string) => (
          <ul
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            className="category"
            onClick={setCurrentCategory}
          >
            <li data-category="all" className={classnames({active:props.currentCategory === "all"})}>全部课程</li>
            <li data-category="react" className={classnames({active:props.currentCategory === "react"})}>react</li>
            <li data-category="vue" className={classnames({active:props.currentCategory === "vue"})}>vue</li>
          </ul>
        )}
      </Transition>
      {
        isMenuVisble && (
          <ul className="category" onClick={setCurrentCategory}>
            <li data-category="all" className={classnames({active:props.currentCategory === "all"})}>全部课程</li>
            <li data-category="react" className={classnames({active:props.currentCategory === "react"})}>react</li>
            <li data-category="vue" className={classnames({active:props.currentCategory === "vue"})}>vue</li>
          </ul>
        )
      }
    </header>
  )
}

export default HomeHeader
