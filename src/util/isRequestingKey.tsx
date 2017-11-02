import { GraphQLResolveInfo } from 'graphql';

import { getRequestedKeys } from './getRequestedKeys';

export function isRequestingKey(info: GraphQLResolveInfo, key: string): boolean {
  const keys: string[] = getRequestedKeys(info);
  return keys.length === 1 && keys[0] === key;
}
