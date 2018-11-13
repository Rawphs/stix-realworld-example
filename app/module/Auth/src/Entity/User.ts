import { entity, autoFields, field } from 'wetland';

@entity()
@autoFields()
export class User {
  @field({ type: 'string' })
  public email: string;

  @field({ type: 'string' })
  public token: string;

  @field({ type: 'string' })
  public username: string;

  @field({ type: 'string' })
  public bio: string;

  @field({ type: 'string' })
  public image: string;
}
