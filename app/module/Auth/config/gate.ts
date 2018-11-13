import { Gate } from 'stix-gates';
import { UserController } from '../src/Controller/UserController';
import { PostDataGate } from '../src/Gate';
import * as path from 'path';

const compose = Gate.compose;

const base = [ PostDataGate ];

export const gate = {
  locations: [ path.resolve(__dirname, '..', 'src', 'Gate') ], // Tell stix-gates where it can find your Gate classes
  rules: new Map([
    // By default, allow no access to anything.
    // This is also the stix-gates default when no gates were found.
    ['*', false],

    // Allow access to all actions, except one.
    // Produces: { OpenController: { '*': true, secretAction: false } }
    [ UserController, { '*': true, secretAction: false } ],

    // Compose some rules for the UserController using the helper.
    // Produces: { UserController: { profile: [ isAuthenticated, isNotGuest ] } }
    compose(UserController, { profile: [ isNotGuest ] }, base),
  ]),
};
