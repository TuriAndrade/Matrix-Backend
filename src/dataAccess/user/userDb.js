export default function buildUserDb({ db }) {
  async function create(attributes) {
    return db.User.create(attributes);
  }

  async function deleteById({ id }) {
    return db.User.destroy({
      where: {
        id,
      },
    });
  }

  async function findByUsername({ username }) {
    const user = await db.User.findOne({
      where: {
        username,
      },
    });

    return user;
  }

  async function updateById({ id, ...attributes }) {
    return db.User.update(
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
