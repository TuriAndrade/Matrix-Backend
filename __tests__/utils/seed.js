import createFakeUser from '../fixtures/fakeUser';
import createFakeTopic from '../fixtures/fakeTopic';
import createFakeMock from '../fixtures/fakeMock';
import createFakeQuestion from '../fixtures/fakeQuestion';
import createFakeUserMock from '../fixtures/fakeUserMock';
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

export async function insertQuestion() {
  const question = createFakeQuestion();

  const createdQuestion = await db.Question.create(question);

  return createdQuestion;
}

export async function insertQuestions(n = 10) {
  const questions = [];

  for (let i = 0; i < n; i++) {
    questions.push(createFakeQuestion());
  }

  return Promise.all(questions.map((question) => db.Question.create(question)));
}

export async function insertUserMock() {
  const user = await insertUser();
  const mock = await insertMock();

  const userMock = createFakeUserMock({ userId: user.id, mockId: mock.id });

  const createdUserMock = await db.UserMock.create(userMock);

  return createdUserMock;
}

export async function insertUserMocks(n = 10) {
  const users = await insertUsers(n);
  const mocks = await insertMocks(n);

  const userMocks = [];

  for (let i = 0; i < n; i++) {
    userMocks.push(
      createFakeUserMock({ userId: users[i].id, mockId: mocks[i].id })
    );
  }

  return Promise.all(userMocks.map((userMock) => db.UserMock.create(userMock)));
}
