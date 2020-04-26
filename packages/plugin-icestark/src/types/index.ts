import { IGetApps, IAppRouter } from './base';

export interface IIceStark {
  type: 'framework' | 'child';
  getApps?: IGetApps;
  appRouter?: IAppRouter;
  removeRoutesLayout?: boolean;
  AppRoute?: React.ComponentType;
  Layout?: React.ComponentType;
}
