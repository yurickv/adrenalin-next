'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import { Arrow } from '@/components/icons/Arrow-down';
import { SCREEN_WIDTHS } from '@/const';
import { PrevNextButton } from '@/components/blog-page/PrevNextButton';

export const Pagination = ({
  searchParams,
  pages,
}: {
  searchParams: { [key: string]: string | undefined };
  pages: number;
}) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const pageRangeDisplayed =
    screenWidth >= SCREEN_WIDTHS.tablet
      ? screenWidth >= SCREEN_WIDTHS.desktop
        ? 5
        : 2
      : 1;

  return (
    <ReactPaginate
      pageCount={pages}
      previousLabel={
        <PrevNextButton
          title="Попередня"
          icon={
            <div className="rotate-180">
              <Arrow />
            </div>
          }
        />
      }
      forcePage={Number(searchParams?.page) - 1 || 0}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={1}
      nextLabel={<PrevNextButton title="Наступна" icon={<Arrow />} />}
      onPageChange={({ selected }) => {
        router.push(`/blog?page=${selected + 1}`);
      }}
      breakLabel="..."
      containerClassName="flex gap-4 justify-center items-center"
      pageClassName="pagination-button"
      activeClassName="isActive"
      renderOnZeroPageCount={null}
    />
  );
};
