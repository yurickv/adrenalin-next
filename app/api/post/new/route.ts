import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/app/api/_utils/database';
import Post from '@/app/api/_schemas/post.schema';

import { createPostSchema } from '@/app/api/_schemas/post.yup.schema';
import { transformImage } from '@/app/api/_helpers/transformImage';
import { uploadImage } from '@/app/api/_helpers/uploadImage';

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const transformedData = Object.fromEntries(data.entries());
    await createPostSchema.validate(transformedData);

    const file: File | null = data.get('image') as unknown as File;
    const transformedImage = await transformImage(file);

    const uploadedImage = await uploadImage(transformedImage);

    await connectToDB();

    const newPost = new Post({ ...transformedData, image: uploadedImage });
    await newPost.save();

    return NextResponse.json({ post: 'newPost' }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message || 'Failed to create a new post' },
      { status: e.message ? 400 : 500 }
    );
  }
};
