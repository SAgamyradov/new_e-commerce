import axios from 'axios'


const api = axios.create({
    baseURL: 'https://yeketak.com.tm/api/'
})


export default api