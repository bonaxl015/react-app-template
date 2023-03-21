import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance
} from 'axios'
import {
  serverResponseFailedManager,
  serverResponseSuccessManager
} from '@/services/ServerResponseManager'

const axiosInstance: AxiosInstance = axios.create({
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

//axiosInstance.defaults.headers.common.platform = "PC";

/**
 * request 拦截器
 */
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // config.url = host + config.url;
    if (!navigator.onLine) {
      //toast("网络连接已断开，请稍后重试");
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

/**
 * response
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code === 200) {
      return response
    }
    serverResponseSuccessManager.codeParser(response)
  },
  (error: AxiosError) => {
    serverResponseFailedManager.getErrorMessage(error)
    return Promise.reject(error.response)
  }
)

export function setAuthorization(token) {
  console.log('request:setAuthorization', token)
  axiosInstance.defaults.headers.common.Authorization = token
}

export function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return axiosInstance
    .get<T>(url, config)
    .then((res: AxiosResponse) => res && res.data)
}

export function post<T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> {
  return axiosInstance
    .post<T>(url, data, config)
    .then((res: AxiosResponse) => res.data)
}

export function getBlob(url: string): Promise<Blob> {
  return axios
    .get(url, {
      responseType: 'blob'
    })
    .then(res => res.data)
}

export default axiosInstance
