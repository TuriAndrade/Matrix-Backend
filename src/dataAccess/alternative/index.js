import buildAlternativeDb from './alternativeDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const alternativeDb = buildAlternativeDb({ db, DatabaseError });

export default alternativeDb;
