export default function buildAlternative({ CustomError }) {
  function checkQuestionId(questionId) {
    if (typeof questionId !== 'number')
      throw new CustomError({
        message: 'Alternative must have a question id that is a number.',
        code: 'invalid',
        attr: 'questionId',
        entity: 'alternative',
      });
  }

  function createAlternative({ html, delta, isCorrect, questionId }) {
    if (!html)
      throw new CustomError({
        message: 'Alternative must have a html.',
        code: 'undefined',
        attr: 'html',
        entity: 'alternative',
      });

    if (!delta)
      throw new CustomError({
        message: 'Alternative must have a delta.',
        code: 'undefined',
        attr: 'delta',
        entity: 'alternative',
      });

    if (!questionId)
      throw new CustomError({
        message: 'Alternative must have a question id.',
        code: 'undefined',
        attr: 'questionId',
        entity: 'alternative',
      });

    checkQuestionId(questionId);

    return Object.freeze({
      getHtml: () => html,
      getDelta: () => delta,
      isCorrect: () => !!isCorrect,
      getQuestionId: () => questionId,
      spread: () => ({ html, delta, isCorrect: !!isCorrect, questionId }),
    });
  }

  function updateAlternative({ html, delta, isCorrect, questionId }) {
    if (html !== undefined && !html)
      throw new CustomError({
        message: 'Alternative must have a valid html.',
        code: 'invalid',
        attr: 'html',
        entity: 'alternative',
      });

    if (delta !== undefined && !delta)
      throw new CustomError({
        message: 'Alternative must have a valid delta.',
        code: 'invalid',
        attr: 'delta',
        entity: 'alternative',
      });

    if (questionId !== undefined) {
      if (!questionId)
        throw new CustomError({
          message: 'Alternative must have a valid question id.',
          code: 'invalid',
          attr: 'questionId',
          entity: 'alternative',
        });
      else checkQuestionId(questionId);
    }

    return Object.freeze({
      getHtml: () => html,
      getDelta: () => delta,
      isCorrect: () => (isCorrect === undefined ? undefined : !!isCorrect),
      getQuestionId: () => questionId,
      spread: () => ({
        html,
        delta,
        isCorrect: isCorrect === undefined ? undefined : !!isCorrect,
        questionId,
      }),
    });
  }

  return { createAlternative, updateAlternative };
}
