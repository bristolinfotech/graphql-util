import { FieldNode, FragmentSpreadNode, InlineFragmentNode, SelectionNode } from 'graphql';

export function isFieldNode(node: SelectionNode): node is FieldNode {
  return node.kind === 'Field';
}

export function isFragmentSpreadNode(node: SelectionNode): node is FragmentSpreadNode {
  return node.kind === 'FragmentSpread';
}

export function isInlineFragmentNode(node: SelectionNode): node is InlineFragmentNode {
  return node.kind === 'InlineFragment';
}
