'use client';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '@/app/_helpers/capitalizeFirstLetter';

const filters = ['All', 'Motivation', 'Nutrition', 'Training'];
export const Filter = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const router = useRouter();
  const selected =
    (searchParams?.topic && capitalizeFirstLetter(searchParams.topic)) ||
    filters[0];
  return (
    <div className="w-[160px]">
      <Listbox
        value={selected}
        onChange={value => {
          if (value === 'All') {
            return router.push('/blog');
          }

          router.push(
            `/blog?${
              searchParams?.search ? `search=${searchParams.search}&` : ''
            }topic=${value}`
          );
        }}
      >
        <div className="relative z-30">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg bg-white dark:bg-darkBody dark:border-2  dark:border-mainTextBlack
            py-2 pl-3 pr-10 text-left shadow-md focus:outline-none
          focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white
          focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm"
          >
            <span className="block truncate text-main tracking-widest">
              #{selected}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-[#676465]
            py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {filters.map((filter, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? 'bg-amber-100 dark:bg-[#d4d4d4] text-main dark:text-mainTitle'
                        : 'text-mainText dark:text-mainTextBlack'
                    }`
                  }
                  value={filter}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate tracking-widest ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {filter}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
