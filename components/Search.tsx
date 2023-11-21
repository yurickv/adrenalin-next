import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { SearchIcon } from '@/components/icons/SearchIcon';
import Link from 'next/link';

type Props = {
  search: string | null;
  handleCloseMobileMenu?: (value: boolean) => void;
};

export function Search({ search, handleCloseMobileMenu }: Props) {
  const [searchText, setSearchText] = useState<string>(search || '');

  return (
    <div>
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${
                  open
                    ? 'bg-orange-100 !text-main  dark:bg-hoverBlack dark:!text-mainTitle'
                    : 'text-opacity-90'
                }
                group inline-flex items-center rounded-md hover:bg-orange-100 dark:hover:bg-hoverBlack dark:hover:text-mainTitle
                 text-mainTitle dark:text-mainTitleBlack p-2 text-base font-medium hover:text-main
                 hover:text-opacity-100 outline-none transition-all duration-300`}
            >
              <span>
                <SearchIcon />
              </span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className="absolute left-1/2 lg:-left-[500%] z-10 mt-3 w-screen 
              max-w-[290px] md:max-w-[380px] lg:-max-w-[440px] -translate-x-1/2 transform px-0 md:px-4"
              >
                <div className="overflow-hidden rounded-lg lg:rounded-bl-lg lg:rounded-br-lg lg:rounded-tl-lg lg:rounded-tr-none shadow-lg ">
                  <div className="relative grid gap-8 bg-white dark:bg-mainText p-4">
                    <div className="flex flex-col items-center justify-center">
                      <input
                        placeholder="Знайти пост"
                        className="p-2 border rounded border-main  md:w-[316px] resize-x outline-none"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                      />
                      <Link
                        aria-label="Знайти пост"
                        href={`/blog?search=${searchText}`}
                        onClick={e => {
                          if (!searchText.trim()) {
                            return e.preventDefault();
                          }
                          handleCloseMobileMenu && handleCloseMobileMenu(false);
                          close();
                        }}
                        className={` self-end ${
                          searchText.trim()
                            ? 'text-main'
                            : 'text-gray-200 cursor-not-allowed'
                        }`}
                      >
                        Знайти
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
