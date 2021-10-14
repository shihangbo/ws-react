import * as types from '../action-types'
import {AnyAction} from 'redux'
import {Counter1State} from '@/typings/state'
let initialState:Counter1State= {
  number: 0
}
export default function (state:Counter1State=initialState, action:AnyAction):Counter1State {
  switch(action.type) {
    case types.ADD1:
      return {number: state.number + 1}
    default:
      return state
  }
}