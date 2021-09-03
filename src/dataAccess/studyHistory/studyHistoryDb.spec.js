import createFakeStudyHistory from '../../../__tests__/fixtures/fakeStudyHistory';
import truncate from '../../../__tests__/utils/truncate';
import { insertUser } from '../../../__tests__/utils/seed';
import studyHistoryDb from './index';
import {
  createStudyHistory,
  updateStudyHistory,
} from '../../entities/studyHistory';

describe('Study history db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create study history', async () => {
    const user = await insertUser();

    const studyHistory = createStudyHistory(
      createFakeStudyHistory({ userId: user.id })
    );

    const createdStudyHistory = await studyHistoryDb.create(
      studyHistory.spread()
    );

    expect(createdStudyHistory.id).toEqual(expect.any(Number));
  });

  it('Should update study history by id', async () => {
    const user = await insertUser();

    const studyHistory = createStudyHistory(
      createFakeStudyHistory({ userId: user.id })
    );

    const createdStudyHistory = await studyHistoryDb.create(
      studyHistory.spread()
    );

    const update = updateStudyHistory(
      createFakeStudyHistory({ userId: user.id })
    );

    const [numberOfUpdatedStudyHistories] = await studyHistoryDb.updateById({
      id: createdStudyHistory.id,
      ...update.spread(),
    });

    expect(numberOfUpdatedStudyHistories).toBe(1);
  });

  it('Should find study histories by user id', async () => {
    const user = await insertUser();

    const studyHistories = [];

    for (let i = 0; i < 10; i++) {
      studyHistories.push(
        createStudyHistory(createFakeStudyHistory({ userId: user.id }))
      );
    }

    const studyHistoriesIds = [];

    await Promise.all(
      studyHistories.map((studyHistory) =>
        studyHistoryDb.create(studyHistory.spread())
      )
    ).then((result) =>
      result.forEach((entry) => studyHistoriesIds.push(entry.id))
    );

    const createdStudyHistories = await studyHistoryDb.findByUserId({
      userId: user.id,
    });

    expect(createdStudyHistories.length).toBe(10);

    createdStudyHistories.forEach((studyHistory) => {
      expect(studyHistoriesIds).toContain(studyHistory.id);
    });
  });

  it('Should delete study history by id', async () => {
    const user = await insertUser();

    const studyHistory = createStudyHistory(
      createFakeStudyHistory({ userId: user.id })
    );

    const createdStudyHistory = await studyHistoryDb.create(
      studyHistory.spread()
    );

    const numberOfDeletedStudyHistories = await studyHistoryDb.deleteById({
      id: createdStudyHistory.id,
    });

    expect(numberOfDeletedStudyHistories).toBe(1);
  });
});
