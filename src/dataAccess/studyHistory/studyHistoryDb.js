export default function buildStudyHistoryDb({ db }) {
  async function create(attributes) {
    return db.studyHistory.create(attributes);
  }

  async function deleteById({ id }) {
    return db.studyHistory.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserId({ userId }) {
    const studyHistories = await db.studyHistory.findAll({
      where: {
        userId,
      },
    });

    return studyHistories;
  }

  async function updateById({ id, ...attributes }) {
    return db.studyHistory.update(
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
    updateById,
  };
}
