import buildUserMockDb from './userMockDb';
import db from '../../database/models';

const userMockDb = buildUserMockDb({ db });

export default userMockDb;
