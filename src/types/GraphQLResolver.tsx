import { GraphQLResolveInfo, GraphQLTypeResolver, GraphQLScalarType, GraphQLFieldResolver } from 'graphql';

export type GraphQLTypeObjectResolver<TType = any> = {
  [P in keyof TType]: (
    GraphQLFieldResolverWithResponse<TType[P], any, any, any>
    | GraphQLFieldObjectResolverWithResponse<TType[P], any, any, any>
  );
} & {
  __description?: string;
};

export type GraphQLFieldResolverWithResponse<TResponse = any, TSource = any, TArgs = any, TContext = any> = (
  source: TSource,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResponse | Promise<TResponse>;

export type GraphQLFieldObjectResolverWithResponse<TResponse = any, TSource = any, TArgs = any, TContext = any> = {
  __description?: string;
  resolve: GraphQLFieldResolverWithResponse<TResponse, TSource, TArgs, TContext>;
};
