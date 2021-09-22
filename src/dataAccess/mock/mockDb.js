export default function buildMockDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.mock.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'mock',
      });
    }
  }

  async function findByName({ name }) {
    try {
      const mock = await db.mock.findOne({
        where: {
          name,
        },
      });

      return mock;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'mock',
      });
    }
  }

  async function findById({ id }) {
    try {
      const mock = await db.mock.findOne({
        where: {
          id,
        },
      });

      return mock;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'mock',
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.mock.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'mock',
      });
    }
  }

  async function updateById({ id, ...attributes }) {
    try {
      const updated = await db.mock.update(
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
        model: 'mock',
      });
    }
  }

  return {
    create,
    findByName,
    findById,
    deleteById,
    updateById,
  };
}
