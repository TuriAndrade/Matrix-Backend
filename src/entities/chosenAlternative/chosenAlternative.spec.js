import createFakeChosenAlternative from '../../../__tests__/fixtures/fakeChosenAlternative';
import { createChosenAlternative, updateChosenAlternative } from './index';

describe('Chosen alternative entity', () => {
  it('Should create chosen alternative', () => {
    const chosenAlternative = createChosenAlternative(
      createFakeChosenAlternative()
    );

    expect(chosenAlternative).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getAlternativeId: expect.any(Function),
        getUserMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update chosen alternative', () => {
    const updatedChosenAlternative = updateChosenAlternative(
      createFakeChosenAlternative()
    );

    expect(updatedChosenAlternative).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getAlternativeId: expect.any(Function),
        getUserMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some chosen alternative attributes', () => {
    const updatedQuestionId = updateChosenAlternative({
      questionId: Math.floor(Math.random() * 1000),
    });

    expect(updatedQuestionId).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getAlternativeId: expect.any(Function),
        getUserMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedUserMockId = updateChosenAlternative({
      mockId: Math.floor(Math.random() * 1000),
    });

    expect(updatedUserMockId).toEqual(
      expect.objectContaining({
        getQuestionId: expect.any(Function),
        getAlternativeId: expect.any(Function),
        getUserMockId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefQuestionId = createFakeChosenAlternative({
      questionId: undefined,
    });

    expect(() => createChosenAlternative(undefQuestionId)).toThrow(
      'Chosen alternative must have a question id.'
    );

    const undefUserMockId = createFakeChosenAlternative({
      userMockId: undefined,
    });

    expect(() => createChosenAlternative(undefUserMockId)).toThrow(
      'Chosen alternative must have a user mock id.'
    );

    const invalidQuestionId = createFakeChosenAlternative({
      questionId: 'not_number',
    });

    expect(() => createChosenAlternative(invalidQuestionId)).toThrow(
      'Chosen alternative must have a question id that is a number.'
    );
  });

  it('Should throw errors on update', () => {
    const nullQuestionId = createFakeChosenAlternative({ questionId: null });

    expect(() => updateChosenAlternative(nullQuestionId)).toThrow(
      'Chosen alternative must have a valid question id.'
    );

    const nullUserMockId = createFakeChosenAlternative({ userMockId: null });

    expect(() => updateChosenAlternative(nullUserMockId)).toThrow(
      'Chosen alternative must have a valid user mock id.'
    );
  });
});
