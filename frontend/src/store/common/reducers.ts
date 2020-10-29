import { createReducer, ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Actions = ActionType<typeof actions>

export interface CommonState {
    error: any;
}

const initialState: CommonState = {
    error: {
        status: null,
        text: null
    }
}

export default createReducer<CommonState, Actions>(initialState)
    .handleAction(actions.setAxiosErrorHandler, (state, action) => ({...state, error: {status: action.payload.status, text: action.payload.data.message}}))
    .handleAction(actions.clearAxiosErrorHandler, (state) => ({...state, error: {status: null, text: null}}))