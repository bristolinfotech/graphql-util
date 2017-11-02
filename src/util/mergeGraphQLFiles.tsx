import { readFile, readFileSync } from 'fs-extra';
import * as globby from 'globby';
import { resolve } from 'path';

export async function mergeGraphQLFiles(directory: string) {
  const paths: string[] = await globby([
    resolve(directory, '**', '*.graphql'),
    resolve(directory, '**', '*.gql'),
  ]);
  const promises: Promise<string>[] = [];
  paths.forEach((path: string) => {
    promises.push(readFile(path, 'utf8'));
  });
  const files: string[] = await Promise.all(promises);
  return files.join('\n');
}


export function mergeGraphQLFilesSync(directory: string) {
  const paths: string[] = globby.sync([
    resolve(directory, '**', '*.graphql'),
    resolve(directory, '**', '*.gql'),
  ]);
  const files: string[] = [];
  paths.forEach((path: string) => {
    files.push(readFileSync(path, 'utf8'));
  });
  return files.join('\n');
}
