import { createReducer, ActionType } from 'typesafe-actions';
import * as actions from './actions';
import {IProduct} from 'types/product';

export type Actions = ActionType<typeof actions>

export interface MarketState {
    products: {
        data: IProduct[],
        isLoading: boolean
    }
}

const initialState: MarketState = {
    products: {
        data: [],
        isLoading: false,
    }
}

export default createReducer<MarketState, Actions>(initialState)
    .handleAction(actions.fetchMarketItemListAsync.request, (state) => ({...state, products: {...state.products, isLoading: true}}))
    .handleAction(actions.fetchMarketItemListAsync.success, (state,action) => ({...state, products: {data: [...state.products.data, ...action.payload], isLoading: false}}))
