import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c404a2ca41f2ba85f1724c23b0b5e9d6',
    language: 'pt-BR',
    page: 1
  }
})

export default api
