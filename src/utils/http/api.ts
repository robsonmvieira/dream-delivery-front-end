import axios from 'axios';


const service = axios.create({
  baseURL: 'http://localhost:8000/api/'
}) 

export default service