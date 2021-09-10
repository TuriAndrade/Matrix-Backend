export default function buildMockDb({ db }) {
  async function create(attributes) {
    return db.Mock.create(attributes);
  }

  async function findByName({ name }) {
    const mock = await db.Mock.findOne({
      where: {
        name,
      },
    });

    return mock;
  }

  async function findById({ id }) {
    const mock = await db.Mock.findOne({
      where: {
        id,
      },
    });

    return mock;
  }

  async function deleteById({ id }) {
    return db.Mock.destroy({
      where: {
        id,
      },
    });
  }

  async function updateById({ id, ...attributes }) {
    return db.Mock.update(
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
