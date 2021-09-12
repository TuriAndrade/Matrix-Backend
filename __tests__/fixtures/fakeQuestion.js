import faker from 'faker';

export default function createFakeQuestion(overrides) {
  const question = {
    html: `<p>${faker.lorem.words(5)}</p>`,
    delta: {
      ops: [{ img: faker.internet.url() }],
    },
  };

  return {
    ...question,
    ...overrides,
  };
}
