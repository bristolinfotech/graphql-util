import { GraphQLResolveInfo, SelectionSetNode } from 'graphql';

import { isFieldNode, isFragmentSpreadNode, isInlineFragmentNode } from './typeGuards';

function recursiveGetKeys(info: GraphQLResolveInfo, selectionSet: SelectionSetNode) {
  const keys: string[] = [];
  if (selectionSet.selections) {
    selectionSet.selections.forEach((selectionNode) => {
      if (isFieldNode(selectionNode)) {
        keys.push(selectionNode.name.value);
      } else if (isFragmentSpreadNode(selectionNode)) {
        keys.push(...recursiveGetKeys(info, info.fragments[selectionNode.name.value].selectionSet));
      } else if (isInlineFragmentNode(selectionNode)) {
        keys.push(...recursiveGetKeys(info, selectionNode.selectionSet));
      }
    });
  }
  return keys;
}

export function getRequestedKeys(info: GraphQLResolveInfo): string[] {
  const keys: string[] = [];
  info.fieldNodes.forEach((fieldNode) => {
    if (fieldNode.selectionSet) {
      keys.push(...recursiveGetKeys(info, fieldNode.selectionSet));
    }
  });
  return keys.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
