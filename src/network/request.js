import axios from 'axios'

export function instance1(config) {
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/h8',
    timeout:5000
  })

  return instance(config);
}
