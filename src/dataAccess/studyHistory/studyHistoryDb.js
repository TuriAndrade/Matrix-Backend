export default function buildStudyHistoryDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.studyHistory.create(attributes);
      return created;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'studyHistory',
      });
    }
  }

  async function deleteById({ id }) {
    try {
      const deleted = await db.studyHistory.destroy({
        where: {
          id,
        },
      });
      return deleted;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'studyHistory',
      });
    }
  }

  async function findByUserId({ userId }) {
    try {
      const studyHistories = await db.studyHistory.findAll({
        where: {
          userId,
        },
      });

      return studyHistories;
    } catch (e) {
      throw new DatabaseError({
        message: 'Database error.',
        model: 'studyHistory',
      });
    }
  }

  async function updateById({ id, ...attributes }) {
    try {
      const updated = await db.studyHistory.update(
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
        model: 'studyHistory',
      });
    }
  }

  return {
    create,
    deleteById,
    findByUserId,
    updateById,
  };
}
