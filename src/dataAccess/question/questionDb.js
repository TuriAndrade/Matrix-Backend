export default function buildQuestionDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.question.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'question',
        originError: e,
      });
    }
  }

  async function findById({ id }) {
    try {
      const question = await db.question.findOne({
        where: {
          id,
        },
      });

      return question;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'question',
        originError: e,
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.question.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'question',
        originError: e,
      });
    }
  }

  async function updateById({ id, ...attributes }) {
    try {
      const updated = await db.question.update(
        { ...attributes },
        {
          where: {
            id,
          },
        }
      );
      return updated;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'question',
        originError: e,
      });
    }
  }

  return {
    create,
    findById,
    deleteById,
    updateById,
  };
}
