import faker from 'faker';

export default function createFakeStudyHistory(overrides) {
  const studyHistory = {
    subject: faker.lorem.word(),
    hasStudied: !!Math.floor(Math.random()),
    discipline: faker.lorem.word(),
    level: faker.lorem.word(),
    userId: Math.floor(Math.random() * 1000),
  };

  return {
    ...studyHistory,
    ...overrides,
  };
}
