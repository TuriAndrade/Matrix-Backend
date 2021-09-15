export default function buildQuestionDb({ db }) {
  async function create(attributes) {
    return db.question.create(attributes);
  }

  async function findById({ id }) {
    const question = await db.question.findOne({
      where: {
        id,
      },
    });

    return question;
  }

  async function deleteById({ id }) {
    return db.question.destroy({
      where: {
        id,
      },
    });
  }

  async function updateById({ id, ...attributes }) {
    return db.question.update(
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
