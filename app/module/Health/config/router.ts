import { Route } from 'stix';
import { HealthController } from '../src/Controller';

/**
 * This config is where you configure the routes for your module.
 */
export const router = {
  routes: [
    Route.get('health/check', HealthController, 'check'),
  ],
};
