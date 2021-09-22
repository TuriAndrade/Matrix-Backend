import buildMockDb from './mockDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const mockDb = buildMockDb({ db, DatabaseError });

export default mockDb;
