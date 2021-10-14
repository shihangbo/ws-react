import {Counter1State} from '@/store/reducers/counter1'
import {Counter2State} from '@/store/reducers/counter2'
import { UserState } from '@/store/reducers/user';

// 二期项目
import {HomeState} from '@/store/reducers/home'
import {MineState} from '@/store/reducers/mine'
import {ProfileState} from '@/store/reducers/profile'
import { RouterState } from 'connected-react-router';

export interface CombinedState {
  counter1:Counter1State,
  counter2:Counter2State,
  router: RouterState,
  user: UserState,
  home: HomeState,
  mine: MineState,
  profile: ProfileState
}