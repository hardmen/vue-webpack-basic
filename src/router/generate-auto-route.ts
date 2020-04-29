// import { RouteConfig } from 'vue-router';
// import { camelCase, hyphen } from '@/utils/case';
// import isFunction from '@/utils/is-function';

// const rIndex = /^index\.(vue|jsx?|tsx?)$/;
// const rFolder = /^[^/]*\//;
// const rComponents = /^components\/([^/]*)(?:\/index)?\.(vue|jsx?|tsx?)$/;
// const rName = /^([^.]*)\.(vue|jsx?|tsx?)$/;
// type ExcludePattern = RegExp | string | (RegExp|string)[] | ((key: string) => boolean) | undefined;

// function excludeSource(keys: string[], pattern: ExcludePattern) {
//   if (pattern === undefined) return keys;
//   let fnPattern: (key: string) => boolean;
//   if (typeof pattern === 'function') {
//     fnPattern = pattern;
//   } else {
//     const arrPattern = Array.isArray(pattern) ? pattern : [pattern];
//     fnPattern = (key) => arrPattern.some(p => {
//       if (typeof p === 'string') {
//         return key.includes(p);
//       }
//       return p.test(key);
//     });
//   }
//   return keys.filter(item => !fnPattern(item));
// }
// function baseKeys(keys: string[], basePath: string) {
//   return keys.filter(item => item.startsWith(basePath))
//     .map(item => item.substr(basePath.length));
// }

// type RouteConfigWithMeta<Meta> = Omit<RouteConfig, 'meta'> & { meta?: Meta };

// type Meta<T> = T | ((path: string) => T);

// export function generateAutoRoute<M>(
//   {
//     path, requireContext, props, name,
//     useComponents = true,
//     exclude,
//     meta,
//   }: {
//       path: string
//       name: string
//       props: RouteConfig['props']
//       requireContext: __WebpackModuleApi.RequireContext
//       useComponents ?: boolean,
//       meta?: Meta<M>
//       exclude?: ExcludePattern
//     },
//   basePath = './',
// ): (RouteConfigWithMeta<M>)[] {
//   let keys = baseKeys(requireContext.keys(), basePath);
//   if (exclude) {
//     keys = excludeSource(keys, exclude);
//   }
//   const components = {} as NonNullable<RouteConfig['components']>;
//   const indexKeys: string[] = [];
//   const folderKeys: {[basePath: string]: string[]} = {};
//   const otherKeys: string[] = [];
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (rIndex.test(key)) {
//       indexKeys.push(key);
//     } else {
//       const mComponents = key.match(rComponents);
//       if (useComponents && mComponents) {
//         components[camelCase(mComponents[1], false)] = () => requireContext(`${basePath}${key}`);
//       } else {
//         const folderMatch = key.match(rFolder);
//         if (folderMatch) {
//           folderKeys[folderMatch[0]] = folderKeys[folderMatch[0]] || [];
//           folderKeys[folderMatch[0]].push(key);
//         } else {
//           otherKeys.push(key);
//         }
//       }
//     }
//   }
//   // ./index
//   // ./component
//   const result: RouteConfig[] = [];
//   let index: RouteConfig | undefined;

//   if (indexKeys[0]) {
//     components.default = () => requireContext(`${basePath}${indexKeys[0]}`);
//     index = {
//       path,
//       name,
//       props: Object.keys(components).reduce((memo, k) => {
//         memo[k] = props;
//         return memo;
//       }, {} as {[key: string]: RouteConfig['props']}),
//       components,
//       children: [],
//     };
//   }

//   const children = Object.keys(folderKeys).reduce((memo, _basePath) => {
//     const filename = _basePath.replace('/', '');
//     const _path = hyphen(filename);
//     return [...memo, ...generateAutoRoute({
//       name: camelCase(`${name}-${filename}`, true),
//       props,
//       path: index ? _path : `${path}/${_path}`,
//       requireContext,
//       useComponents,
//       meta,
//     }, `${basePath}${_basePath}`)];
//   }, [] as RouteConfig[]);

//   otherKeys.forEach(key => {
//     const [, filename] = key.match(rName)!;
//     const _path = hyphen(filename);
//     children.push({
//       path: index ? _path : `${path}/${_path}`,
//       name: camelCase(`${name}-${filename}`, true),
//       props,
//       component: () => requireContext(`${basePath}${key}`),
//     });
//   });

//   if (index) {
//     index.children!.push(...children);
//     result.push(index);
//   } else {
//     result.push(...children);
//   }

//   if (meta !== undefined) {
//     result.forEach((it: RouteConfigWithMeta<M>) => {
//       if (isFunction(meta)) {
//         it.meta = meta(it.path);
//       } else {
//         it.meta = meta;
//       }
//     });
//   }

//   return result;
// }
// export default generateAutoRoute;
