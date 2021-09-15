export default function buildStudentInfoDb({ db }) {
  async function create(attributes) {
    return db.studentInfo.create(attributes);
  }

  async function deleteById({ id }) {
    return db.studentInfo.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUserId({ userId }) {
    const studentInfo = await db.studentInfo.findOne({
      where: {
        userId,
      },
    });

    return studentInfo;
  }

  async function updateById({ id, ...attributes }) {
    return db.studentInfo.update(
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
