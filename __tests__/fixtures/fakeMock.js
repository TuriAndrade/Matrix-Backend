import faker from 'faker';

export default function createFakeMock(overrides) {
  const mock = {
    name: faker.lorem.words(Math.floor(Math.random() * 2) + 3),
    exam: faker.lorem.words(1),
    subject: faker.lorem.words(1),
    discipline: faker.lorem.words(1),
    level: faker.lorem.words(1),
  };

  return {
    ...mock,
    ...overrides,
  };
}
