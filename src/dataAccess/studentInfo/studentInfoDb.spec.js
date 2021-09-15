import createFakeStudentInfo from '../../../__tests__/fixtures/fakeStudentInfo';
import truncate from '../../../__tests__/utils/truncate';
import { insertUser } from '../../../__tests__/utils/seed';
import studentInfoDb from './index';
import {
  createStudentInfo,
  updateStudentInfo,
} from '../../entities/studentInfo';

describe('Student info db', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create student info', async () => {
    const user = await insertUser();

    const studentInfo = createStudentInfo(
      createFakeStudentInfo({ userId: user.id })
    );

    const createdStudentInfo = await studentInfoDb.create(studentInfo.spread());

    expect(createdStudentInfo.id).toEqual(expect.any(Number));
  });

  it('Should update student info by id', async () => {
    const user = await insertUser();

    const studentInfo = createStudentInfo(
      createFakeStudentInfo({ userId: user.id })
    );

    const createdStudentInfo = await studentInfoDb.create(studentInfo.spread());

    const update = updateStudentInfo(
      createFakeStudentInfo({ userId: user.id })
    );

    const [numberOfUpdatedStudentsInfo] = await studentInfoDb.updateById({
      id: createdStudentInfo.id,
      ...update.spread(),
    });

    expect(numberOfUpdatedStudentsInfo).toBe(1);
  });

  it('Should find student info by user id', async () => {
    const user = await insertUser();

    const studentInfo = createStudentInfo(
      createFakeStudentInfo({ userId: user.id })
    );

    const createdStudentInfo = await studentInfoDb.create(studentInfo.spread());

    const foundStudentInfo = await studentInfoDb.findByUserId({
      userId: user.id,
    });

    expect(foundStudentInfo.id).toBe(createdStudentInfo.id);
  });

  it('Should delete sudent info by id', async () => {
    const user = await insertUser();

    const studentInfo = createStudentInfo(
      createFakeStudentInfo({ userId: user.id })
    );

    const createdStudentInfo = await studentInfoDb.create(studentInfo.spread());

    const numberOfDeletedStudentsInfo = await studentInfoDb.deleteById({
      id: createdStudentInfo.id,
    });

    expect(numberOfDeletedStudentsInfo).toBe(1);
  });
});
