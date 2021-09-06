import faker from 'faker';

export default function createFakeEssay(overrides) {
  const essay = {
    title: faker.lorem.words(Math.floor(Math.random() * 2) + 3),
    link: faker.internet.url(),
    grade: Math.floor(Math.random() * 101),
    topicId: Math.floor(Math.random() * 1000),
    userId: Math.floor(Math.random() * 1000),
  };

  return {
    ...essay,
    ...overrides,
  };
}
