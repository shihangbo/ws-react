import * as React from 'react'
import HomeHeader from './components/HomeHeader';
import './index.less'
import {RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux'
import {CombinedState} from '@/typings/state'
import { Dispatch } from 'redux';
import {HomeState} from '@/typings/state'

let mapStateToProps = (state:CombinedState): HomeState => state.home
let mapDispatchToProps = (dispatch:Dispatch) => ({

})
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
function Home(props: Props){
  return (
    <>
      <HomeHeader />
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)