import createFakeUser from '../fixtures/fakeUser';
import userDb from '../../src/dataAccess/user';
import createFakeTopic from '../fixtures/fakeTopic';
import topicDb from '../../src/dataAccess/topic';

export async function insertUser() {
  const user = createFakeUser();

  const createdUser = await userDb.create({ ...user });

  return createdUser;
}

export async function insertUsers(n = 10) {
  const users = [];

  for (let i = 0; i < n; i++) {
    users.push(createFakeUser());
  }

  return Promise.all(users.map((user) => userDb.create({ ...user })));
}

export async function insertTopic() {
  const topic = createFakeTopic();

  const createdTopic = await topicDb.create({ ...topic });

  return createdTopic;
}

export async function insertTopics(n = 10) {
  const topics = [];

  for (let i = 0; i < n; i++) {
    topics.push(createFakeTopic());
  }

  return Promise.all(topics.map((topic) => topicDb.create({ ...topic })));
}
