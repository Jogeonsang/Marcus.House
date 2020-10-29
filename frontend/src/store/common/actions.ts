import { createAction } from 'typesafe-actions'

export const setAxiosErrorHandler = createAction('SET_AXIOS_ERROR_HANDLER')<any>()
export const clearAxiosErrorHandler = createAction('CLEAR_AXIOS_ERROR_HANDLER')<any>()
