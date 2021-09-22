import buildUserMockDb from './userMockDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const userMockDb = buildUserMockDb({ db, DatabaseError });

export default userMockDb;
