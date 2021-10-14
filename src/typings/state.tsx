// 二期项目
import { RouterState } from 'connected-react-router';
import {User} from './api'

export interface Counter1State {
  number:number
}
export interface Counter2State {
  number:number
}
export interface UserState {
  list: Array<User>
}

// 二期项目
export interface HomeState{
  currentCategory:string
}
export interface MineState{

}
export interface ProfileState{

}

export interface CombinedState {
  counter1:Counter1State,
  counter2:Counter2State,
  router: RouterState,
  user: UserState,
  home: HomeState,
  mine: MineState,
  profile: ProfileState
}