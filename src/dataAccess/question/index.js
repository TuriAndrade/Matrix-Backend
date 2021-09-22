import buildQuestionDb from './questionDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const questionDb = buildQuestionDb({ db, DatabaseError });

export default questionDb;
