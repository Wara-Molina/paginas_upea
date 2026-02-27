import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'https://servicioadministrador.upea.bo/api/v2',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

api.interceptors.request.use(config => {
  const token = process.env.VUE_APP_API_TOKEN
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.error('Token API inválido - Revisar VUE_APP_API_TOKEN en .env')
    } else if (error.response?.status === 404) {
      console.warn('Endpoint no encontrado:', error.config.url)
    } else if (error.response?.status >= 500) {
      console.error('Error del servidor API:', error.response.status)
    }
    return Promise.reject(error)
  }
)

export default api