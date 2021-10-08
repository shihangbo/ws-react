import * as React from 'react'
import * as ReactDOM from 'react-dom'

let root = document.getElementById('root')
let props = {className:'title'}
let elem = React.createElement('div',props,'hello')
ReactDOM.render(elem,root)