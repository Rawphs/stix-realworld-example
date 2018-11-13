import { ContextInterface } from 'stix';
import { AbstractGate } from 'stix-gates';

/**
 * This gate sets the main body of the request to the first entry found in the body.
 *
 * This allows you to send a user to the users endpoint.
 */
export class PostDataGate extends AbstractGate {
  passThrough(ctx?: ContextInterface): void {
    if (ctx.body.constructor === Object) {
      ctx.body = ctx.body[Object.keys(ctx.body)[0]];
    }
  }
}
