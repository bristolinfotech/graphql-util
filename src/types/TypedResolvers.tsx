import { GraphQLIsTypeOfFn, GraphQLResolveInfo, GraphQLScalarType, GraphQLTypeResolver } from 'graphql';
import { IResolverObject } from 'graphql-tools/dist/interfaces';


export type TypedGraphQLFieldResolver<TType, TSource, TContext> = (
  source: TSource,
  args: { [argName: string]: any },
  context: TContext,
  info: GraphQLResolveInfo,
) => TType | Promise<TType>;

export interface TypedIResolverOptions<TType, TSource = any, TContext = any> {
  resolve?: TypedGraphQLFieldResolver<TType, TSource, TContext>;
  subscribe?: TypedGraphQLFieldResolver<TType, TSource, TContext>;
  __resolveType?: GraphQLTypeResolver<any, any>;
  __isTypeOf?: GraphQLIsTypeOfFn<any, any>;
}

export type TypedIResolverObject<TKeys, TSource = any, TContext = any> = {
  [K in keyof TKeys]: (
    TypedGraphQLFieldResolver<TKeys[K], TSource, TContext>
    | TypedIResolverOptions<TKeys[K], TSource, TContext>
  );
};

export interface TypedIResolvers {
  [key: string]: (() => any) | IResolverObject | GraphQLScalarType | TypedIResolverObject<any>;
}
