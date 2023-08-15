import { nanoid } from 'nanoid';
import util from 'util';
import { storage as gc } from '@/app/api/_utils/config';
import { Image } from '@/app/api/_types';

export const uploadImage = async (file: Image) =>
  new Promise((resolve, reject) => {
    const bucket = gc.bucket('post-photos');
    const { originalname, buffer } = file;
    const { format } = util;

    const modifiedName = nanoid() + originalname;

    const blob = bucket.file(modifiedName.replace(/ /g, '_'));
    const blobStream = blob.createWriteStream({
      resumable: false,
    });
    blobStream
      .on('finish', () => {
        const publicUrl = format(
          `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        resolve(publicUrl);
      })
      .on('error', () => {
        // console.log(error);
        reject(`Unable to upload image, something went wrong`);
      })
      .end(buffer);
  });
