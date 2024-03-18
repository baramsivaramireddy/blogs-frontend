

import axios from 'axios'


const axiosInstance = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    baseURL: process.env.NEXT_PUBLIC_API,
    validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
    }

})

axiosInstance.interceptors.request.use((config) => {

    let token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
}, (err) => { return Promise.reject(err) })
export default axiosInstance