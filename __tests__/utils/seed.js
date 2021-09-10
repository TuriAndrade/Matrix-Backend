import createFakeUser from '../fixtures/fakeUser';
import createFakeTopic from '../fixtures/fakeTopic';
import createFakeMock from '../fixtures/fakeMock';
import db from '../../src/database/models';

export async function insertUser() {
  const user = createFakeUser();

  const createdUser = await db.User.create(user);

  return createdUser;
}

export async function insertUsers(n = 10) {
  const users = [];

  for (let i = 0; i < n; i++) {
    users.push(createFakeUser());
  }

  return Promise.all(users.map((user) => db.User.create(user)));
}

export async function insertTopic() {
  const topic = createFakeTopic();

  const createdTopic = await db.Topic.create(topic);

  return createdTopic;
}

export async function insertTopics(n = 10) {
  const topics = [];

  for (let i = 0; i < n; i++) {
    topics.push(createFakeTopic());
  }

  return Promise.all(topics.map((topic) => db.Topic.create(topic)));
}

export async function insertMock() {
  const mock = createFakeMock();

  const createdMock = await db.Mock.create(mock);

  return createdMock;
}

export async function insertMocks(n = 10) {
  const mocks = [];

  for (let i = 0; i < n; i++) {
    mocks.push(createFakeMock());
  }

  return Promise.all(mocks.map((mock) => db.Mock.create(mock)));
}
