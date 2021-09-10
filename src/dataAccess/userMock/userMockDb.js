export default function buildUserMockDb({ db }) {
  async function create(attributes) {
    return db.UserMock.create(attributes);
  }

  async function deleteById({ id }) {
    return db.UserMock.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserId({ userId }) {
    const userMocks = await db.UserMock.findAll({
      where: {
        userId,
      },
    });

    return userMocks;
  }

  async function findByMockId({ mockId }) {
    const userMocks = await db.UserMock.findAll({
      where: {
        mockId,
      },
    });

    return userMocks;
  }

  async function findByUserAndMockIds({ userId, mockId }) {
    const userMocks = await db.UserMock.findAll({
      where: {
        mockId,
        userId,
      },
    });

    return userMocks;
  }

  return {
    create,
    deleteById,
    findByUserId,
    findByMockId,
    findByUserAndMockIds,
  };
}
