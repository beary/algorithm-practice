/**
 * 获取斐波拉契数列第 n 位的值
 * @param n 斐波拉契数列的位数，必须大于 0
 */
export const fibonacci = (n: number): number => {
  if (n === 1) return 0
  if (n === 2) return 1
  return fibonacci(n - 2) + fibonacci(n - 1)
}
