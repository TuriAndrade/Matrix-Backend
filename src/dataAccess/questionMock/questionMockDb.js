export default function buildQuestionMockDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.questionMock.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'questionMock',
        originError: e,
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.questionMock.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'questionMock',
        originError: e,
      });
    }
  }

  async function findByQuestionId({ questionId }) {
    try {
      const questionMocks = await db.questionMock.findAll({
        where: {
          questionId,
        },
      });

      return questionMocks;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'questionMock',
        originError: e,
      });
    }
  }

  async function findByMockId({ mockId }) {
    try {
      const questionMocks = await db.questionMock.findAll({
        where: {
          mockId,
        },
      });

      return questionMocks;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'questionMock',
        originError: e,
      });
    }
  }

  async function findByQuestionAndMockIds({ questionId, mockId }) {
    try {
      const questionMocks = await db.questionMock.findAll({
        where: {
          mockId,
          questionId,
        },
      });

      return questionMocks;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'questionMock',
        originError: e,
      });
    }
  }

  return {
    create,
    deleteById,
    findByQuestionId,
    findByMockId,
    findByQuestionAndMockIds,
  };
}
