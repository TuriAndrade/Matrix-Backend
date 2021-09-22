export default function buildUserDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.user.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'user',
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.user.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'user',
      });
    }
  }

  async function findByUsername({ username }) {
    try {
      const user = await db.user.findOne({
        where: {
          username,
        },
      });
      return user;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'user',
      });
    }
  }

  async function findByEmail({ email }) {
    try {
      const user = await db.user.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'user',
      });
    }
  }

  async function updateById({ id, ...attributes }) {
    try {
      const updated = await db.user.update(
        { ...attributes },
        {
          where: {
            id,
          },
        }
      );
      return updated;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'user',
      });
    }
  }

  return { create, deleteById, findByUsername, findByEmail, updateById };
}
