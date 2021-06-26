import faker from 'faker';
import { randexp } from 'randexp';

export default function createFakeUser(overrides) {
  const roles = ['student', 'admin', 'fullAdmin'];

  const user = {
    username: randexp(/^[a-z0-9_.]{4,16}$/),
    password: randexp(/.{8,24}/),
    name: faker.name.findName(),
    email: faker.internet.email(),
    role: roles[Math.floor(Math.random() * 3)],
    picture: faker.internet.url(),
  };

  return {
    ...user,
    ...overrides,
  };
}
