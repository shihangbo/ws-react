import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux';
import counter1 from './counter1'
import counter2 from './counter2'

// 连接路由
import {connectRouter} from 'connected-react-router'
import history from '../../history';

// 增加reducer
import user from './user';

// 二期项目
import home from './home'
import mine from './mine'
import profile from './profile'
import {CombinedState} from '@/typings/state'

let reducers:ReducersMapObject<CombinedState, AnyAction> = {
  counter1,
  counter2,
  router: connectRouter(history),
  user,
  home,
  mine,
  profile
}
// 方法2
// interface Reducers {
//   counter1:Counter1State,
//   counter2:Counter2State
// }
// export type CombinedState = {
//   [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
// }
let rootReducer:Reducer<CombinedState, AnyAction> = combineReducers<CombinedState>(reducers)

export default rootReducer
