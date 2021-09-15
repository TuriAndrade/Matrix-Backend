export default function buildEssayDb({ db }) {
  async function create(attributes) {
    return db.essay.create(attributes);
  }

  async function deleteById({ id }) {
    return db.essay.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserId({ userId }) {
    const essays = await db.essay.findAll({
      where: {
        userId,
      },
    });

    return essays;
  }

  async function findByTopicId({ topicId }) {
    const essays = await db.essay.findAll({
      where: {
        topicId,
      },
    });

    return essays;
  }

  async function findByUserAndTopicIds({ userId, topicId }) {
    const essays = await db.essay.findAll({
      where: {
        topicId,
        userId,
      },
    });

    return essays;
  }

  async function updateById({ id, ...attributes }) {
    return db.essay.update(
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
    deleteById,
    findByUserId,
    findByTopicId,
    findByUserAndTopicIds,
    updateById,
  };
}
