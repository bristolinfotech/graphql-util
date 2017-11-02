import { getRequestedKeys } from './getRequestedKeys';
import { GraphQLResolveInfo } from 'graphql';

export const isRequestingKey = (info: GraphQLResolveInfo, key: string): boolean => {
  const keys: string[] = getRequestedKeys(info);
  return keys.length === 1 && keys[0] === key;
};
