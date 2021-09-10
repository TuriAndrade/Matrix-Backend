import createFakeMock from '../../../__tests__/fixtures/fakeMock';
import { createMock, updateMock } from './index';

describe('Mock entity', () => {
  it('Should create mock', () => {
    const mock = createMock(createFakeMock());

    expect(mock).toEqual(
      expect.objectContaining({
        getName: expect.any(Function),
        getExam: expect.any(Function),
        getSubject: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update mock', () => {
    const updatedMock = updateMock(createFakeMock());

    expect(updatedMock).toEqual(
      expect.objectContaining({
        getName: expect.any(Function),
        getExam: expect.any(Function),
        getSubject: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some mock attributes', () => {
    const updatedName = updateMock({ name: 'new_name_for_mock' });

    expect(updatedName).toEqual(
      expect.objectContaining({
        getName: expect.any(Function),
        getExam: expect.any(Function),
        getSubject: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedExam = updateMock({
      exam: 'new_exam',
    });

    expect(updatedExam).toEqual(
      expect.objectContaining({
        getName: expect.any(Function),
        getExam: expect.any(Function),
        getSubject: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedSubjectAndDisciplineAndLevel = updateMock({
      subject: 'new_subject',
      discipline: 'new_discipline',
      level: 'new_level',
    });

    expect(updatedSubjectAndDisciplineAndLevel).toEqual(
      expect.objectContaining({
        getName: expect.any(Function),
        getExam: expect.any(Function),
        getSubject: expect.any(Function),
        getDiscipline: expect.any(Function),
        getLevel: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefName = createFakeMock({ name: undefined });

    expect(() => createMock(undefName)).toThrow('Mock must have a name.');

    const invalidSubject = createFakeMock({ subject: false });

    expect(() => createMock(invalidSubject)).toThrow(
      'Mock must have a valid subject.'
    );
  });

  it('Should throw errors on update', () => {
    const nullName = createFakeMock({ name: null });

    expect(() => updateMock(nullName)).toThrow('Mock must have a valid name.');
  });
});
