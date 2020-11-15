import { BinaryTree } from './binary-tree'

/**
 * values 生成的树结构为
 *         10
 *       /    \
 *      5      15
 *    /  \    /  \
 *   3    7  13   17
 * 肉眼从上到下、从左至右打印结果为 levelTraverseResult
 * 肉眼前序遍历结果为 preOrderTraverseResult
 * 肉眼中序遍历结果为 inOrderTraverseResult
 * 肉眼后序遍历结果为 postOrderTraverseResult
 */
const values = [10, 5, 15, 3, 7, 13, 17]
const levelTraverseResult = [10, 5, 15, 3, 7, 13, 17]
const preOrderTraverseResult = [10, 5, 3, 7, 15, 13, 17]
const inOrderTraverseResult = [3, 5, 7, 10, 13, 15, 17]
const postOrderTraverseResult = [3, 7, 5, 13, 17, 15, 10]


test('从上至下、从左至右，打印二叉树', () => {
  const tree = BinaryTree.fromArray(values)!
  const result = BinaryTree.levelTraverse(tree)
  expect(result).toStrictEqual(levelTraverseResult)
})

test('前序便利二叉树', () => {
  const tree = BinaryTree.fromArray(values)!
  const result = [...tree]
  expect(result).toStrictEqual(preOrderTraverseResult)
})

test('中序便利二叉树', () => {
  const tree = BinaryTree.fromArray(values)!
  const result = [...tree.inOrderTraverse()]
  expect(result).toStrictEqual(inOrderTraverseResult)
})

test('后序便利二叉树', () => {
  const tree = BinaryTree.fromArray(values)!
  const result = [...tree.postOrderTraverse()]
  expect(result).toStrictEqual(postOrderTraverseResult)
})
