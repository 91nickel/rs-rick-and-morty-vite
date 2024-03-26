import axios from 'axios'
import { toast } from "react-toastify"

const http = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
})

http.interceptors.request.use(
    async function (config: any) {
        // console.log('http.service.request.interceptor.onRejected', )
        return config
    },
    function (error: any) {
        // console.log('http.service.request.interceptor.onRejected', )
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    function (response: any) {
        // console.log('http.service.response.interceptor.onFulfilled')
        return response
    },
    function (error: any) {
        // console.log('http.service.response.interceptor.onRejected')
        const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500
        if (!expectedErrors) {
            console.error(error)
            console.error(error?.response?.data?.error)
            toast.error('Something went wrong. Try later...')
        }
        return Promise.reject(error)
    })

const service = {
    get: http.get,
    post: http.post,
    put: http.put,
    patch: http.patch,
    delete: http.delete,
}

export default service
