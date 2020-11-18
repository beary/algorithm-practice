import { fibonacci, fibonacciWithCache, fibonacciWithStack } from './recursion'

test('递归获取斐波拉契数列', () => {
  const result = fibonacci(10)
  expect(result).toEqual(34)
})

test('缓存获取斐波拉契数列', () => {
  const result = fibonacciWithCache(10)
  expect(result).toEqual(34)
})

test('栈获取斐波拉契数列', () => {
  const result = fibonacciWithStack(10)
  expect(result).toEqual(34)
})
