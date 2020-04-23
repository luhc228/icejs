import {
  RouteProps as DefaultRouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import { History } from 'history';

interface IModifyRoutes {
  (modifyFn: IModifyFn): void;
}

interface IRouteWrapper {
  (props: any): React.ComponentType<any>;
}

interface IDynamicImportComponent {
  __LAZY__: boolean;
  dynamicImport: () => Promise<{ default: React.ComponentType<any> }>;
}

interface RouteItemProps extends DefaultRouteProps {
  children?: RouteItemProps[];
  // disable string[]
  path?: string;
  // for rediect ability
  redirect?: string;

  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | IDynamicImportComponent;

  routeWrappers?: IRouteWrapper[];
};

interface IModifyFn {
  (routes: RouteItemProps[]): RouteItemProps[];
}

export interface IAppRouterProps {
  type?: 'hash' | 'browser' | 'memory';
  routes?: RouteItemProps[];
  basename?: string;
  modifyRoutes?: IModifyRoutes;
  fallback?: React.ReactNode;
  history?: History;
}

export interface IRouterConfig extends DefaultRouteProps {
  children?: IRouterConfig[];
  // disable string[]
  path?: string;
  // for rediect ability
  redirect?: string;

  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}
