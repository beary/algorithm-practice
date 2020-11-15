import { makeRandomList } from './array-list'
import { LinkedList } from './linked-list'

test('反转链表', () => {
  const sortedArray = [...makeRandomList()]
  const orignal = LinkedList.fromArray(sortedArray)
  const reversed = LinkedList.reverse(orignal)!
  const reversedArray = [...reversed]
  expect(reversedArray).toStrictEqual(sortedArray.reverse())
})
