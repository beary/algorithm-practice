/**
 * 获取斐波拉契数列第 n 位的值
 * @param n 斐波拉契数列的位数，必须大于 0
 */
export const fibonacci = (n: number): number => {
  if (n === 1) return 0
  if (n === 2) return 1
  return fibonacci(n - 2) + fibonacci(n - 1)
}

/**
 * 通过缓存前两位值的方式获取斐波拉契数列的第 n 位值
 * @param n 斐波拉契数列的位数，必须大于 0
 */
export const fibonacciWithCache = (n: number) => {
  let p1 = -1
  let p2 = 1
  let curr = 0
  for (let i = 0; i < n; i++) {
    curr = p1 + p2
    p1 = p2
    p2 = curr
  }
  return curr
}

/**
 * 通过栈的方式获取斐波拉契数列的第 n 位值
 * @param n 斐波拉契数列的位数，必须大于 0
 */
export const fibonacciWithStack = (n: number) => {
  if (n === 1) return 0
  if (n === 2) return 1
  const stack = [0, 1]
  for (let i = 3; i <= n; i++) {
    const p2 = stack.pop()
    const p1 = stack.pop()
    stack.push(p2!)
    stack.push(p1! + p2!)
  }
  return stack.pop()
}
