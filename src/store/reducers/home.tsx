import { AnyAction } from 'redux';
import {HomeState} from '@/typings/state'
import * as types from '@/store/action-types'
let initialState:HomeState = {
  currentCategory:'all'
}
export default function(state:HomeState = initialState, action:AnyAction):HomeState {
  switch(action.type){
    case types.SET_CURRENT_CATEGORY:
      return {...state, currentCategory:action.payload}
    default:
      return state
  }
}