import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BuyButton } from './BuyButton';
import { XMarkIcon } from '../icons/XMarkIcon';
import { PassService, Service } from '@/app/_types/services.types';

type ModalForBuy = {
  onToggleModal: () => void;
  isModalOpen: boolean;
  name: 'standart' | 'personal' | 'planTrain';
  chosenProduct: PassService | Service;
};

export const ModalForBuy: React.FC<ModalForBuy> = ({
  onToggleModal,
  isModalOpen,
  chosenProduct,
  name,
}) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onToggleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-darkBody
              p-6 align-middle shadow-xl transition-all flex flex-col gap-4 justify-end"
              >
                <button
                  type="button"
                  className="ml-auto w-[58px] rounded-lg border border-transparent bg-orange-100 dark:bg-[#676465]
                  px-4 py-2  text-main dark:text-mainTitleBlack hover:bg-orange-200 dark:hover:bg-mainText 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2"
                  onClick={onToggleModal}
                >
                  <XMarkIcon />
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-mainTitle dark:text-mainTitleBlack text-center"
                >
                  Раді, що Ви вибрали нас
                </Dialog.Title>
                <div className="my-4">
                  <p className="text-mainText dark:text-mainTextBlack text-center">
                    і наш продукт: {chosenProduct.quantity}{' '}
                    {chosenProduct.serviceName}
                    <br />~ {chosenProduct.availability} <br />
                    <span className="text-main">
                      {chosenProduct.price} грн.
                    </span>
                  </p>
                </div>
                <button
                  className="bg-orange-100 hover:bg-orange-200 dark:bg-[#a3a3a3] dark:hover:bg-[#d4d4d4]
                text-mainText dark:text-mainTitle rounded-full p-4 text-center block transition-all duration-150"
                >
                  Додати в корзину
                </button>
                <BuyButton
                  quantity={chosenProduct?.price || '200'}
                  appointment={name}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
