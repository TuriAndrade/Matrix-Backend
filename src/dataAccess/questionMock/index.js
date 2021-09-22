import buildQuestionMockDb from './questionMockDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const questionMockDb = buildQuestionMockDb({ db, DatabaseError });

export default questionMockDb;
