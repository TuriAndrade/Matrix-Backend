import createFakeAlternative from '../../../__tests__/fixtures/fakeAlternative';
import truncate from '../../../__tests__/utils/truncate';
import alternativeDb from './index';
import {
  createAlternative,
  updateAlternative,
} from '../../entities/alternative';
import { insertQuestion } from '../../../__tests__/utils/seed';

describe('Alternative db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create alternative', async () => {
    const question = await insertQuestion();

    const alternative = createAlternative(
      createFakeAlternative({ questionId: question.id })
    );

    const createdAlternative = await alternativeDb.create(alternative.spread());

    expect(createdAlternative.id).toEqual(expect.any(Number));
  });

  it('Should update alternative by id', async () => {
    const question = await insertQuestion();

    const alternative = createAlternative(
      createFakeAlternative({ questionId: question.id })
    );

    const createdAlternative = await alternativeDb.create(alternative.spread());

    const updates = updateAlternative(
      createFakeAlternative({ questionId: question.id })
    );

    const [numberOfUpdatedAlternatives] = await alternativeDb.updateById({
      id: createdAlternative.id,
      ...updates.spread(),
    });

    expect(numberOfUpdatedAlternatives).toBe(1);
  });

  it('Should find alternative by id', async () => {
    const question = await insertQuestion();

    const alternative = createAlternative(
      createFakeAlternative({ questionId: question.id })
    );

    const createdAlternative = await alternativeDb.create(alternative.spread());

    const foundAlternative = await alternativeDb.findById({
      id: createdAlternative.id,
    });

    expect(foundAlternative.html).toBe(createdAlternative.html);
  });

  it('Should find alternatives by question id', async () => {
    const question = await insertQuestion();

    const alternatives = [];

    for (let i = 0; i < 10; i++) {
      alternatives.push(
        createAlternative(createFakeAlternative({ questionId: question.id }))
      );
    }

    const alternativeIds = [];

    await Promise.all(
      alternatives.map((alternative) =>
        alternativeDb.create(alternative.spread())
      )
    ).then((result) =>
      result.forEach((entry) => alternativeIds.push(entry.id))
    );

    const foundAlternatives = await alternativeDb.findByQuestionId({
      questionId: question.id,
    });

    expect(foundAlternatives.length).toBe(10);

    foundAlternatives.forEach((alternative) => {
      expect(alternativeIds).toContain(alternative.id);
    });
  });

  it('Should delete alternative by id', async () => {
    const question = await insertQuestion();

    const alternative = createAlternative(
      createFakeAlternative({ questionId: question.id })
    );

    const createdAlternative = await alternativeDb.create(alternative.spread());

    const numberOfDeletedAlternatives = await alternativeDb.deleteById({
      id: createdAlternative.id,
    });

    expect(numberOfDeletedAlternatives).toBe(1);
  });
});
