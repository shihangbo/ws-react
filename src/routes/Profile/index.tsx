import * as React from 'react'
import {connect} from 'react-redux'
import mapDispatchToProps from '@/store/actions/home';
import { CombinedState, ProfileState, LOGIN_TYPES } from '@/typings/state';
import { RouteComponentProps } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import Nav from '@/components/Nav'


const mapStateToProps = (state:CombinedState):ProfileState => state.profile
type Props = PropsWithChildren<RouteComponentProps&ReturnType<typeof mapStateToProps>&typeof mapDispatchToProps>
function Profile (props: Props){
  let content
  if (props.loginState === LOGIN_TYPES.UN_VALIDATE) {
    content = null
  }
  return (<section>
    <Nav history={props.history}>个人中心</Nav>
    {content}
  </section>)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)