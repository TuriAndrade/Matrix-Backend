export default function buildStudyHistory({ CustomError }) {
  function checkUserId(userId) {
    if (typeof userId !== 'number')
      throw new CustomError({
        message: 'Study history must have a user id that is a number.',
        code: 'invalid',
        attr: 'userId',
        entity: 'studyHistory',
      });
  }

  function checkDiscipline(discipline) {
    if (typeof discipline.length > 100)
      throw new CustomError({
        message:
          'Study history must have a discipline with at most 100 characters',
        code: 'big',
        attr: 'discipline',
        entity: 'studyHistory',
      });
  }

  function checkLevel(level) {
    if (typeof level.length > 100)
      throw new CustomError({
        message: 'Study history must have a level with at most 100 characters',
        code: 'big',
        attr: 'level',
        entity: 'studyHistory',
      });
  }

  function createStudyHistory({
    subject,
    hasStudied,
    discipline,
    level = null,
    userId,
  }) {
    if (!subject)
      throw new CustomError({
        message: 'Study history must have a subject.',
        code: 'undefined',
        attr: 'subject',
        entity: 'studyHistory',
      });
    if (!discipline)
      throw new CustomError({
        message: 'Study history must have a discipline.',
        code: 'undefined',
        attr: 'discipline',
        entity: 'studyHistory',
      });
    if (level !== null && !level)
      throw new CustomError({
        message: 'Study history must have a valid level.',
        code: 'invalid',
        attr: 'level',
        entity: 'studyHistory',
      });
    if (!userId)
      throw new CustomError({
        message: 'Study history must have a user id.',
        code: 'undefined',
        attr: 'userId',
        entity: 'studyHistory',
      });

    checkDiscipline(discipline);
    if (level) checkLevel(level);
    checkUserId(userId);

    return Object.freeze({
      getSubject: () => subject,
      hasStudied: () => !!hasStudied,
      getDiscipline: () => discipline,
      getLevel: () => level,
      getUserId: () => userId,
      spread: () => ({
        subject,
        hasStudied: !!hasStudied,
        discipline,
        level,
        userId,
      }),
    });
  }

  function updateStudyHistory({
    subject,
    hasStudied,
    discipline,
    level,
    userId,
  }) {
    if (subject !== undefined && !subject) {
      throw new CustomError({
        message: 'Study history must have a valid subject.',
        code: 'invalid',
        attr: 'subject',
        entity: 'studyHistory',
      });
    }

    if (discipline !== undefined) {
      if (!discipline)
        throw new CustomError({
          message: 'Study history must have a valid discipline.',
          code: 'invalid',
          attr: 'discipline',
          entity: 'studyHistory',
        });
      else checkDiscipline(discipline);
    }

    if (level !== undefined && level !== null) {
      if (!level)
        throw new CustomError({
          message: 'Study history must have a valid level.',
          code: 'invalid',
          attr: 'level',
          entity: 'studyHistory',
        });
      else checkLevel(level);
    }

    if (userId !== undefined) {
      if (!userId)
        throw new CustomError({
          message: 'Study history must have a valid user id.',
          code: 'invalid',
          attr: 'userId',
          entity: 'studyHistory',
        });
      else checkUserId(userId);
    }

    return Object.freeze({
      getSubject: () => subject,
      hasStudied: () => !!hasStudied,
      getDiscipline: () => discipline,
      getLevel: () => level,
      getUserId: () => userId,
      spread: () => ({
        subject,
        hasStudied: !!hasStudied,
        discipline,
        level,
        userId,
      }),
    });
  }

  return {
    createStudyHistory,
    updateStudyHistory,
  };
}
