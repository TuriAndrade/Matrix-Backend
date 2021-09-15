export default function buildTopicDb({ db }) {
  async function create(attributes) {
    return db.topic.create(attributes);
  }

  async function deleteById({ id }) {
    return db.topic.destroy({
      where: {
        id,
      },
    });
  }

  async function findById({ id }) {
    const topic = await db.topic.findOne({
      where: {
        id,
      },
    });

    return topic;
  }

  async function updateById({ id, ...attributes }) {
    return db.topic.update(
      { ...attributes },
      {
        where: {
          id,
        },
      }
    );
  }

  return { create, deleteById, findById, updateById };
}
