import createFakeUser from '../../../__tests__/fixtures/fakeUser';
import truncate from '../../../__tests__/utils/truncate';
import userDb from './index';
import { createUser, updateUser } from '../../entities/user';

describe('User db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create user', async () => {
    const user = createUser(createFakeUser());

    const createdUser = await userDb.create(user.spread());

    expect(createdUser.id).toEqual(expect.any(Number));
  });

  it('Should update user by id', async () => {
    const user = createUser(createFakeUser());

    const createdUser = await userDb.create(user.spread());

    const updates = updateUser(createFakeUser());

    const [numberOfUpdatedUsers] = await userDb.updateById({
      id: createdUser.id,
      ...updates.spread(),
    });

    expect(numberOfUpdatedUsers).toBe(1);
  });

  it('Should find user by username', async () => {
    const user = createUser(createFakeUser());

    const createdUser = await userDb.create(user.spread());

    const foundUser = await userDb.findByUsername({
      username: user.getUsername(),
    });

    expect(foundUser.id).toBe(createdUser.id);
  });

  it('Should delete user by id', async () => {
    const user = createUser(createFakeUser());

    const createdUser = await userDb.create(user.spread());

    const numberOfDeletedUsers = await userDb.deleteById({
      id: createdUser.id,
    });

    expect(numberOfDeletedUsers).toBe(1);
  });
});
