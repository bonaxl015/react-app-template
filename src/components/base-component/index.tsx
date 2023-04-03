import * as React from 'react'
import produce from 'immer'

/**
 *
 *
 * @class BaseComponent
 * @extends {React.Component<P, S>}
 * @template P
 * @template S
 */

/**
 * UI basic components
 */
export default class BaseComponent<P = {}, S = {}> extends React.PureComponent<
  P,
  S
> {
  constructor(props) {
    super(props)
    console.log('BaseComponent')
  }

  /**
   * Rewrite the setState method
   * @param obj
   * @param callBack
   */
  setState<K extends keyof S>(
    obj:
      | ((prevState: Readonly<S>, props: Readonly<P>) => Pick<S, K> | S | null)
      | (Pick<S, K> | S | null),
    callBack?: () => void
  ): void {
    let fun
    if (obj.constructor === Object) {
      fun = draft => {
        const keys = Object.keys(obj)
        // eslint-disable-next-line
        keys.map(item => {
          // eslint-disable-next-line
          draft[item] = obj[item]
        })
      }
    } else if (obj.constructor === Function) {
      fun = obj
    }

    super.setState(produce(fun), () => {
      if (callBack) {
        callBack()
      }
    })
  }

  componentDidCatch(error, info) {
    console.log('error', this.constructor.name, 'error', error, info)
    // You can also report the error log to the server
    return false
  }

  render() {
    return <div />
  }
}
