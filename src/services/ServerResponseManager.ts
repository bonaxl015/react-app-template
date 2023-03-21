import { AxiosError, AxiosResponse } from 'axios'

/**
 * For successful request: different response processing for the returned code
 */
class ServerResponseSuccessManager {
  /**
   * Status code parser
   * @param response
   */
  codeParser(response: AxiosResponse) {
    const code = response?.data?.errCode
    const resData = response?.data?.data
    const parser = {
      '10010': () => {
        this.handleCodeIs10010(resData)
      },
      default: () => console.log('code 无法识别')
    }
    return parser[code] ? parser[code]() : parser.default
  }

  /**
   * Response processing with status code 10010
   * @param resData
   */
  handleCodeIs10010(resData) {
    if (resData === 'TOKEN_INVALID') {
      //appEventEmitter.emit("live-token-invalid")
      // setTimeout(() => {
      //     window.location.href = '/login'
      // }, 1000)
    }
  }
}

/**
 * Response processing for request failure
 */
class ServerResponseFailedManager {
  getErrorMessage(error: AxiosError) {
    console.error('error.response==', error.response)
  }
}

export const serverResponseSuccessManager = new ServerResponseSuccessManager()
export const serverResponseFailedManager = new ServerResponseFailedManager()
