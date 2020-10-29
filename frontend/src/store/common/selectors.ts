import { createSelector } from 'reselect'
import { RootState } from '../index'

const getCommonState = (state: RootState) => state.commonState

export const getError = createSelector(getCommonState, state => state.error)