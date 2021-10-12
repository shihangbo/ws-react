import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import counter1,{Counter1State} from './counter1'
import counter2,{Counter2State} from './counter2'

// 连接路由
import {connectRouter,RouterState} from 'connected-react-router'
import history from '../../history';

export interface CombinedState {
  counter1:Counter1State,
  counter2:Counter2State,
  router: RouterState
}
let reducers:ReducersMapObject<CombinedState, AnyAction> = {
  counter1,
  counter2,
  router: connectRouter(history)
}
// 方法2
// interface Reducers {
//   counter1:Counter1State,
//   counter2:Counter2State
// }
// export type CombinedState = {
//   [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
// }
let reducer:Reducer<CombinedState, AnyAction> = combineReducers(reducers)

export default reducer
