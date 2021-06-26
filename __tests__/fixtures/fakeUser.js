import faker from 'faker';
import { randexp } from 'randexp';

export default function createFakeUser(overrides) {
  const user = {
    username: randexp(/^[a-z0-9_.]{4,16}$/),
    password: randexp(/.{8,24}/),
    name: faker.name.findName(),
    email: faker.internet.email(),
    picture: faker.internet.url(),
  };

  return {
    ...user,
    ...overrides,
  };
}
