export default function buildEssay({ EntityError }) {
  function checkTitle(title) {
    if (title.length > 100)
      throw new EntityError({
        message: 'Essay must have a title with at most 100 characters.',
        code: 'big',
        attr: 'title',
        entity: 'essay',
      });
  }

  function checkGrade(grade) {
    if (typeof grade !== 'number')
      throw new EntityError({
        message: 'Essay must have a grade that is a number.',
        code: 'invalid',
        attr: 'grade',
        entity: 'essay',
      });
  }

  function checkUserId(userId) {
    if (typeof userId !== 'number')
      throw new EntityError({
        message: 'Essay must have a user id that is a number.',
        code: 'invalid',
        attr: 'userId',
        entity: 'essay',
      });
  }

  function checkTopicId(topicId) {
    if (typeof topicId !== 'number')
      throw new EntityError({
        message: 'Essay must have a topic id that is a number.',
        code: 'invalid',
        attr: 'topicId',
        entity: 'essay',
      });
  }

  function createEssay({ link, title, grade = null, topicId, userId }) {
    if (!link)
      throw new EntityError({
        message: 'Essay must have a link.',
        code: 'undefined',
        attr: 'link',
        entity: 'essay',
      });
    if (!title)
      throw new EntityError({
        message: 'Essay must have a title.',
        code: 'undefined',
        attr: 'title',
        entity: 'essay',
      });
    if (grade !== null && !grade && grade !== 0)
      throw new EntityError({
        message: 'Essay must have a valid grade.',
        code: 'invalid',
        attr: 'grade',
        entity: 'essay',
      });
    if (!topicId && topicId !== 0)
      throw new EntityError({
        message: 'Essay must have a topic id.',
        code: 'undefined',
        attr: 'topicId',
        entity: 'essay',
      });
    if (!userId && userId !== 0)
      throw new EntityError({
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
      throw new EntityError({
        message: 'Essay must have a valid link.',
        code: 'invalid',
        attr: 'link',
        entity: 'essay',
      });

    if (title !== undefined) {
      if (!title)
        throw new EntityError({
          message: 'Essay must have a valid title.',
          code: 'invalid',
          attr: 'title',
          entity: 'essay',
        });
      else checkTitle(title);
    }

    if (grade !== undefined && grade !== null && grade !== 0) {
      if (!grade)
        throw new EntityError({
          message: 'Essay must have a valid grade.',
          code: 'invalid',
          attr: 'grade',
          entity: 'essay',
        });
      else checkGrade(grade);
    }

    if (topicId !== undefined && topicId !== 0) {
      if (!topicId)
        throw new EntityError({
          message: 'Essay must have a valid topic id.',
          code: 'invalid',
          attr: 'topicId',
          entity: 'essay',
        });
      else checkTopicId(topicId);
    }

    if (userId !== undefined && userId !== 0) {
      if (!userId)
        throw new EntityError({
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
