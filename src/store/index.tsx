import {createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
let storeEnhancer:StoreEnhancer = applyMiddleware(thunk)
let storeEnhancerStoreCreate:StoreEnhancerStoreCreator = storeEnhancer(createStore)
let store:Store = storeEnhancerStoreCreate(reducers)

export default store