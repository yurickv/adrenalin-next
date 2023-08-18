import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/app/api/_utils/database';
import Post from '@/app/api/_schemas/post.schema';
import { BadRequest, NotFound } from '@/app/api/_helpers/errors';
import { uploadImage } from '@/app/api/_helpers/uploadImage';
import { transformImage } from '@/app/api/_helpers/transformImage';

type Params = {
  id?: string;
};

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  try {
    if (!params.id) {
      throw new BadRequest('You must add id in your query params!');
    }

    await connectToDB();

    const post = await Post.findById(params.id);

    if (!post) {
      throw new NotFound(`Post with ${params.id} not found`);
    }
    return NextResponse.json({ post }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message || 'Unable to get post' },
      { status: e.status || 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Params }
) => {
  try {
    if (!params.id) {
      throw new BadRequest('You must add id in your query params!');
    }
    await connectToDB();

    await Post.findByIdAndRemove(params.id);

    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message || 'Unable to delete post' },
      {
        status: e.status || 500,
      }
    );
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: Params }
) => {
  try {
    const contentLength = req.headers.get('content-length');
    if (!Number(contentLength)) {
      throw new BadRequest(
        'At least one field is required! (title, description, topic, image)'
      );
    }

    const data = await req.formData();
    const transformedData = Object.fromEntries(data.entries());

    const post = await Post.findById(params.id);
    if (!post) {
      throw new NotFound(`Contact with id:'${params.id}' not found`);
    }

    const file: File | null = data.get('image') as unknown as File;
    const markup = data.get('markup') as string;

    if (file) {
      const transformedImage = await transformImage(file);

      const uploadedImage = await uploadImage(transformedImage);
      post.image = uploadedImage as string;
    }

    if (markup) {
      const newMarkup = addImageSrcToMarkup(markup, post.image as string);
      post.markup = newMarkup;
    }
    post.save();

    return NextResponse.json({ post }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { message: e.message || 'Unable to update post' },
      { status: e.status || 500 }
    );
  }
};
