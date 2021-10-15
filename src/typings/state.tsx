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
export interface StoreUser {
  username: string
  email: string
  avatar: string
}
export enum LOGIN_TYPES {
  UN_VALIDATE = 'UN_VALIDATE',
  LOGINED = 'LOGINED',
  UN_LOGINED = 'UN_LOGINED'
}
export interface ProfileState{
  loginState: LOGIN_TYPES
  user: StoreUser | null
  error: string | null
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