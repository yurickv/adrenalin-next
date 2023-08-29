import { FilterQuery } from 'mongoose';
import { Filter } from '@/app/api/_types';

export const setQueryForMongoose = (keys: string[], filters: Filter) => {
  let query: FilterQuery<any> = {};

  if (keys.includes('search') && keys.includes('topic')) {
    query = {
      $and: [
        {
          topic: { $regex: filters.topic },
        },
        {
          $or: [
            { title: { $regex: filters.search } },
            { description: { $regex: filters.search } },
            { markup: { $regex: filters.search } },
          ],
        },
      ],
    };
  } else if (keys.includes('search')) {
    query = {
      $or: [
        { title: { $regex: filters.search } },
        { description: { $regex: filters.search } },
        { markup: { $regex: filters.search } },
      ],
    };
  } else if (keys.includes('search')) {
    query = {
      $and: [
        {
          topic: {
            $regex: filters.topic,
          },
        },
      ],
    };
  }
  return query;
};
