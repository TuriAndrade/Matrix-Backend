export default function buildQuestionDb({ db }) {
  async function create(attributes) {
    return db.Question.create(attributes);
  }

  async function findById({ id }) {
    const question = await db.Question.findOne({
      where: {
        id,
      },
    });

    return question;
  }

  async function deleteById({ id }) {
    return db.Question.destroy({
      where: {
        id,
      },
    });
  }

  async function updateById({ id, ...attributes }) {
    return db.Question.update(
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
    deleteById,
    updateById,
  };
}
