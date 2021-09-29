export default function buildAlternativeDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.alternative.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'alternative',
        originError: e,
      });
    }
  }

  async function findById({ id }) {
    try {
      const alternative = await db.alternative.findOne({
        where: {
          id,
        },
      });

      return alternative;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'alternative',
        originError: e,
      });
    }
  }

  async function findByQuestionId({ questionId, isCorrect = undefined }) {
    try {
      const alternatives = await db.alternative.findAll({
        where:
          isCorrect === undefined
            ? {
                questionId,
              }
            : {
                questionId,
                isCorrect,
              },
      });

      return alternatives;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'alternative',
        originError: e,
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.alternative.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'alternative',
        originError: e,
      });
    }
  }

  async function updateById({ id, ...attributes }) {
    try {
      const update = await db.alternative.update(
        { ...attributes },
        {
          where: {
            id,
          },
        }
      );
      return update;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'alternative',
        originError: e,
      });
    }
  }

  return {
    create,
    findById,
    findByQuestionId,
    deleteById,
    updateById,
  };
}
