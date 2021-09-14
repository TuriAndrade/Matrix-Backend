export default function createFakeQuestionMock(overrides) {
  const questionMock = {
    questionId: Math.floor(Math.random() * 1000),
    mockId: Math.floor(Math.random() * 1000),
  };

  return {
    ...questionMock,
    ...overrides,
  };
}
