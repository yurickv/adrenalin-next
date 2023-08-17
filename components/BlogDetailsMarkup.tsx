'use client';

export const BlogDetailsMarkup = ({ mark }: { mark: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: mark }} />;
};
