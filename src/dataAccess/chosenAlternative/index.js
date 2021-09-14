import buildChosenAlternativeDb from './chosenAlternativeDb';
import db from '../../database/models';

const chosenAlternativeDb = buildChosenAlternativeDb({ db });

export default chosenAlternativeDb;
