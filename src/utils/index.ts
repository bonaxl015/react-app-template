export function classNames(...args: any) {
  const classes = []
  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i]
    if (arg) {
      const argType = typeof arg
      if (argType === 'string' || argType === 'number') {
        classes.push((this && this[arg]) || arg)
      } else if (Array.isArray(arg)) {
        classes.push(classNames(...arg))
      } else if (argType === 'object') {
        const hasOwn = {}.hasOwnProperty
        Object.keys(arg).forEach(key => {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push((this && this[key]) || key)
          }
        })
      }
    }
  }
  return classes.join(' ')
}

export function htmlEncode(iStr: string) {
  let sStr = iStr
  sStr = sStr.replace(/&/g, '&amp;')
  sStr = sStr.replace(/>/g, '&gt;')
  sStr = sStr.replace(/</g, '&lt;')
  sStr = sStr.replace(/"/g, '&quot;')
  sStr = sStr.replace(/'/g, '&#39;')
  return sStr
}
