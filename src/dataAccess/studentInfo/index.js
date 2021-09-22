import buildStudentInfoDb from './studentInfoDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const studentInfoDb = buildStudentInfoDb({ db, DatabaseError });

export default studentInfoDb;
