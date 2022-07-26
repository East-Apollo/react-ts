import { RouteConfig } from 'react-router-config';
import trim from 'lodash/trim';

/**
 * 主要用于将相对地址改成绝对地址
 * @param routes 路由配置
 * @param parent 父节点路径
 */
export function absRoutes(
  routes: RouteConfig[] = [],
  parent = ''
): RouteConfig[] {
  if (!Array.isArray(routes)) {
    return [];
  }

  return routes.map((route) => {
    let absPath = route.path;
    if (typeof absPath === 'string') {
      if (absPath.search(parent) === -1) {
        absPath = [parent, route.path].join('/');
        absPath = `/${trim(absPath, '/')}`;
        absPath = absPath.replace(/\/+/g, '/');
      }

      if (Array.isArray(route.routes) && route.routes.length > 0) {
        const children = absRoutes(route.routes, absPath);

        return {
          ...route,
          path: absPath,
          routes: children,
        };
      }
    }

    return { ...route, path: absPath };
  });
}
