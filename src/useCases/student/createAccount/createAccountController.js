export default function buildCreateAccountController({ createAccount }) {
  return async function createAccountController(httpRequest) {
    try {
      const userInfo = httpRequest.body;
      const createdAccount = await createAccount(userInfo);
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: 200,
        body: createdAccount,
      };
    } catch (error) {
      return {
        headers: {
          'Content-Type': 'application/json',
        },
        statusCode: error.statusCode || 400,
        body: { error: { message: error.message, ...error } },
      };
    }
  };
}
