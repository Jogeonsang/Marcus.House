import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import browserHistory from 'lib/history'

import MarketService, { MarketState } from './market/reducers'
import CommonService, { CommonState } from './common/reducers'


import MarketSaga from './market/sagas'

export interface RootState {
    router: RouterState;
    marketState: MarketState;
    commonState: CommonState;
}

const rootReducer = combineReducers({
    router: connectRouter(browserHistory),
    marketState: MarketService,
    commonState: CommonService
})

const sagaMiddleware = createSagaMiddleware()

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) ||
    compose

const index = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory))),
)

function* rootSaga() {
    yield all([
        MarketSaga(),
    ])
}
sagaMiddleware.run(rootSaga)

export default index
