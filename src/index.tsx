import * as React from 'react'
import * as ReactDOM from 'react-dom'

// ts类型定义
interface Props {
  className: string
}
interface State {
  id: string
}

let root = document.getElementById('root')
let props:Props = {className:'title'}

// 1. 定义原生组件
// let element = <div className="title">native Element</div>
// let element = React.createElement('div',props,'hello world')

// 2. 函数组件
// function hello(props: Props) {
//   return React.createElement('div',props,'FunctionComponent')
// }
// let element = React.createElement(hello,props)

// 3. 类组件
class Welcome extends React.Component<Props, State> {
  state = {
    id: 'ComponentClass'
  }
  render() {
    return React.createElement('div',props,'ComponentClass')
  }
}
let element = React.createElement(Welcome, props)

ReactDOM.render(element,root)

let a:number = 1
let b:string = '2'
if (true) {
  console.log(a,b)
}