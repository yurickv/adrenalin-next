import * as Yup from 'yup';

type File = {
  type: string;
};
export const createPostSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(100),
  description: Yup.string().required().min(10).max(1000),
  topic: Yup.string().required().oneOf(['Training', 'Motivation', 'Nutrition']),
  image: Yup.mixed()
    .required()
    .test('fileType', 'Invalid file format', value => {
      if (!value) return true;

      const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
      return allowedFormats.includes((value as File).type);
    }),
});

export const updatePostSchema = Yup.object().shape({
  title: Yup.string().min(3).max(100),
  description: Yup.string().min(10).max(1000),
  topic: Yup.string().oneOf(['Training', 'Motivation', 'Nutrition']),
  image: Yup.mixed().test('fileType', 'Invalid file format', value => {
    if (!value) return true;

    const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
    return allowedFormats.includes((value as File).type);
  }),
  atLeastOneField: Yup.mixed().test(
    'atLeastOneField',
    'At least one field is required',
    (value, context) => {
      const { title, description, topic, image } = context.parent;
      return (
        title !== undefined ||
        description !== undefined ||
        topic !== undefined ||
        image !== undefined
      );
    }
  ),
});
