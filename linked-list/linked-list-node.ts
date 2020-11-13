export class LinkedListNode {
  public value: number
  public next: LinkedListNode | null
  constructor(value: number) {
    this.value = value
    this.next = null
  }
  toArray (): number[] {
    if (!this.next) {
      return [this.value]
    } else {
      return [this.value, ...this.next.toArray()]
    }
  }
}
