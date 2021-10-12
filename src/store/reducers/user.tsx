import * as types from '@/store/action-types'
import {User} from '@/typings/api'
import { AnyAction } from 'redux';

export interface UserState {
  list: Array<User>
}
let initialState:UserState = {
  list: []
}
function UserStore(state:UserState=initialState,action:AnyAction) {
  switch(action.type) {
    case types.SET_USER:
      return {...state, list: action.payload}
    default:
      return state
  }
}

export default UserStore