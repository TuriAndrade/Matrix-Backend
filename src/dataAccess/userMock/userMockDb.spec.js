import createFakeUserMock from '../../../__tests__/fixtures/fakeUserMock';
import truncate from '../../../__tests__/utils/truncate';
import { insertUser, insertMock } from '../../../__tests__/utils/seed';
import userMockDb from './index';
import { createUserMock } from '../../entities/userMock';

describe('User mock db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create user mock', async () => {
    const user = await insertUser();
    const mock = await insertMock();

    const userMock = createUserMock(
      createFakeUserMock({ userId: user.id, mockId: mock.id })
    );

    const createdUserMock = await userMockDb.create(userMock.spread());

    expect(createdUserMock.id).toEqual(expect.any(Number));
  });

  it('Should find user mocks by user id', async () => {
    const user = await insertUser();
    const mock = await insertMock();

    const userMocks = [];

    for (let i = 0; i < 10; i++) {
      userMocks.push(
        createUserMock(createFakeUserMock({ userId: user.id, mockId: mock.id }))
      );
    }

    const userMockIds = [];

    await Promise.all(
      userMocks.map((userMock) => userMockDb.create(userMock.spread()))
    ).then((result) => result.forEach((entry) => userMockIds.push(entry.id)));

    const foundUserMocks = await userMockDb.findByUserId({
      userId: user.id,
    });

    expect(foundUserMocks.length).toBe(10);

    foundUserMocks.forEach((userMock) => {
      expect(userMockIds).toContain(userMock.id);
    });
  });

  it('Should find user mocks by mock id', async () => {
    const user = await insertUser();
    const mock = await insertMock();

    const userMocks = [];

    for (let i = 0; i < 10; i++) {
      userMocks.push(
        createUserMock(createFakeUserMock({ userId: user.id, mockId: mock.id }))
      );
    }

    const userMockIds = [];

    await Promise.all(
      userMocks.map((userMock) => userMockDb.create(userMock.spread()))
    ).then((result) => result.forEach((entry) => userMockIds.push(entry.id)));

    const foundUserMocks = await userMockDb.findByMockId({
      mockId: mock.id,
    });

    expect(foundUserMocks.length).toBe(10);

    foundUserMocks.forEach((userMock) => {
      expect(userMockIds).toContain(userMock.id);
    });
  });

  it('Should find user mocks by user and mock ids', async () => {
    const user = await insertUser();
    const mock = await insertMock();

    const userMocks = [];

    for (let i = 0; i < 10; i++) {
      userMocks.push(
        createUserMock(createFakeUserMock({ userId: user.id, mockId: mock.id }))
      );
    }

    const userMockIds = [];

    await Promise.all(
      userMocks.map((userMock) => userMockDb.create(userMock.spread()))
    ).then((result) => result.forEach((entry) => userMockIds.push(entry.id)));

    const foundUserMocks = await userMockDb.findByUserAndMockIds({
      mockId: mock.id,
      userId: user.id,
    });

    expect(foundUserMocks.length).toBe(10);

    foundUserMocks.forEach((userMock) => {
      expect(userMockIds).toContain(userMock.id);
    });
  });

  it('Should delete user mock by id', async () => {
    const user = await insertUser();
    const mock = await insertMock();

    const userMock = createUserMock(
      createFakeUserMock({ userId: user.id, mockId: mock.id })
    );

    const createdUserMock = await userMockDb.create(userMock.spread());

    const numberOfDeletedUserMocks = await userMockDb.deleteById({
      id: createdUserMock.id,
    });

    expect(numberOfDeletedUserMocks).toBe(1);
  });
});
