/**
 * 链表节点类
 */
export class LinkedList<T> {

  /**
   * 节点所存放的值
   */
  public value: T

  /**
   * 下一节点
   */
  public next: LinkedList<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }

  /**
   * 可迭代
   */
  *[Symbol.iterator] (): Generator<T> {
    yield this.value
    if (this.next) {
      yield* this.next
    }
  }

  /**
   * 利用数组创建链表，若数组为 null 或者长度为 0 ，则返回 null
   * @param values 用于生成链表的数组
   */
  public static fromArray<T> (values: T[]) {
    if (!values || values.length === 0) {
      return null
    }
    const list = new LinkedList(values[0])
    let cursor = list
    for (let i = 1; i < values.length; i++) {
      cursor.next = new LinkedList(values[i])
      cursor = cursor.next
    }
    return list
  }

  /**
   * 反转链表
   * @param list 要反转的链表
   */
  public static reverse<T> (list: LinkedList<T> | null) {
    let head = list
    let curr = head?.next
    let next: LinkedList<T> | null

    if (head && head.next) { // 只处理非 null 且长度大于 1 的链表
      head.next = null // 最初的首节点反转后会放在最末端，将它的 next 置 null 防止成环
      while (curr) {
        next = curr.next
        curr.next = head
        head = curr
        curr = next
      }
    }
    return head
  }
}
