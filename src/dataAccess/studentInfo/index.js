import buildStudentInfoDb from './studentInfoDb';
import db from '../../database/models';

const studentInfoDb = buildStudentInfoDb({ db });

export default studentInfoDb;
