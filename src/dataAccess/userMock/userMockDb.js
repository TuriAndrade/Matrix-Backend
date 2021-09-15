export default function buildUserMockDb({ db }) {
  async function create(attributes) {
    return db.userMock.create(attributes);
  }

  async function deleteById({ id }) {
    return db.userMock.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserId({ userId }) {
    const userMocks = await db.userMock.findAll({
      where: {
        userId,
      },
    });

    return userMocks;
  }

  async function findByMockId({ mockId }) {
    const userMocks = await db.userMock.findAll({
      where: {
        mockId,
      },
    });

    return userMocks;
  }

  async function findByUserAndMockIds({ userId, mockId }) {
    const userMocks = await db.userMock.findAll({
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
