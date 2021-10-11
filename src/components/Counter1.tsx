import * as React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import { CombinedState } from '@/store/reducers'
import { Counter1State } from '@/store/reducers/counter1'
import * as types from '@/store/action-types';
// 1 编写组件
// 2 连接仓库
let mapStateToProps = (state:CombinedState):Counter1State => state.counter1
let mapDispathToProps = (dispatch:Dispatch) => ({
  add() {
    dispatch({type: types.ADD1})
  }
})

type Props = ReturnType<typeof mapStateToProps>&ReturnType<typeof mapDispathToProps>
class Counter1 extends Component<Props> {
  render() {
    return (<div>
      <p>{this.props.number}</p>
      <button onClick={()=>this.props.add()}>加一</button>
    </div>)
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Counter1)