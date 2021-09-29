export default function buildTopicDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.topic.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'studentInfo',
        originError: e,
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.topic.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'studentInfo',
        originError: e,
      });
    }
  }

  async function findById({ id }) {
    try {
      const topic = await db.topic.findOne({
        where: {
          id,
        },
      });
      return topic;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'studentInfo',
        originError: e,
      });
    }
  }

  async function updateById({ id, ...attributes }) {
    try {
      const updated = await db.topic.update(
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
        model: 'studentInfo',
        originError: e,
      });
    }
  }

  return { create, deleteById, findById, updateById };
}
