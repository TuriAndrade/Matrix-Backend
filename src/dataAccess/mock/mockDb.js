export default function buildMockDb({ db }) {
  async function create(attributes) {
    return db.mock.create(attributes);
  }

  async function findByName({ name }) {
    const mock = await db.mock.findOne({
      where: {
        name,
      },
    });

    return mock;
  }

  async function findById({ id }) {
    const mock = await db.mock.findOne({
      where: {
        id,
      },
    });

    return mock;
  }

  async function deleteById({ id }) {
    return db.mock.destroy({
      where: {
        id,
      },
    });
  }

  async function updateById({ id, ...attributes }) {
    return db.mock.update(
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
    findByName,
    findById,
    deleteById,
    updateById,
  };
}
