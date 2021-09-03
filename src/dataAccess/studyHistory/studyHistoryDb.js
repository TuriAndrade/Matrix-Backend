export default function buildStudyHistoryDb({ db }) {
  async function create(attributes) {
    return db.StudyHistory.create(attributes);
  }

  async function deleteById({ id }) {
    return db.StudyHistory.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserId({ userId }) {
    const studyHistories = await db.StudyHistory.findAll({
      where: {
        userId,
      },
    });

    return studyHistories;
  }

  async function updateById({ id, ...attributes }) {
    return db.StudyHistory.update(
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
