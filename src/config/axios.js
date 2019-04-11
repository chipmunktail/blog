import axios from 'axios'

console.log(process.env.NODE_ENV)

const baseUrl = process.env.NODE_ENV === 'development' ? '/api' : 'http://www.asheicy.com:4000'
axios.defaults.baseURL = baseUrl

export default axios
