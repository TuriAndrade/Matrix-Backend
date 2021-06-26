import { sequelize } from '../../src/database/models';

export default function truncate() {
  return Promise.all(
    Object.values(sequelize.models).map((model) =>
      model.destroy({
        truncate: true,
        force: true,
        cascade: true,
      })
    )
  );
}
