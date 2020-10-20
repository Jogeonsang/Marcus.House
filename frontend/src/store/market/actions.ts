import { createAction, createAsyncAction } from 'typesafe-actions'
import {IProduct} from "types/product";

export const fetchMarketItemListAsync = createAsyncAction(
    'FETCH_MARKET_ITEM_LIST_REQUEST',
    'FETCH_MARKET_ITEM_LIST_SUCCESS',
    'FETCH_MARKET_ITEM_LIST_FAILURE'
)<any, IProduct[] ,any>()
