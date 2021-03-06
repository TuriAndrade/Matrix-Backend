import createFakeUser from '../../../../__tests__/fixtures/fakeUser';
import createFakeStudentInfo from '../../../../__tests__/fixtures/fakeStudentInfo';
import { insertUser } from '../../../../__tests__/utils/seed';
import truncate from '../../../../__tests__/utils/truncate';
import { createAccount } from './index';

describe('Create account', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create account', async () => {
    const user = createFakeUser();
    const studentInfo = createFakeStudentInfo({ userId: undefined });

    const createdAccount = await createAccount({ ...user, ...studentInfo });

    expect(createdAccount.userId).toEqual(expect.any(Number));
    expect(createdAccount.studentInfoId).toEqual(expect.any(Number));
  });

  it('Should throw errors creating account', async () => {
    const user = await insertUser();

    const existentUsername = createFakeUser({ username: user.username });

    await expect(createAccount({ ...existentUsername })).rejects.toThrow(
      'User must have a unique username.'
    );

    const existentEmail = createFakeUser({ email: user.email });

    await expect(createAccount({ ...existentEmail })).rejects.toThrow(
      'User must have a unique email.'
    );
  });
});
