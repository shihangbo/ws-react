import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface CustomProps{
  value:number|string
}
type Props = RouteComponentProps&CustomProps
class Square extends React.Component<Props> {
  constructor(props:Props) {
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    return (<button
      className="square"
      onClick={() => this.setState({value:"X"})}>
      {this.props.value}
    </button>)
  }
}

export default withRouter(Square)