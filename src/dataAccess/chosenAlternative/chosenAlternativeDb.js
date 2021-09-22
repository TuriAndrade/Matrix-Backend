export default function buildChosenAlternativeDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.chosenAlternative.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'chosenAlternative',
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.chosenAlternative.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'chosenAlternative',
      });
    }
  }

  async function findByUserMockId({ userMockId }) {
    try {
      const chosenAlternatives = await db.chosenAlternative.findAll({
        where: {
          userMockId,
        },
      });

      return chosenAlternatives;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'chosenAlternative',
      });
    }
  }

  async function findByUserMockAndQuestionIds({ userMockId, questionId }) {
    try {
      const chosenAlternative = await db.chosenAlternative.findOne({
        where: {
          userMockId,
          questionId,
        },
      });

      return chosenAlternative;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'chosenAlternative',
      });
    }
  }

  return {
    create,
    deleteById,
    findByUserMockId,
    findByUserMockAndQuestionIds,
  };
}
