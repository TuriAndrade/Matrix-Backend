import buildChosenAlternativeDb from './chosenAlternativeDb';
import db from '../../database/models';
import { DatabaseError } from '../../utils/customError';

const chosenAlternativeDb = buildChosenAlternativeDb({
  db,
  DatabaseError,
});

export default chosenAlternativeDb;
