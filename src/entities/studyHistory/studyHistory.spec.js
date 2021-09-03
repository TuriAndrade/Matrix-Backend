import createFakeStudyHistory from '../../../__tests__/fixtures/fakeStudyHistory';
import { createStudyHistory, updateStudyHistory } from './index';

describe('Study history entity', () => {
  it('Should create study history', () => {
    const studyHistory = createStudyHistory(createFakeStudyHistory());

    expect(studyHistory).toEqual(
      expect.objectContaining({
        getSubject: expect.any(Function),
        hasStudied: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update study history', () => {
    const updatedStudyHistory = createStudyHistory(createFakeStudyHistory());

    expect(updatedStudyHistory).toEqual(
      expect.objectContaining({
        getSubject: expect.any(Function),
        hasStudied: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some study history attributes', () => {
    const updatedSubject = updateStudyHistory({ subject: 'new_subject' });

    expect(updatedSubject).toEqual(
      expect.objectContaining({
        getSubject: expect.any(Function),
        hasStudied: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedSubjectAndLevel = updateStudyHistory({
      subject: 'new_subject',
      level: 'new_level',
    });

    expect(updatedSubjectAndLevel).toEqual(
      expect.objectContaining({
        getSubject: expect.any(Function),
        hasStudied: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should delete level', () => {
    const deletedLevel = updateStudyHistory({ level: null });

    expect(deletedLevel.getLevel()).toBe(null);
  });

  it('Should throw errors on create', () => {
    const undefSubject = createFakeStudyHistory({ subject: undefined });

    expect(() => createStudyHistory(undefSubject)).toThrow(
      'Study history must have a subject.'
    );

    const undefDiscipline = createFakeStudyHistory({ discipline: undefined });

    expect(() => createStudyHistory(undefDiscipline)).toThrow(
      'Study history must have a discipline.'
    );

    const invalidUserId = createFakeStudyHistory({ userId: 'string' });

    expect(() => createStudyHistory(invalidUserId)).toThrow(
      'Study history must have a user id that is a number.'
    );
  });

  it('Should throw errors on update', () => {
    const invalidSubject = createFakeStudyHistory({ subject: null });

    expect(() => updateStudyHistory(invalidSubject)).toThrow(
      'Study history must have a valid subject.'
    );

    const invalidDiscipline = createFakeStudyHistory({ discipline: null });

    expect(() => updateStudyHistory(invalidDiscipline)).toThrow(
      'Study history must have a valid discipline.'
    );

    const invalidUserId = createFakeStudyHistory({ userId: 'string' });

    expect(() => updateStudyHistory(invalidUserId)).toThrow(
      'Study history must have a user id that is a number.'
    );
  });
});
