import createFakeUser from '../../../../__tests__/fixtures/fakeUser';
import { insertUser } from '../../../../__tests__/utils/seed';
import truncate from '../../../../__tests__/utils/truncate';
import { createAccountController } from './index';

describe('Create account controller', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create account', async () => {
    const user = createFakeUser();

    const request = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: { ...user },
    };

    const response = await createAccountController(request);

    expect(response).toEqual(
      expect.objectContaining({
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: { id: expect.any(Number) },
      })
    );
  });

  it('Should return error responses', async () => {
    const user = await insertUser();
    const existentUsername = createFakeUser({ username: user.username });

    const existentUsernameRequest = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: { ...existentUsername },
    };

    const existentUsernameResponse = await createAccountController(
      existentUsernameRequest
    );

    expect(existentUsernameResponse).toEqual(
      expect.objectContaining({
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 409,
        body: {
          error: {
            message: 'User must have a unique username.',
            code: 'exists',
            attr: 'username',
            model: 'user',
            statusCode: 409,
            name: 'DatabaseError',
          },
        },
      })
    );

    const existentEmail = createFakeUser({ email: user.email });

    const existentEmailRequest = {
      headers: {
        'Content-Type': 'application/json',
      },
      body: { ...existentEmail },
    };

    const existentEmailRepsonse = await createAccountController(
      existentEmailRequest
    );

    expect(existentEmailRepsonse).toEqual(
      expect.objectContaining({
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 409,
        body: {
          error: {
            message: 'User must have a unique email.',
            code: 'exists',
            attr: 'email',
            model: 'user',
            statusCode: 409,
            name: 'DatabaseError',
          },
        },
      })
    );
  });
});
