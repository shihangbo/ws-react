import {createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// 路由连接仓库
import {routerMiddleware} from 'connected-react-router'
import history from '../history';

let storeEnhancer:StoreEnhancer = applyMiddleware(thunk, routerMiddleware(history))
let storeEnhancerStoreCreate:StoreEnhancerStoreCreator = storeEnhancer(createStore)
let store:Store = storeEnhancerStoreCreate(reducers)

export default store