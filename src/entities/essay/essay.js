export default function buildEssay({ CustomError }) {
  function checkTitle(title) {
    if (title.length > 100)
      throw new CustomError({
        message: 'Essay must have a title with at most 100 characters.',
        code: 'big',
        attr: 'title',
        entity: 'essay',
      });
  }

  function checkGrade(grade) {
    if (typeof grade !== 'number')
      throw new CustomError({
        message: 'Essay must have a grade that is a number.',
        code: 'invalid',
        attr: 'grade',
        entity: 'essay',
      });
  }

  function checkUserId(userId) {
    if (typeof userId !== 'number')
      throw new CustomError({
        message: 'Essay must have a user id that is a number.',
        code: 'invalid',
        attr: 'userId',
        entity: 'essay',
      });
  }

  function checkTopicId(topicId) {
    if (typeof topicId !== 'number')
      throw new CustomError({
        message: 'Essay must have a topic id that is a number.',
        code: 'invalid',
        attr: 'topicId',
        entity: 'essay',
      });
  }

  function createEssay({ link, title, grade = null, topicId, userId }) {
    if (!link)
      throw new CustomError({
        message: 'Essay must have a link.',
        code: 'undefined',
        attr: 'link',
        entity: 'essay',
      });
    if (!title)
      throw new CustomError({
        message: 'Essay must have a title.',
        code: 'undefined',
        attr: 'title',
        entity: 'essay',
      });
    if (grade !== null && !grade)
      throw new CustomError({
        message: 'Essay must have a valid grade.',
        code: 'invalid',
        attr: 'grade',
        entity: 'essay',
      });
    if (!topicId)
      throw new CustomError({
        message: 'Essay must have a topic id.',
        code: 'undefined',
        attr: 'topicId',
        entity: 'essay',
      });
    if (!userId)
      throw new CustomError({
        message: 'Essay must have a user id.',
        code: 'undefined',
        attr: 'userId',
        entity: 'essay',
      });

    checkTitle(title);
    if (grade) checkGrade(grade);
    checkUserId(userId);
    checkTopicId(topicId);

    return Object.freeze({
      getLink: () => link,
      getTitle: () => title,
      getGrade: () => grade,
      getTopicId: () => topicId,
      getUserId: () => userId,
      spread: () => ({
        link,
        title,
        grade,
        topicId,
        userId,
      }),
    });
  }

  function updateEssay({ link, title, grade, topicId, userId }) {
    if (link !== undefined && !link)
      throw new CustomError({
        message: 'Essay must have a valid link.',
        code: 'invalid',
        attr: 'link',
        entity: 'essay',
      });

    if (title !== undefined) {
      if (!title)
        throw new CustomError({
          message: 'Essay must have a valid title.',
          code: 'invalid',
          attr: 'title',
          entity: 'essay',
        });
      else checkTitle(title);
    }

    if (grade !== undefined && grade !== null) {
      if (!grade)
        throw new CustomError({
          message: 'Essay must have a valid grade.',
          code: 'invalid',
          attr: 'grade',
          entity: 'essay',
        });
      else checkGrade(grade);
    }

    if (topicId !== undefined) {
      if (!topicId)
        throw new CustomError({
          message: 'Essay must have a valid topic id.',
          code: 'invalid',
          attr: 'topicId',
          entity: 'essay',
        });
      else checkTopicId(topicId);
    }

    if (userId !== undefined) {
      if (!userId)
        throw new CustomError({
          message: 'Essay must have a valid user id.',
          code: 'invalid',
          attr: 'userId',
          entity: 'essay',
        });
      else checkUserId(userId);
    }

    return Object.freeze({
      getLink: () => link,
      getTitle: () => title,
      getGrade: () => grade,
      getTopicId: () => topicId,
      getUserId: () => userId,
      spread: () => ({
        link,
        title,
        grade,
        topicId,
        userId,
      }),
    });
  }

  return { createEssay, updateEssay };
}
