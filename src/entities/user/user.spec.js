import createFakeUser from '../../../__tests__/fixtures/fakeUser';
import { createUser, updateUser } from './index';

describe('User entity', () => {
  it('Should create user', () => {
    const user = createUser(createFakeUser());

    expect(user).toEqual(
      expect.objectContaining({
        getUsername: expect.any(Function),
        getPassword: expect.any(Function),
        getName: expect.any(Function),
        getEmail: expect.any(Function),
        getRole: expect.any(Function),
        getPicture: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update user', () => {
    const updatedUser = updateUser(createFakeUser());

    expect(updatedUser).toEqual(
      expect.objectContaining({
        getUsername: expect.any(Function),
        getPassword: expect.any(Function),
        getName: expect.any(Function),
        getEmail: expect.any(Function),
        getRole: expect.any(Function),
        getPicture: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some user attributes', () => {
    const updatedUsername = updateUser({ username: 'new_username' });

    expect(updatedUsername).toEqual(
      expect.objectContaining({
        getUsername: expect.any(Function),
        getPassword: expect.any(Function),
        getName: expect.any(Function),
        getEmail: expect.any(Function),
        getRole: expect.any(Function),
        getPicture: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedPasswordAndUsername = updateUser({
      username: 'new_username',
      password: 'new_password',
    });

    expect(updatedPasswordAndUsername).toEqual(
      expect.objectContaining({
        getUsername: expect.any(Function),
        getPassword: expect.any(Function),
        getName: expect.any(Function),
        getEmail: expect.any(Function),
        getRole: expect.any(Function),
        getPicture: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should delete picture', () => {
    const deletedPicure = updateUser({ picture: null });

    expect(deletedPicure.getPicture()).toBe(null);
  });

  it('Should throw errors on create', () => {
    const undefUsername = createFakeUser({ username: undefined });

    expect(() => createUser(undefUsername)).toThrow(
      'User must have a username.'
    );

    const undefPassword = createFakeUser({ password: undefined });

    expect(() => createUser(undefPassword)).toThrow(
      'User must have a password.'
    );

    const invalidUsername = createFakeUser({ username: 'InvalidUsername' });

    expect(() => createUser(invalidUsername)).toThrow(
      'User must have a valid username.'
    );

    const invalidEmail = createFakeUser({ email: 'InvalidEmail' });

    expect(() => createUser(invalidEmail)).toThrow(
      'User must have a valid email.'
    );

    const invalidRole = createFakeUser({ role: 'InvalidRole' });

    expect(() => createUser(invalidRole)).toThrow(
      'User must have a valid role.'
    );
  });

  it('Should throw errors on update', () => {
    const nullUsername = createFakeUser({ username: null });

    expect(() => updateUser(nullUsername)).toThrow(
      'User must have a valid username.'
    );

    const nullPassword = createFakeUser({ password: null });

    expect(() => updateUser(nullPassword)).toThrow(
      'User must have a valid password.'
    );

    const invalidUsername = createFakeUser({ username: 'InvalidUsername' });

    expect(() => updateUser(invalidUsername)).toThrow(
      'User must have a valid username.'
    );

    const invalidEmail = createFakeUser({ email: 'InvalidEmail' });

    expect(() => updateUser(invalidEmail)).toThrow(
      'User must have a valid email.'
    );

    const invalidRole = createFakeUser({ role: 'InvalidRole' });

    expect(() => updateUser(invalidRole)).toThrow(
      'User must have a valid role.'
    );
  });
});
