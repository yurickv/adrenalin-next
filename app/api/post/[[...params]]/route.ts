import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/app/api/_utils/database';
import Post from '@/app/api/_schemas/post.schema';
import { setQueryForMongoose } from '@/app/api/_helpers/setQueryForMongoose';
import { setFilters } from '@/app/api/_helpers/setFilters';

export const GET = async (req: NextRequest) => {
  try {
    const {
      page = 1,
      limit = 10,
      topic,
      search,
    } = Object.fromEntries(req.nextUrl.searchParams);
    const skip = (Number(page) - 1) * Number(limit);

    await connectToDB();

    const filters = setFilters(topic, search);
    const filterKeys = Object.keys(filters);
    const query = setQueryForMongoose(filterKeys, filters);

    const posts = await Post.find(query)
      .skip(skip)
      .limit(limit as number)
      .sort({ createdAt: -1 });

    const countAllDocuments = await Post.countDocuments(query);

    return NextResponse.json(
      { posts, pages: Math.ceil(countAllDocuments / Number(limit)) },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: 'Unable to get posts' },
      { status: 500 }
    );
  }
};
