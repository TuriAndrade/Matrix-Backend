import buildUserDb from './userDb';
import db from '../../database/models';

const userDb = buildUserDb({ db });

export default userDb;
