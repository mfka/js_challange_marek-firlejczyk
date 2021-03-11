import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
import HttpStatusCode from '../types/HttpStatusCode'

export const isHttpStatusValid = (status: number) =>
  status >= HttpStatusCode.OK && status < HttpStatusCode.MULTIPLE_CHOICES

const axiosInstance = axios.create({
  baseURL: 'https://api.musement.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: isHttpStatusValid,
})

export default applyCaseMiddleware(axiosInstance)
