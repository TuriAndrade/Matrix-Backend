export default function buildTopicDb({ db }) {
  async function create(attributes) {
    return db.Topic.create(attributes);
  }

  async function deleteById({ id }) {
    return db.Topic.destroy({
      where: {
        id,
      },
    });
  }

  async function findById({ id }) {
    const topic = await db.Topic.findOne({
      where: {
        id,
      },
    });

    return topic;
  }

  async function updateById({ id, ...attributes }) {
    return db.Topic.update(
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
