import * as types from '@/store/action-types'
import { AnyAction } from 'redux';
import {UserState} from '@/typings/state'

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