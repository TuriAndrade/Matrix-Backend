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
});
