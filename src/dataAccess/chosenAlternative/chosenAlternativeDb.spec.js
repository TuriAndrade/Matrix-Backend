import createFakeChosenAlternative from '../../../__tests__/fixtures/fakeChosenAlternative';
import truncate from '../../../__tests__/utils/truncate';
import { insertUserMock, insertQuestion } from '../../../__tests__/utils/seed';
import chosenAlternativeDb from './index';
import { createChosenAlternative } from '../../entities/chosenAlternative';

describe('Chosen alternative db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create chosen alternative', async () => {
    const userMock = await insertUserMock();

    const chosenAlternative = createChosenAlternative(
      createFakeChosenAlternative({ userMockId: userMock.id })
    );

    const createdChosenAlternative = await chosenAlternativeDb.create(
      chosenAlternative.spread()
    );

    expect(createdChosenAlternative.id).toEqual(expect.any(Number));
  });

  it('Should find chosen alternatives by user mock id', async () => {
    const userMock = await insertUserMock();

    const chosenAlternatives = [];

    for (let i = 0; i < 10; i++) {
      chosenAlternatives.push(
        createChosenAlternative(
          createFakeChosenAlternative({
            userMockId: userMock.id,
          })
        )
      );
    }

    const chosenAlternativeIds = [];

    await Promise.all(
      chosenAlternatives.map((chosenAlternative) =>
        chosenAlternativeDb.create(chosenAlternative.spread())
      )
    ).then((result) =>
      result.forEach((entry) => chosenAlternativeIds.push(entry.id))
    );

    const foundChosenAlternatives = await chosenAlternativeDb.findByUserMockId({
      userMockId: userMock.id,
    });

    expect(foundChosenAlternatives.length).toBe(10);

    foundChosenAlternatives.forEach((chosenAlternative) => {
      expect(chosenAlternativeIds).toContain(chosenAlternative.id);
    });
  });

  it('Should find chosen alternative by user mock and question ids', async () => {
    const userMock = await insertUserMock();
    const question = await insertQuestion();

    const chosenAlternative = createChosenAlternative(
      createFakeChosenAlternative({
        userMockId: userMock.id,
        questionId: question.id,
      })
    );

    const createdChosenAlternative = await chosenAlternativeDb.create(
      chosenAlternative.spread()
    );

    const foundChosenAlternative =
      await chosenAlternativeDb.findByUserMockAndQuestionIds({
        userMockId: userMock.id,
        questionId: question.id,
      });

    expect(createdChosenAlternative.id).toBe(foundChosenAlternative.id);
  });

  it('Should delete chosen alternative by id', async () => {
    const userMock = await insertUserMock();

    const chosenAlternative = createChosenAlternative(
      createFakeChosenAlternative({ userMockId: userMock.id })
    );

    const createdChosenAlternative = await chosenAlternativeDb.create(
      chosenAlternative.spread()
    );

    const numberOfDeletedChosenAlternatives =
      await chosenAlternativeDb.deleteById({
        id: createdChosenAlternative.id,
      });

    expect(numberOfDeletedChosenAlternatives).toBe(1);
  });
});
