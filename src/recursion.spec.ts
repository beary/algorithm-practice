import { fibonacci } from './recursion'

test('递归获取斐波拉契数列', () => {
  const result = fibonacci(10)
  expect(result).toEqual(34)
})
