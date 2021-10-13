import * as React from 'react'
import Square from './Square'
import { withRouter, RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps
class Board extends React.Component<Props> {
  renderSquare(i:number) {
    return <Square value={i} />;
  }

  render() {
    const status:string = 'Next player: X'

    return (<div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>)
  }
}

export default withRouter(Board)