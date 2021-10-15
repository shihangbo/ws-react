import { CSSProperties } from "react"

export const duration = 1000
export const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}
// 对象的类型声明
export interface TransitionStyles {
  entering: CSSProperties,
  entered: CSSProperties,
  exiting: CSSProperties,
  exited: CSSProperties
}
export const transitionStyles:TransitionStyles = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
}