export default function builMock({ EntityError }) {
  function checkName(name) {
    if (name.length > 100)
      throw new EntityError({
        message: 'Mock must have a name with at most 100 characters.',
        code: 'big',
        attr: 'name',
        entity: 'mock',
      });
  }

  function checkExam(exam) {
    if (exam.length > 100)
      throw new EntityError({
        message: 'Mock must have a exam with at most 100 characters.',
        code: 'big',
        attr: 'exam',
        entity: 'mock',
      });
  }

  function checkSubject(subject) {
    if (subject.length > 100)
      throw new EntityError({
        message: 'Mock must have a subject with at most 100 characters.',
        code: 'big',
        attr: 'subject',
        entity: 'mock',
      });
  }

  function checkDiscipline(discipline) {
    if (discipline.length > 100)
      throw new EntityError({
        message: 'Mock must have a discipline with at most 100 characters.',
        code: 'big',
        attr: 'discipline',
        entity: 'mock',
      });
  }

  function checkLevel(level) {
    if (level.length > 100)
      throw new EntityError({
        message: 'Mock must have a level with at most 100 characters.',
        code: 'big',
        attr: 'level',
        entity: 'mock',
      });
  }

  function createMock({
    name,
    exam = null,
    subject = null,
    discipline = null,
    level = null,
  }) {
    if (!name)
      throw new EntityError({
        message: 'Mock must have a name.',
        code: 'undefined',
        attr: 'name',
        entity: 'mock',
      });

    if (exam !== null && !exam)
      throw new EntityError({
        message: 'Mock must have a valid exam.',
        code: 'invalid',
        attr: 'exam',
        entity: 'mock',
      });

    if (subject !== null && !subject)
      throw new EntityError({
        message: 'Mock must have a valid subject.',
        code: 'invalid',
        attr: 'subject',
        entity: 'mock',
      });

    if (discipline !== null && !discipline)
      throw new EntityError({
        message: 'Mock must have a valid discipline.',
        code: 'invalid',
        attr: 'discipline',
        entity: 'mock',
      });

    if (level !== null && !level)
      throw new EntityError({
        message: 'Mock must have a valid level.',
        code: 'invalid',
        attr: 'level',
        entity: 'mock',
      });

    checkName(name);
    if (exam) checkExam(exam);
    if (subject) checkSubject(subject);
    if (discipline) checkDiscipline(discipline);
    if (level) checkLevel(level);

    return Object.freeze({
      getName: () => name,
      getExam: () => exam,
      getSubject: () => subject,
      getDiscipline: () => discipline,
      getLevel: () => level,
      spread: () => ({
        name,
        exam,
        subject,
        discipline,
        level,
      }),
    });
  }

  function updateMock({
    name,
    exam = null,
    subject = null,
    discipline = null,
    level = null,
  }) {
    if (name !== undefined && !name)
      throw new EntityError({
        message: 'Mock must have a valid name.',
        code: 'invalid',
        attr: 'name',
        entity: 'mock',
      });

    if (exam !== undefined && exam !== null) {
      if (!exam)
        throw new EntityError({
          message: 'Mock must have a valid exam.',
          code: 'invalid',
          attr: 'exam',
          entity: 'mock',
        });
      else checkExam(exam);
    }

    if (subject !== undefined && subject !== null) {
      if (!subject)
        throw new EntityError({
          message: 'Mock must have a valid subject.',
          code: 'invalid',
          attr: 'subject',
          entity: 'mock',
        });
      else checkSubject(subject);
    }

    if (discipline !== undefined && discipline !== null) {
      if (!discipline)
        throw new EntityError({
          message: 'Mock must have a valid discipline.',
          code: 'invalid',
          attr: 'discipline',
          entity: 'mock',
        });
      else checkDiscipline(discipline);
    }

    if (level !== undefined && level !== null) {
      if (!level)
        throw new EntityError({
          message: 'Mock must have a valid level.',
          code: 'invalid',
          attr: 'level',
          entity: 'mock',
        });
      else checkLevel(level);
    }

    return Object.freeze({
      getName: () => name,
      getExam: () => exam,
      getSubject: () => subject,
      getDiscipline: () => discipline,
      getLevel: () => level,
      spread: () => ({
        name,
        exam,
        subject,
        discipline,
        level,
      }),
    });
  }

  return { createMock, updateMock };
}
