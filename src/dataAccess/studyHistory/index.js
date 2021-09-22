import buildStudyHistoryDb from './studyHistoryDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const studyHistoryDb = buildStudyHistoryDb({ db, DatabaseError });

export default studyHistoryDb;
