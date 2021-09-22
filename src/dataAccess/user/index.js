import buildUserDb from './userDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const userDb = buildUserDb({ db, DatabaseError });

export default userDb;
