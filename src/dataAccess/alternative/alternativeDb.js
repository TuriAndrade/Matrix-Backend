export default function buildAlternativeDb({ db }) {
  async function create(attributes) {
    return db.alternative.create(attributes);
  }

  async function findById({ id }) {
    const alternative = await db.alternative.findOne({
      where: {
        id,
      },
    });

    return alternative;
  }

  async function findByQuestionId({ questionId, isCorrect = undefined }) {
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
  }

  async function deleteById({ id }) {
    return db.alternative.destroy({
      where: {
        id,
      },
    });
  }

  async function updateById({ id, ...attributes }) {
    return db.alternative.update(
      { ...attributes },
      {
        where: {
          id,
        },
      }
    );
  }

  return {
    create,
    findById,
    findByQuestionId,
    deleteById,
    updateById,
  };
}
