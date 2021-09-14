export default function buildChosenAlternative({ CustomError }) {
  function checkQuestionId(questionId) {
    if (typeof questionId !== 'number')
      throw new CustomError({
        message: 'Chosen alternative must have a question id that is a number.',
        code: 'invalid',
        attr: 'questionId',
        entity: 'chosenAlternative',
      });
  }

  function checkAlternativeId(alternativeId) {
    if (typeof alternativeId !== 'number')
      throw new CustomError({
        message:
          'Chosen alternative must have an alternative id that is a number.',
        code: 'invalid',
        attr: 'alternativeId',
        entity: 'chosenAlternative',
      });
  }

  function checkUserMockId(userMockId) {
    if (typeof userMockId !== 'number')
      throw new CustomError({
        message:
          'Chosen alternative must have a user mock id that is a number.',
        code: 'invalid',
        attr: 'userMockId',
        entity: 'chosenAlternative',
      });
  }

  function createChosenAlternative({ questionId, alternativeId, userMockId }) {
    if (!questionId && questionId !== 0)
      throw new CustomError({
        message: 'Chosen alternative must have a question id.',
        code: 'undefined',
        attr: 'questionId',
        entity: 'chosenAlternative',
      });

    if (!alternativeId && alternativeId !== 0)
      throw new CustomError({
        message: 'Chosen alternative must have an alternative id.',
        code: 'undefined',
        attr: 'alternativeId',
        entity: 'chosenAlternative',
      });

    if (!userMockId && userMockId !== 0)
      throw new CustomError({
        message: 'Chosen alternative must have a user mock id.',
        code: 'undefined',
        attr: 'userMockId',
        entity: 'chosenAlternative',
      });

    checkQuestionId(questionId);
    checkAlternativeId(alternativeId);
    checkUserMockId(userMockId);

    return Object.freeze({
      getQuestionId: () => questionId,
      getAlternativeId: () => alternativeId,
      getUserMockId: () => userMockId,
      spread: () => ({ questionId, alternativeId, userMockId }),
    });
  }

  function updateChosenAlternative({ questionId, alternativeId, userMockId }) {
    if (questionId !== undefined && questionId !== 0) {
      if (!questionId)
        throw new CustomError({
          message: 'Chosen alternative must have a valid question id.',
          code: 'invalid',
          attr: 'questionId',
          entity: 'chosenAlternative',
        });
      else checkQuestionId(questionId);
    }

    if (alternativeId !== undefined && alternativeId !== 0) {
      if (!alternativeId)
        throw new CustomError({
          message: 'Chosen alternative must have a valid alternative id.',
          code: 'invalid',
          attr: 'alternativeId',
          entity: 'chosenAlternative',
        });
      else checkAlternativeId(alternativeId);
    }

    if (userMockId !== undefined && userMockId !== 0) {
      if (!userMockId)
        throw new CustomError({
          message: 'Chosen alternative must have a valid user mock id.',
          code: 'invalid',
          attr: 'userMockId',
          entity: 'chosenAlternative',
        });
      else checkUserMockId(userMockId);
    }

    return Object.freeze({
      getQuestionId: () => questionId,
      getAlternativeId: () => alternativeId,
      getUserMockId: () => userMockId,
      spread: () => ({ questionId, alternativeId, userMockId }),
    });
  }

  return { createChosenAlternative, updateChosenAlternative };
}
