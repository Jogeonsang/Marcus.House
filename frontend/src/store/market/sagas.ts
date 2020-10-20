import { call, put, all, takeEvery } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'

import * as actions from './actions'
import * as request from './requests'

export function* fetchMarketItemListSaga(action: ActionType<typeof actions.fetchMarketItemListAsync.request>) {
    try {
        const data = yield call(request.getProducts, action.payload.category, action.payload.offset, action.payload.limit)
        yield put(actions.fetchMarketItemListAsync.success(data))
    } catch (e) {
        yield put(actions.fetchMarketItemListAsync.failure(e))
    }
}

export default function* () {
    yield all([
        takeEvery(actions.fetchMarketItemListAsync.request, fetchMarketItemListSaga),
    ])
}
