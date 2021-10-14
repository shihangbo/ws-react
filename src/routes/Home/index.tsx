import * as React from 'react'
import {PropsWithChildren} from 'react'
import HomeHeader from './components/HomeHeader';
import './index.less'
import {RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'
import {CombinedState} from '@/typings/state'
import { Dispatch } from 'redux';
import {HomeState} from '@/typings/state'
import mapDispatchToProps from '@/store/actions/home'

let mapStateToProps = (state:CombinedState): HomeState => state.home

type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>
function Home(props: Props){
  return (
    <>
      <HomeHeader
        currentCategory={props.currentCategory}
        setCurrentCategory={props.setCurrentCategory}
      />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)