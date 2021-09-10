export default function createFakeUserMock(overrides) {
  const userMock = {
    userId: Math.floor(Math.random() * 1000),
    mockId: Math.floor(Math.random() * 1000),
  };

  return {
    ...userMock,
    ...overrides,
  };
}
