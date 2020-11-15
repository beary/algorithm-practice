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

  public static splitReverse<T> (list: LinkedList<T> | null, n: number) {
    let head = list

    if (head && head.next) { // 只处理非 null 且长度大于 1 的链表
      let prevSubLast: LinkedList<T> | null = null // 上一条子链表的末端节点
      let subHead = list // 当前子链表的首节点
      let subLast = subHead // 当前子链表末端节点
      let curr = subLast?.next // 当前反转的节点
      let next: LinkedList<T> | null // 下一要反转的节点

      for (let i = 1; curr; i++) { // 因为 curr 已经是第二个元素，所以 i 从 1 开始
        next = curr.next // 下一反转节点后移
        curr.next = subHead // 当前节点放置到首部
        subHead = curr // 段首的指针指向新的首节点
        curr = next // 处理下一个节点

        if (i % n) { // 每反转完一段子链表
          if (prevSubLast) { // 如果上一子链表的末端节点不为 null
            prevSubLast.next = subHead
            // todo: 连接子链表，缓存新的 prevSubLast subLast
          } else {
            prevSubLast = subLast
          }
        }
      }
    }
  }
}
