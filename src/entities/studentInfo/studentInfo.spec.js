import createFakeStudentInfo from '../../../__tests__/fixtures/fakeStudentInfo';
import { createStudentInfo, updateStudentInfo } from './index';

describe('Student info entity', () => {
  it('Should create studentInfo', () => {
    const studentInfo = createStudentInfo(createFakeStudentInfo());

    expect(studentInfo).toEqual(
      expect.objectContaining({
        getTimesReproved: expect.any(Function),
        getSchoolYear: expect.any(Function),
        getSchoolType: expect.any(Function),
        getFederativeUnit: expect.any(Function),
        getWeakDisciplines: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update student info', () => {
    const updatedStudentInfo = updateStudentInfo(createFakeStudentInfo());

    expect(updatedStudentInfo).toEqual(
      expect.objectContaining({
        getTimesReproved: expect.any(Function),
        getSchoolYear: expect.any(Function),
        getSchoolType: expect.any(Function),
        getFederativeUnit: expect.any(Function),
        getWeakDisciplines: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some student info attributes', () => {
    const updatedTimesReproved = updateStudentInfo({ timesReproved: 5 });

    expect(updatedTimesReproved).toEqual(
      expect.objectContaining({
        getTimesReproved: expect.any(Function),
        getSchoolYear: expect.any(Function),
        getSchoolType: expect.any(Function),
        getFederativeUnit: expect.any(Function),
        getWeakDisciplines: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedSchoolYearAndSchoolType = updateStudentInfo({
      schoolType: 'EMR',
      schoolYear: 3,
    });

    expect(updatedSchoolYearAndSchoolType).toEqual(
      expect.objectContaining({
        getTimesReproved: expect.any(Function),
        getSchoolYear: expect.any(Function),
        getSchoolType: expect.any(Function),
        getFederativeUnit: expect.any(Function),
        getWeakDisciplines: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefUserId = createFakeStudentInfo({ userId: undefined });

    expect(() => createStudentInfo(undefUserId)).toThrow(
      'Student info must have a user id.'
    );

    const invalidSchoolYear = createFakeStudentInfo({
      schoolYear: 'not_number',
    });

    expect(() => createStudentInfo(invalidSchoolYear)).toThrow(
      'Student info must have a school year that is a number.'
    );
  });

  it('Should throw errors on update', () => {
    const nullUserId = createFakeStudentInfo({ userId: null });

    expect(() => updateStudentInfo(nullUserId)).toThrow(
      'Student info must have a valid user id.'
    );

    const invalidSchoolType = createFakeStudentInfo({
      schoolType: 'not_valid',
    });

    expect(() => updateStudentInfo(invalidSchoolType)).toThrow(
      'Student info must have a valid school type.'
    );
  });
});
