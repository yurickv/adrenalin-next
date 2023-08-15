import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/app/api/_utils/database';
import Post from '@/app/api/_schemas/post.schema';

type Filter = {
  topic?: RegExp;
  title?: RegExp;
};
export const GET = async (req: NextRequest) => {
  try {
    const {
      page = 1,
      limit = 10,
      topic,
      title,
    } = Object.fromEntries(req.nextUrl.searchParams);
    const skip = (Number(page) - 1) * Number(limit);

    await connectToDB();

    const filters: Filter = {};
    if (topic) {
      filters.topic = new RegExp(topic, 'i');
    }
    if (title) {
      filters.title = new RegExp(title, 'i');
    }

    const query = {
      $or: [
        { title: { $regex: filters?.title || '' } },
        { topic: { $regex: filters?.topic || '' } },
      ],
    };

    const posts = await Post.find(query)
      .skip(skip)
      .limit(limit as number)
      .sort({ createdAt: -1 });

    const pages = await Post.countDocuments(query);

    return NextResponse.json({ posts, pages }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: 'Unable to get posts' },
      { status: 500 }
    );
  }
};
