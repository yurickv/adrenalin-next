'use client';

import { useRouter } from 'next/navigation';
import { Arrow } from '@/components/icons/Arrow-down';
import ReactPaginate from 'react-paginate';
import { PrevNextButton } from '@/components/blog-page/PrevNextButton';
import { useScreenWidth } from '@/app/_hooks/useScreenWidth';
import { SCREEN_WIDTHS } from '@/const';

export const Pagination = ({
  searchParams,
  pages,
}: {
  searchParams: { [key: string]: string | undefined };
  pages: number;
}) => {
  const router = useRouter();
  const screenWidth = useScreenWidth();
  const pageRangeDisplayed = screenWidth <= SCREEN_WIDTHS.mobile ? 2 : 5;

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
