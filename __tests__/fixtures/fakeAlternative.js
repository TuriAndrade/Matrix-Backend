import faker from 'faker';

export default function createFakeAlternative(overrides) {
  const options = [false, true];

  const alternative = {
    html: `<p>${faker.lorem.words(5)}</p>`,
    delta: {
      ops: [{ img: faker.internet.url() }],
    },
    isCorrect: options[Math.floor(Math.random() * 2)],
    questionId: Math.floor(Math.random() * 1000),
  };

  return {
    ...alternative,
    ...overrides,
  };
}
