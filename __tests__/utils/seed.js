import createFakeUser from '../fixtures/fakeUser';
import userDb from '../../src/dataAccess/user';

export async function insertUser() {
  const user = createFakeUser();

  const createdUser = await userDb.create({ ...user });

  return createdUser;
}

export async function insertUsers(n) {
  const users = [];

  for (let i = 0; i < n; i++) {
    users.push(createFakeUser());
  }

  return Promise.all(users.map((user) => userDb.create({ ...user })));
}
