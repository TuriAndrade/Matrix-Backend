import createFakeEssay from '../../../__tests__/fixtures/fakeEssay';
import { createEssay, updateEssay } from './index';

describe('Essay entity', () => {
  it('Should create essay', () => {
    const essay = createEssay(createFakeEssay());

    expect(essay).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getTitle: expect.any(Function),
        getGrade: expect.any(Function),
        getTopicId: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update essay', () => {
    const updatedEssay = updateEssay(createFakeEssay());

    expect(updatedEssay).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getTitle: expect.any(Function),
        getGrade: expect.any(Function),
        getTopicId: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should update only one/some essay attributes', () => {
    const updatedTitle = updateEssay({ title: 'new_title_for_essay' });

    expect(updatedTitle).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getTitle: expect.any(Function),
        getGrade: expect.any(Function),
        getTopicId: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );

    const updatedLink = updateEssay({
      link: 'new_link',
    });

    expect(updatedLink).toEqual(
      expect.objectContaining({
        getLink: expect.any(Function),
        getTitle: expect.any(Function),
        getGrade: expect.any(Function),
        getTopicId: expect.any(Function),
        getUserId: expect.any(Function),
        spread: expect.any(Function),
      })
    );
  });

  it('Should throw errors on create', () => {
    const undefTitle = createFakeEssay({ title: undefined });

    expect(() => createEssay(undefTitle)).toThrow('Essay must have a title.');

    const undefLink = createFakeEssay({ link: undefined });

    expect(() => createEssay(undefLink)).toThrow('Essay must have a link.');

    const invalidGrade = createFakeEssay({ grade: 'not_number' });

    expect(() => createEssay(invalidGrade)).toThrow(
      'Essay must have a grade that is a number.'
    );
  });

  it('Should throw errors on update', () => {
    const nullTitle = createFakeEssay({ title: null });

    expect(() => updateEssay(nullTitle)).toThrow(
      'Essay must have a valid title.'
    );

    const nullLink = createFakeEssay({ link: null });

    expect(() => updateEssay(nullLink)).toThrow(
      'Essay must have a valid link.'
    );
  });
});
