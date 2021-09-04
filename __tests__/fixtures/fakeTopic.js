import faker from 'faker';

export default function createFakeTopic(overrides) {
  const topic = {
    name: faker.lorem.words(Math.floor(Math.random() * 2) + 3),
    link: faker.internet.url(),
  };

  return {
    ...topic,
    ...overrides,
  };
}
