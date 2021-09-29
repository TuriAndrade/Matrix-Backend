export default function buildUserMockDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.userMock.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'userMock',
        originError: e,
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.userMock.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'userMock',
        originError: e,
      });
    }
  }

  async function findByUserId({ userId }) {
    try {
      const userMocks = await db.userMock.findAll({
        where: {
          userId,
        },
      });

      return userMocks;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'userMock',
        originError: e,
      });
    }
  }

  async function findByMockId({ mockId }) {
    try {
      const userMocks = await db.userMock.findAll({
        where: {
          mockId,
        },
      });

      return userMocks;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'userMock',
        originError: e,
      });
    }
  }

  async function findByUserAndMockIds({ userId, mockId }) {
    try {
      const userMocks = await db.userMock.findAll({
        where: {
          mockId,
          userId,
        },
      });

      return userMocks;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'userMock',
        originError: e,
      });
    }
  }

  return {
    create,
    deleteById,
    findByUserId,
    findByMockId,
    findByUserAndMockIds,
  };
}
