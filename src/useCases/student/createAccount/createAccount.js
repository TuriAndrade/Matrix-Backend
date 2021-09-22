export default function buildCreateAccount({
  userDb,
  createUser,
  DatabaseError,
}) {
  return async function createAccount({ username, email, name, password }) {
    const usernameExists = await userDb.findByUsername({ username });

    if (usernameExists)
      throw new DatabaseError({
        message: 'User must have a unique username.',
        code: 'exists',
        attr: 'username',
        model: 'user',
        statusCode: 409,
      });

    const emailExists = await userDb.findByEmail({ email });

    if (emailExists)
      throw new DatabaseError({
        message: 'User must have a unique email.',
        code: 'exists',
        attr: 'email',
        model: 'user',
        statusCode: 409,
      });

    const user = createUser({
      username,
      email,
      name,
      password,
      role: 'student',
    });

    const createdUser = await userDb.create(user.spread());
    return { id: createdUser.id };
  };
}
