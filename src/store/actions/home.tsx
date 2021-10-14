import { Dispatch } from "redux";
import * as types from '@/store/action-types'
export default {
  setCurrentCategory(currentCategory:string):object {
    return {
      type: types.SET_CURRENT_CATEGORY,
      payload: currentCategory
    }
  }
}