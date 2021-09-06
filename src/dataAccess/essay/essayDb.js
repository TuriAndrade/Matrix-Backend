export default function buildEssayDb({ db }) {
  async function create(attributes) {
    return db.Essay.create(attributes);
  }

  async function deleteById({ id }) {
    return db.Essay.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserId({ userId }) {
    const essays = await db.Essay.findAll({
      where: {
        userId,
      },
    });

    return essays;
  }

  async function findByTopicId({ topicId }) {
    const essays = await db.Essay.findAll({
      where: {
        topicId,
      },
    });

    return essays;
  }

  async function findByUserAndTopicIds({ userId, topicId }) {
    const essays = await db.Essay.findAll({
      where: {
        topicId,
        userId,
      },
    });

    return essays;
  }

  async function updateById({ id, ...attributes }) {
    return db.Essay.update(
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
