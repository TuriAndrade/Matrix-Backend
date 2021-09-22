export default function buildCreateAccount({
  userDb,
  createUser,
  DatabaseError,
}) {
  return async function createAccount({ username, email, name, password }) {
    const exists = await userDb.findByUsername({ username });

    if (exists) {
      throw new DatabaseError({
        message: 'User must have a unique username.',
        code: 'exists',
        attr: 'username',
        model: 'user',
      });
    }

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
