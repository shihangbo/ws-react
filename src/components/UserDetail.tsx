import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Params{
  id:string
}
type Props = RouteComponentProps<Params>
function UserDetail(props:Props) {
  return (<div>
    ID：{props.match.params.id}
  </div>)
}

export default UserDetail