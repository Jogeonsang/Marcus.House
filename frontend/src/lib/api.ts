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
})

export default api