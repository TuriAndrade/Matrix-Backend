import createFakeQuestion from '../../../__tests__/fixtures/fakeQuestion';
import truncate from '../../../__tests__/utils/truncate';
import questionDb from './index';
import { createQuestion, updateQuestion } from '../../entities/question';

describe('Question db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create question', async () => {
    const question = createQuestion(createFakeQuestion());

    const createdQuestion = await questionDb.create(question.spread());

    expect(createdQuestion.id).toEqual(expect.any(Number));
  });

  it('Should update question by id', async () => {
    const question = createQuestion(createFakeQuestion());

    const createdQuestion = await questionDb.create(question.spread());

    const updates = updateQuestion(createFakeQuestion());

    const [numberOfUpdatedQuestions] = await questionDb.updateById({
      id: createdQuestion.id,
      ...updates.spread(),
    });

    expect(numberOfUpdatedQuestions).toBe(1);
  });

  it('Should find question by id', async () => {
    const question = createQuestion(createFakeQuestion());

    const createdQuestion = await questionDb.create(question.spread());

    const foundQuestion = await questionDb.findById({ id: createdQuestion.id });

    expect(foundQuestion.html).toBe(createdQuestion.html);
  });

  it('Should delete question by id', async () => {
    const question = createQuestion(createFakeQuestion());

    const createdQuestion = await questionDb.create(question.spread());

    const numberOfDeletedQuestions = await questionDb.deleteById({
      id: createdQuestion.id,
    });

    expect(numberOfDeletedQuestions).toBe(1);
  });
});
