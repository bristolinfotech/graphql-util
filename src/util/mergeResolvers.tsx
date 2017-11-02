import { TypedIResolvers } from '../types';
import { merge } from 'lodash';
import { IResolvers } from 'graphql-tools/dist/interfaces';

export function mergeResolvers(resolvers: TypedIResolvers[] | IResolvers[]): IResolvers {
  return (merge({}, ...resolvers) as any) as IResolvers;
}
