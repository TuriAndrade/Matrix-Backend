export default function buildStudentInfoDb({ db, DatabaseError }) {
  async function create(attributes) {
    try {
      const created = await db.studentInfo.create(attributes);
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
      const deleted = await db.studentInfo.destroy({
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

  async function findByUserId({ userId }) {
    try {
      const studentInfo = await db.studentInfo.findOne({
        where: {
          userId,
        },
      });

      return studentInfo;
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
      const updated = await db.studentInfo.update(
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

  return {
    create,
    deleteById,
    findByUserId,
    updateById,
  };
}
