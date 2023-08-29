import { Filter } from '@/app/api/_types';

export const setFilters = (
  topic: string | undefined,
  search: string | undefined
) => {
  const filters: Filter = {};
  if (topic) {
    filters.topic = new RegExp(topic, 'i');
  }
  if (search) {
    filters.search = new RegExp(search, 'i');
  }
  return filters;
};
