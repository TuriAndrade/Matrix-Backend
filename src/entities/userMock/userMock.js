export default function buildUserMock({ CustomError }) {
  function checkUserId(userId) {
    if (typeof userId !== 'number')
      throw new CustomError({
        message: 'User mock must have a user id that is a number.',
        code: 'invalid',
        attr: 'userId',
        entity: 'userMock',
      });
  }

  function checkMockId(mockId) {
    if (typeof mockId !== 'number')
      throw new CustomError({
        message: 'User mock must have a mock id that is a number.',
        code: 'invalid',
        attr: 'mockId',
        entity: 'userMock',
      });
  }

  function createUserMock({ userId, mockId }) {
    if (!userId)
      throw new CustomError({
        message: 'User mock must have a user id.',
        code: 'undefined',
        attr: 'userId',
        entity: 'userMock',
      });

    if (!mockId)
      throw new CustomError({
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
    if (userId !== undefined) {
      if (!userId)
        throw new CustomError({
          message: 'User mock must have a valid user id.',
          code: 'invalid',
          attr: 'userId',
          entity: 'userMock',
        });
      else checkUserId(userId);
    }

    if (mockId !== undefined) {
      if (!mockId)
        throw new CustomError({
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
