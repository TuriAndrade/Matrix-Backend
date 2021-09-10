import createFakeUserMock from '../../../__tests__/fixtures/fakeUserMock';
import { createUserMock, updateUserMock } from './index';

describe('User mock entity', () => {
  it('Should create user mock', () => {
    const userMock = createUserMock(createFakeUserMock());

    expect(userMock).toEqual(
      expect.objectContaining({
        getUserId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update user mock', () => {
    const updatedUserMock = updateUserMock(createFakeUserMock());

    expect(updatedUserMock).toEqual(
      expect.objectContaining({
        getUserId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some user mock attributes', () => {
    const updatedUserId = updateUserMock({
      userId: Math.floor(Math.random() * 1000),
    });

    expect(updatedUserId).toEqual(
      expect.objectContaining({
        getUserId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedMockId = updateUserMock({
      mockId: Math.floor(Math.random() * 1000),
    });

    expect(updatedMockId).toEqual(
      expect.objectContaining({
        getUserId: expect.any(Function),
        getMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefUserId = createFakeUserMock({ userId: undefined });

    expect(() => createUserMock(undefUserId)).toThrow(
      'User mock must have a user id.'
    );

    const undefMockId = createFakeUserMock({ mockId: undefined });

    expect(() => createUserMock(undefMockId)).toThrow(
      'User mock must have a mock id.'
    );

    const invalidUserId = createFakeUserMock({ userId: 'not_number' });

    expect(() => createUserMock(invalidUserId)).toThrow(
      'User mock must have a user id that is a number.'
    );
  });

  it('Should throw errors on update', () => {
    const nullUserId = createFakeUserMock({ userId: null });

    expect(() => updateUserMock(nullUserId)).toThrow(
      'User mock must have a valid user id.'
    );

    const nullMockId = createFakeUserMock({ mockId: null });

    expect(() => updateUserMock(nullMockId)).toThrow(
      'User mock must have a valid mock id.'
    );
  });
});
