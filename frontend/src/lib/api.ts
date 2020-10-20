import axios, {AxiosError} from 'axios'

export interface ApiResponse<T> {
    data: T;
    err?: string;
    message?: 'success' | 'failure'
}

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

api.interceptors.response.use((response) => {
    return response
}, (error: AxiosError) => {
    if (error.response?.data.result === 'failure') {
        //TODO: 예외처리 추가해야함
    }
})

export default api