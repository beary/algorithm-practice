export class BinaryTree {
  public value: number
  public leftChild: BinaryTree | null
  public rightChild: BinaryTree | null

  constructor(value: number, leftChild: BinaryTree | null = null, rightChild: BinaryTree | null = null) {
    this.value = value
    this.leftChild = leftChild
    this.rightChild = rightChild
  }

  /**
   * 默认前序遍历
   */
  *[Symbol.iterator] (): Generator<number> {
    yield this.value
    if (this.leftChild) {
      yield* this.leftChild
    }
    if (this.rightChild) {
      yield* this.rightChild
    }
  }

  /**
   * 中序遍历
   */
  public *inOrderTraverse (): Generator<number> {
    if (this.leftChild) {
      yield* this.leftChild.inOrderTraverse()
    }
    yield this.value
    if (this.rightChild) {
      yield* this.rightChild.inOrderTraverse()
    }
  }

  /**
   * 后序遍历
   */
  public * postOrderTraverse (): Generator<number> {
    if (this.leftChild) {
      yield* this.leftChild.postOrderTraverse()
    }
    if (this.rightChild) {
      yield* this.rightChild.postOrderTraverse()
    }
    yield this.value
  }

  /**
   * 插入节点到二叉树
   * @param value 新节点的值
   */
  public insert (value: number) {
    if (value > this.value) { // 插入右子树
      if (this.rightChild) {
        this.rightChild.insert(value)
      } else {
        this.rightChild = new BinaryTree(value)
      }
    } else if (value < this.value) { // 插入左子树
      if (this.leftChild) {
        this.leftChild.insert(value)
      } else {
        this.leftChild = new BinaryTree(value)
      }
    }
    // value 相同时忽略
  }

  /**
   * 从数组生成二叉树
   * @param values 节点值
   */
  public static fromArray (values: number[]) {
    let tree: BinaryTree | null = null
    if (Array.isArray(values) && values.length !== 0) {
      tree = new BinaryTree(values[0])
      for (let i = 1; i < values.length; i++) {
        tree.insert(values[i])
      }
    }
    return tree
  }

  /**
   * 从上至下、从左至右，打印二叉树
   * @param tree 要打印的二叉树
   */
  public static levelTraverse (tree: BinaryTree) {
    const nodes = [tree]
    for (const node of nodes) {
      if (node.leftChild) {
        nodes.push(node.leftChild)
      }
      if (node.rightChild) {
        nodes.push(node.rightChild)
      }
    }
    return nodes.map(node => node.value)
  }
}
