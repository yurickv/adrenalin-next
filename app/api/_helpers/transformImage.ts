import { Image } from '@/app/api/_types';

export const transformImage = async (image: File) => {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return { buffer, originalname: image.name } as Image;
};
