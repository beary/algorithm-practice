import { BinaryTree } from './binary-tree'

test('从上至下、从左至右，打印二叉🌲', () => {
  const root = 10
  const tree = new BinaryTree(root)
  const values = [5, 15, 3, 7, 13, 17]
  for (const v of values) {
    tree.insert(v)
  }
  const result = BinaryTree.levelTraverse(tree)
  expect(result).toStrictEqual([root, ...values])
})
