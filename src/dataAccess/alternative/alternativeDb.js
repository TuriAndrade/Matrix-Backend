export default function buildAlternativeDb({ db }) {
  async function create(attributes) {
    return db.Alternative.create(attributes);
  }

  async function findById({ id }) {
    const alternative = await db.Alternative.findOne({
      where: {
        id,
      },
    });

    return alternative;
  }

  async function findByQuestionId({ questionId, isCorrect = undefined }) {
    const alternatives = await db.Alternative.findAll({
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
    return db.Alternative.destroy({
      where: {
        id,
      },
    });
  }

  async function updateById({ id, ...attributes }) {
    return db.Alternative.update(
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
