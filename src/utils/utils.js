function throttle(fn, timeout) {
  let flag = true
  return function(...args) {
    if (!flag) {
      return
    }
    flag = false
    setTimeout(() => {
      fn(...args)
      flag = true
    }, timeout)
  }
}

export { throttle }
