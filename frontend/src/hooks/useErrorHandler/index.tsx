import React  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as commonActions from 'store/common/actions';
import * as commonSelector from 'store/common/selectors'

const dispatch = useDispatch();

interface Error {
    code: number;
    text: string;
}
const useErrorHandler = () => {
    const setError = (error:Error) => {
        dispatch(commonActions.setAxiosErrorHandler(error))
    }
    return [setError]
}

export default useErrorHandler