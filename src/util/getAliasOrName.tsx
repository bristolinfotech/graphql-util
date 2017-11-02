import { GraphQLResolveInfo } from 'graphql';

export const getAliasOrName = (info: GraphQLResolveInfo): string | null => {
  if (info.fieldNodes.length > 0) {
    if (info.fieldNodes[0].alias) {
      return info.fieldNodes[0].alias.value;
    } else {
      return info.fieldNodes[0].name.value;
    }
  } else {
    return null;
  }
};
