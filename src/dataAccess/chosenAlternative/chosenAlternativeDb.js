export default function buildChosenAlternativeDb({ db }) {
  async function create(attributes) {
    return db.chosenAlternative.create(attributes);
  }

  async function deleteById({ id }) {
    return db.chosenAlternative.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserMockId({ userMockId }) {
    const chosenAlternatives = await db.chosenAlternative.findAll({
      where: {
        userMockId,
      },
    });

    return chosenAlternatives;
  }

  async function findByUserMockAndQuestionIds({ userMockId, questionId }) {
    const chosenAlternative = await db.chosenAlternative.findOne({
      where: {
        userMockId,
        questionId,
      },
    });

    return chosenAlternative;
  }

  return {
    create,
    deleteById,
    findByUserMockId,
    findByUserMockAndQuestionIds,
  };
}
