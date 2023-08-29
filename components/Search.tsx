import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { SearchIcon } from '@/components/icons/SearchIcon';
import Link from 'next/link';

export function Search() {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <div className="w-full">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
              <Popover.Panel className="absolute -left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    <div className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className="flex items-center justify-center text-white "></div>
                      <div className="flex flex-col ml-4 items-center justify-center">
                        <input
                          placeholder="Введіть слово для пошуку"
                          className="py-2 pl-10 pr-2 w-full border border-main "
                          value={searchText}
                          onChange={e => setSearchText(e.target.value)}
                        />
                        <Link
                          href={`/blog?search=${searchText}`}
                          onClick={e => {
                            if (!searchText.trim()) {
                              e.preventDefault();
                            }
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
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
