import { createSelector } from 'reselect'
import { RootState } from '../index'

const getMarketState = (state: RootState) => state.marketState

export const getMarketItemList = createSelector(getMarketState, state => state.products);