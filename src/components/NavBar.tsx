import * as React from 'react'
import {Component} from 'react'
import {Link,RouteComponentProps,withRouter} from 'react-router-dom'
import {Layout,Menu} from 'antd'

type Props = RouteComponentProps

class NavBar extends Component<Props> {
  render() {
    return (
      <Layout.Header>
        <Menu
          theme="dark"
          style={{lineHeight:'64px'}}
          mode="horizontal"
          selectedKeys={[this.props.location.pathname]}
        >
          <Menu.Item><Link to="/counter1">Counter1</Link></Menu.Item>
          <Menu.Item><Link to="/counter2">Counter2</Link></Menu.Item>
          <Menu.Item><Link to="/user">用户管理</Link></Menu.Item>
          <Menu.Item><Link to="/helloWorld">新手上路</Link></Menu.Item>
        </Menu>
      </Layout.Header>
    )
  }
}

export default withRouter(NavBar)