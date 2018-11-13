import { DbRoute } from 'stix-wetland';
import { UserController } from '../src/Controller';

/**
 * This config is where you configure the routes for your module.
 */
export const router = {
  routes: [
    DbRoute.all('/users', UserController),
  ],
};
