/**
 * 生成一个长度为 length ，且每一项值位于 min 和 max 之间的数组的生成器
 * @param length 数组长度
 * @param max 最大值
 * @param min 最小值
 */
export function* makeRandomList (length = 10, max = 10, min = 0) {
  for (let i = 0; i < length; i++)
    yield Math.floor(Math.random() * (max - min))
}
