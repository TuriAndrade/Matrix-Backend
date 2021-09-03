export default function buildStudyHistory() {
  function checkUserId(userId) {
    if (typeof userId !== 'number')
      throw new Error('Study history must have a user id that is a number.');
  }

  function createStudyHistory({
    subject,
    hasStudied,
    discipline,
    level,
    userId,
  }) {
    if (!subject) throw new Error('Study history must have a subject.');
    if (!discipline) throw new Error('Study history must have a discipline.');
    if (!userId) throw new Error('Study history must have a user id.');

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
      throw new Error('Study history must have a valid subject.');
    }

    if (discipline !== undefined && !discipline) {
      throw new Error('Study history must have a valid discipline.');
    }

    if (userId !== undefined) {
      if (!userId) throw new Error('Study history must have a valid user id.');
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
