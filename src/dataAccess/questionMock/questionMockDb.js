export default function buildQuestionMockDb({ db }) {
  async function create(attributes) {
    return db.questionMock.create(attributes);
  }

  async function deleteById({ id }) {
    return db.questionMock.destroy({
      where: {
        id,
      },
    });
  }

  async function findByQuestionId({ questionId }) {
    const questionMocks = await db.questionMock.findAll({
      where: {
        questionId,
      },
    });

    return questionMocks;
  }

  async function findByMockId({ mockId }) {
    const questionMocks = await db.questionMock.findAll({
      where: {
        mockId,
      },
    });

    return questionMocks;
  }

  async function findByQuestionAndMockIds({ questionId, mockId }) {
    const questionMocks = await db.questionMock.findAll({
      where: {
        mockId,
        questionId,
      },
    });

    return questionMocks;
  }

  return {
    create,
    deleteById,
    findByQuestionId,
    findByMockId,
    findByQuestionAndMockIds,
  };
}
