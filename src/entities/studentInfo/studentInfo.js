export default function buildStudentInfo({ EntityError }) {
  function checkUserId(userId) {
    if (typeof userId !== 'number')
      throw new EntityError({
        message: 'Student info must have a user id that is a number.',
        code: 'invalid',
        attr: 'userId',
        entity: 'studentInfo',
      });
  }

  function checkTimesReproved(timesReproved) {
    if (typeof timesReproved !== 'number')
      throw new EntityError({
        message: 'Student info must have times reproved that is a number.',
        code: 'invalid',
        attr: 'timesReproved',
        entity: 'studentInfo',
      });
  }

  function checkSchoolYear(schoolYear) {
    if (typeof schoolYear !== 'number')
      throw new EntityError({
        message: 'Student info must have a school year that is a number.',
        code: 'invalid',
        attr: 'schoolYear',
        entity: 'studentInfo',
      });
  }

  function checkSchoolType(schoolType) {
    const allowedTypes = ['EMR', 'EMI', 'EJA', 'Outro'];

    if (!allowedTypes.includes(schoolType))
      throw new EntityError({
        message: 'Student info must have a valid school type.',
        code: 'invalid',
        attr: 'schoolType',
        entity: 'studentInfo',
      });
  }

  function checkFederativeUnit(federativeUnit) {
    const allowedFederativeUnits = [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO',
      'DF',
    ];

    if (!allowedFederativeUnits.includes(federativeUnit))
      throw new EntityError({
        message: 'Student info must have a valid federative unit.',
        code: 'invalid',
        attr: 'federativeUnit',
        entity: 'studentInfo',
      });
  }

  function checkWeakDisciplines(weakDisciplines) {
    if (!Array.isArray(weakDisciplines))
      throw new EntityError({
        message: 'Student info must have weak disciplines in an array.',
        code: 'invalid',
        attr: 'weakDisciplines',
        entity: 'studentInfo',
      });

    const allowedDisciplines = [
      'Artes',
      'Biologia',
      'Espanhol',
      'Física',
      'Geografia',
      'História',
      'Inglês',
      'Literatura',
      'Matemática',
      'Português',
      'Química',
      'Redação',
    ];

    weakDisciplines.forEach((weakDiscipline) => {
      if (!allowedDisciplines.includes(weakDiscipline))
        throw new EntityError({
          message: 'Student info must have valid weak disciplines.',
          code: 'invalid',
          attr: 'weakDisciplines',
          entity: 'studentInfo',
        });
    });
  }

  function createStudentInfo({
    timesReproved = null,
    schoolYear = null,
    schoolType = null,
    federativeUnit = null,
    weakDisciplines = null,
    userId,
  }) {
    if (timesReproved !== 0 && timesReproved !== null && !timesReproved)
      throw new EntityError({
        message: 'Student info must have valid times reproved.',
        code: 'invalid',
        attr: 'timesReproved',
        entity: 'studentInfo',
      });
    if (schoolYear !== null && !schoolYear)
      throw new EntityError({
        message: 'Student info must have a valid school year.',
        code: 'invalid',
        attr: 'schoolYear',
        entity: 'studentInfo',
      });
    if (schoolType !== null && !schoolType)
      throw new EntityError({
        message: 'Student info must have a valid school type.',
        code: 'invalid',
        attr: 'schoolType',
        entity: 'studentInfo',
      });
    if (federativeUnit !== null && !federativeUnit)
      throw new EntityError({
        message: 'Student info must have a valid federative unit.',
        code: 'invalid',
        attr: 'federativeUnit',
        entity: 'studentInfo',
      });
    if (weakDisciplines !== null && !weakDisciplines)
      throw new EntityError({
        message: 'Student info must have valid weak disciplines.',
        code: 'invalid',
        attr: 'weakDisciplines',
        entity: 'studentInfo',
      });
    if (userId !== 0 && !userId)
      throw new EntityError({
        message: 'Student info must have a user id.',
        code: 'undefined',
        attr: 'userId',
        entity: 'studentInfo',
      });

    checkTimesReproved(timesReproved);
    checkSchoolYear(schoolYear);
    checkSchoolType(schoolType);
    checkFederativeUnit(federativeUnit);
    checkWeakDisciplines(weakDisciplines);
    checkUserId(userId);

    return Object.freeze({
      getTimesReproved: () => timesReproved,
      getSchoolYear: () => schoolYear,
      getSchoolType: () => schoolType,
      getFederativeUnit: () => federativeUnit,
      getWeakDisciplines: () => weakDisciplines,
      getUserId: () => userId,
      spread: () => ({
        timesReproved,
        schoolYear,
        schoolType,
        federativeUnit,
        weakDisciplines,
        userId,
      }),
    });
  }

  function updateStudentInfo({
    timesReproved,
    schoolYear,
    schoolType,
    federativeUnit,
    weakDisciplines,
    userId,
  }) {
    if (
      timesReproved !== undefined &&
      timesReproved !== null &&
      timesReproved !== 0
    ) {
      if (!timesReproved)
        throw new EntityError({
          message: 'Student info must have valid times reproved.',
          code: 'invalid',
          attr: 'timesReproved',
          entity: 'studentInfo',
        });
      else checkTimesReproved(timesReproved);
    }

    if (schoolYear !== undefined && schoolYear !== null) {
      if (!schoolYear)
        throw new EntityError({
          message: 'Student info must have a valid school year.',
          code: 'invalid',
          attr: 'schoolYear',
          entity: 'studentInfo',
        });
      else checkSchoolYear(schoolYear);
    }

    if (schoolType !== undefined && schoolType !== null) {
      if (!schoolType)
        throw new EntityError({
          message: 'Student info must have a valid school type.',
          code: 'invalid',
          attr: 'schoolType',
          entity: 'studentInfo',
        });
      else checkSchoolType(schoolType);
    }

    if (federativeUnit !== undefined && federativeUnit !== null) {
      if (!federativeUnit)
        throw new EntityError({
          message: 'Student info must have a valid federative unit.',
          code: 'invalid',
          attr: 'federativeUnit',
          entity: 'studentInfo',
        });
      else checkFederativeUnit(federativeUnit);
    }

    if (weakDisciplines !== undefined && weakDisciplines !== null) {
      if (!weakDisciplines)
        throw new EntityError({
          message: 'Student info must have valid weak disciplines.',
          code: 'invalid',
          attr: 'weakDisciplines',
          entity: 'studentInfo',
        });
      else checkWeakDisciplines(weakDisciplines);
    }

    if (userId !== undefined && userId !== 0) {
      if (!userId)
        throw new EntityError({
          message: 'Student info must have a valid user id.',
          code: 'invalid',
          attr: 'userId',
          entity: 'studentInfo',
        });
      else checkUserId(userId);
    }

    return Object.freeze({
      getTimesReproved: () => timesReproved,
      getSchoolYear: () => schoolYear,
      getSchoolType: () => schoolType,
      getFederativeUnit: () => federativeUnit,
      getWeakDisciplines: () => weakDisciplines,
      getUserId: () => userId,
      spread: () => ({
        timesReproved,
        schoolYear,
        schoolType,
        federativeUnit,
        weakDisciplines,
        userId,
      }),
    });
  }

  return { createStudentInfo, updateStudentInfo };
}
