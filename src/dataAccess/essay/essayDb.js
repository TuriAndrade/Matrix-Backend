export default function buildEssayDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.essay.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'essay',
        originError: e,
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.essay.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'essay',
        originError: e,
      });
    }
  }

  async function findByUserId({ userId }) {
    try {
      const essays = await db.essay.findAll({
        where: {
          userId,
        },
      });

      return essays;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'essay',
        originError: e,
      });
    }
  }

  async function findByTopicId({ topicId }) {
    try {
      const essays = await db.essay.findAll({
        where: {
          topicId,
        },
      });

      return essays;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'essay',
        originError: e,
      });
    }
  }

  async function findByUserAndTopicIds({ userId, topicId }) {
    try {
      const essays = await db.essay.findAll({
        where: {
          topicId,
          userId,
        },
      });

      return essays;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'essay',
        originError: e,
      });
    }
  }

  async function updateById({ id, ...attributes }) {
    try {
      const updated = await db.essay.update(
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
        model: 'essay',
        originError: e,
      });
    }
  }

  return {
    create,
    deleteById,
    findByUserId,
    findByTopicId,
    findByUserAndTopicIds,
    updateById,
  };
}
