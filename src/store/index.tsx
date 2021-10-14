import {createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers'
import promise from 'redux-promise'
import logger from 'redux-logger'

// 路由连接仓库
import {routerMiddleware} from 'connected-react-router'
import history from '../history';

let storeEnhancer:StoreEnhancer = applyMiddleware(promise, thunk, logger, routerMiddleware(history))
let storeEnhancerStoreCreate:StoreEnhancerStoreCreator = storeEnhancer(createStore)
let store:Store = storeEnhancerStoreCreate(rootReducers)

export default store