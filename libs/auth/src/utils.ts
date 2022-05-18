import { USER_SERVICE_PROVIDER } from './constants';

export const publishProvider = (provider: any) => {
  return { provide: USER_SERVICE_PROVIDER, useClass: provider };
};
