import {
  RouteProps as DefaultRouteProps,
  RouteComponentProps,
} from 'react-router-dom';
import { IgnoreOptions } from './collector';
import { IRouterConfig } from '.';

export interface IDynamicImportComponent {
  __LAZY__: boolean;
  dynamicImport: () => Promise<{ default: React.ComponentType<any> }>;
}

export interface IRouteWrapper {
  (props: any): React.ComponentType<any>;
}

export interface RouteItemProps extends DefaultRouteProps {
  children?: RouteItemProps[];
  // disable string[]
  path?: string;
  // for rediect ability
  redirect?: string;

  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | IDynamicImportComponent;

  routeWrappers?: IRouteWrapper[];
};

export interface RouterProps {
  // custom props
  routes: RouteItemProps[];
  type?: 'hash' | 'browser' | 'memory' | 'static';
  // common props for BrowserRouter&HashRouter&MemoryRouter
  basename?: string;
  getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
  forceRefresh?: boolean;
  // for BrowserRouter
  keyLength?: number;
  // for HashRouter
  hashType?: 'slash' | 'noslash' | 'hashbang';
  // for MemoryRouter
  initialEntries?: string[];
  initialIndex?: number;
  fallback?: React.ReactNode;
};

export interface IModifyFn {
  (routes: RouteItemProps[]): RouteItemProps[];
}

export interface RoutesProps {
  routes: IRouterConfig[];
  fallback?: React.ReactNode;
};

export interface IRouterOptions {
  caseSensitive?: boolean;
  ignoreRoutes?: IgnoreOptions;
  ignorePaths?: IgnoreOptions;
  configPath?: string;
  lazy?: boolean;
}