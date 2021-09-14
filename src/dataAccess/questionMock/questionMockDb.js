export default function buildQuestionMockDb({ db }) {
  async function create(attributes) {
    return db.QuestionMock.create(attributes);
  }

  async function deleteById({ id }) {
    return db.QuestionMock.destroy({
      where: {
        id,
      },
    });
  }

  async function findByQuestionId({ questionId }) {
    const questionMocks = await db.QuestionMock.findAll({
      where: {
        questionId,
      },
    });

    return questionMocks;
  }

  async function findByMockId({ mockId }) {
    const questionMocks = await db.QuestionMock.findAll({
      where: {
        mockId,
      },
    });

    return questionMocks;
  }

  async function findByQuestionAndMockIds({ questionId, mockId }) {
    const questionMocks = await db.QuestionMock.findAll({
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
