export default function buildChosenAlternativeDb({ db }) {
  async function create(attributes) {
    return db.ChosenAlternative.create(attributes);
  }

  async function deleteById({ id }) {
    return db.ChosenAlternative.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserMockId({ userMockId }) {
    const chosenAlternatives = await db.ChosenAlternative.findAll({
      where: {
        userMockId,
      },
    });

    return chosenAlternatives;
  }

  async function findByUserMockAndQuestionIds({ userMockId, questionId }) {
    const chosenAlternative = await db.ChosenAlternative.findOne({
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
