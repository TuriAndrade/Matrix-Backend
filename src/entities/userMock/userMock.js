export default function buildUserMock({ EntityError }) {
  function checkUserId(userId) {
    if (typeof userId !== 'number')
      throw new EntityError({
        message: 'User mock must have a user id that is a number.',
        code: 'invalid',
        attr: 'userId',
        entity: 'userMock',
      });
  }

  function checkMockId(mockId) {
    if (typeof mockId !== 'number')
      throw new EntityError({
        message: 'User mock must have a mock id that is a number.',
        code: 'invalid',
        attr: 'mockId',
        entity: 'userMock',
      });
  }

  function createUserMock({ userId, mockId }) {
    if (!userId && userId !== 0)
      throw new EntityError({
        message: 'User mock must have a user id.',
        code: 'undefined',
        attr: 'userId',
        entity: 'userMock',
      });

    if (!mockId && mockId !== 0)
      throw new EntityError({
        message: 'User mock must have a mock id.',
        code: 'undefined',
        attr: 'mockId',
        entity: 'userMock',
      });

    checkUserId(userId);
    checkMockId(mockId);

    return Object.freeze({
      getUserId: () => userId,
      getMockId: () => mockId,
      spread: () => ({ userId, mockId }),
    });
  }

  function updateUserMock({ userId, mockId }) {
    if (userId !== undefined && userId !== 0) {
      if (!userId)
        throw new EntityError({
          message: 'User mock must have a valid user id.',
          code: 'invalid',
          attr: 'userId',
          entity: 'userMock',
        });
      else checkUserId(userId);
    }

    if (mockId !== undefined && mockId !== 0) {
      if (!mockId)
        throw new EntityError({
          message: 'User mock must have a valid mock id.',
          code: 'invalid',
          attr: 'mockId',
          entity: 'userMock',
        });
      else checkMockId(mockId);
    }

    return Object.freeze({
      getUserId: () => userId,
      getMockId: () => mockId,
      spread: () => ({ userId, mockId }),
    });
  }

  return { createUserMock, updateUserMock };
}
