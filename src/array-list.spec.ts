import { makeRandomList } from './array-list'

test('去除排序数组中的重复值', () => {
  const sortedArray = [...makeRandomList()].sort()
  const expectResult = Array.from(new Set(sortedArray)).sort()

  let checkIndex = 0
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[checkIndex] !== sortedArray[i]) {
      sortedArray[++checkIndex] = sortedArray[i]
    }
  }
  const result = sortedArray.slice(0, checkIndex + 1)

  expect(result).toStrictEqual(expectResult)
})
