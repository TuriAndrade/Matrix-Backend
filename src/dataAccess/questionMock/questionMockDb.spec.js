import createFakeQuestionMock from '../../../__tests__/fixtures/fakeQuestionMock';
import truncate from '../../../__tests__/utils/truncate';
import { insertQuestion, insertMock } from '../../../__tests__/utils/seed';
import questionMockDb from './index';
import { createQuestionMock } from '../../entities/questionMock';

describe('Question mock db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create question mock', async () => {
    const question = await insertQuestion();
    const mock = await insertMock();

    const questionMock = createQuestionMock(
      createFakeQuestionMock({ questionId: question.id, mockId: mock.id })
    );

    const createdQuestionMock = await questionMockDb.create(
      questionMock.spread()
    );

    expect(createdQuestionMock.id).toEqual(expect.any(Number));
  });

  it('Should find question mocks by question id', async () => {
    const question = await insertQuestion();
    const mock = await insertMock();

    const questionMocks = [];

    for (let i = 0; i < 10; i++) {
      questionMocks.push(
        createQuestionMock(
          createFakeQuestionMock({ questionId: question.id, mockId: mock.id })
        )
      );
    }

    const questionMockIds = [];

    await Promise.all(
      questionMocks.map((questionMock) =>
        questionMockDb.create(questionMock.spread())
      )
    ).then((result) =>
      result.forEach((entry) => questionMockIds.push(entry.id))
    );

    const foundQuestionMocks = await questionMockDb.findByQuestionId({
      questionId: question.id,
    });

    expect(foundQuestionMocks.length).toBe(10);

    foundQuestionMocks.forEach((questionMock) => {
      expect(questionMockIds).toContain(questionMock.id);
    });
  });

  it('Should find question mocks by mock id', async () => {
    const question = await insertQuestion();
    const mock = await insertMock();

    const questionMocks = [];

    for (let i = 0; i < 10; i++) {
      questionMocks.push(
        createQuestionMock(
          createFakeQuestionMock({ questionId: question.id, mockId: mock.id })
        )
      );
    }

    const questionMockIds = [];

    await Promise.all(
      questionMocks.map((questionMock) =>
        questionMockDb.create(questionMock.spread())
      )
    ).then((result) =>
      result.forEach((entry) => questionMockIds.push(entry.id))
    );

    const foundQuestionMocks = await questionMockDb.findByMockId({
      mockId: mock.id,
    });

    expect(foundQuestionMocks.length).toBe(10);

    foundQuestionMocks.forEach((questionMock) => {
      expect(questionMockIds).toContain(questionMock.id);
    });
  });

  it('Should find question mocks by question and mock ids', async () => {
    const question = await insertQuestion();
    const mock = await insertMock();

    const questionMocks = [];

    for (let i = 0; i < 10; i++) {
      questionMocks.push(
        createQuestionMock(
          createFakeQuestionMock({ questionId: question.id, mockId: mock.id })
        )
      );
    }

    const questionMockIds = [];

    await Promise.all(
      questionMocks.map((questionMock) =>
        questionMockDb.create(questionMock.spread())
      )
    ).then((result) =>
      result.forEach((entry) => questionMockIds.push(entry.id))
    );

    const foundQuestionMocks = await questionMockDb.findByQuestionAndMockIds({
      questionId: question.id,
      mockId: mock.id,
    });

    expect(foundQuestionMocks.length).toBe(10);

    foundQuestionMocks.forEach((questionMock) => {
      expect(questionMockIds).toContain(questionMock.id);
    });
  });

  it('Should delete question mock by id', async () => {
    const question = await insertQuestion();
    const mock = await insertMock();

    const questionMock = createQuestionMock(
      createFakeQuestionMock({ questionId: question.id, mockId: mock.id })
    );

    const createdQuestionMock = await questionMockDb.create(
      questionMock.spread()
    );

    const numberOfDeletedQuestionMocks = await questionMockDb.deleteById({
      id: createdQuestionMock.id,
    });

    expect(numberOfDeletedQuestionMocks).toBe(1);
  });
});
