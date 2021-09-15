export default function buildUserDb({ db }) {
  async function create(attributes) {
    return db.user.create(attributes);
  }

  async function deleteById({ id }) {
    return db.user.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUsername({ username }) {
    const user = await db.user.findOne({
      where: {
        username,
      },
    });

    return user;
  }

  async function updateById({ id, ...attributes }) {
    return db.user.update(
      { ...attributes },
      {
        where: {
          id,
        },
      }
    );
  }

  return { create, deleteById, findByUsername, updateById };
}
