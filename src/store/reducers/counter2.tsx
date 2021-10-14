import * as types from '../action-types'
import {AnyAction} from 'redux'
import {Counter2State} from '@/typings/state'
let initialState:Counter2State= {
  number: 1
}
export default function (state:Counter2State=initialState, action:AnyAction):Counter2State {
  switch(action.type) {
    case types.ADD2:
      return {number: state.number + 5}
    default:
      return state
  }
}