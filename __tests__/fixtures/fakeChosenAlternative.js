export default function createFakeChosenAlternative(overrides) {
  const chosenAlternative = {
    questionId: Math.floor(Math.random() * 1000),
    alternativeId: Math.floor(Math.random() * 1000),
    userMockId: Math.floor(Math.random() * 1000),
  };

  return {
    ...chosenAlternative,
    ...overrides,
  };
}
