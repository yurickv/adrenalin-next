import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '../icons/XMarkIcon';
import { newService } from '@/app/_types/services.types';
import { Barbell } from '../icons/Barbell';
import { CartLocalStorageService } from '@/app/_services/cartLocalStorageService';
import { SHOPPING_CART } from '@/const/localstorageKeys';
import { useRouter } from 'next/navigation';
import { toastSuccess } from '@/app/_helpers/notifications';

import 'react-toastify/dist/ReactToastify.css';

type ModalForBuy = {
  onToggleModal: () => void;
  isModalOpen: boolean;
  chosenProduct: newService;
};

export const ModalForBuy: React.FC<ModalForBuy> = ({
  onToggleModal,
  isModalOpen,
  chosenProduct,
}) => {
  const localstorageService = new CartLocalStorageService(SHOPPING_CART);
  const router = useRouter();
  const handleAddToCart = (data: newService) => {
    localstorageService.set(data);
    onToggleModal();
    window.dispatchEvent(new Event('storage'));
  };

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
          <div className="flex min-h-full w-10/12 items-center justify-center p-4 text-center mx-auto">
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
                className="w-full md:max-w-max transform overflow-hidden rounded-2xl bg-white dark:bg-darkBody
              p-6 align-middle shadow-xl transition-all flex flex-col gap-4 justify-end"
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-mainTitle dark:text-mainTitleBlack text-center 
                  flex justify-between items-center border-solid border-b-2 border-main"
                >
                  <span className="hidden md:block">
                    Раді, що Ви вибрали нас
                  </span>
                  <span className="text-main">
                    &nbsp;
                    <Barbell />
                  </span>
                  <button
                    type="button"
                    className="ml-auto w-[58px] rounded-xl border border-transparent 
                  px-4 py-2 -mr-5 text-main dark:text-mainTitleBlack 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2"
                    onClick={onToggleModal}
                  >
                    <XMarkIcon />
                  </button>
                </Dialog.Title>
                <div className="md:my-4 py-10 md:py-12 border-solid border-b-2 border-main">
                  <ul
                    className="text-mainText dark:text-mainTextBlack text-center flex flex-col md:flex-row
                  justify-between items-center gap-8 md:gap-20"
                  >
                    <li className="flex flex-col gap-3 md:gap-4">
                      <span>Продукт:</span>{' '}
                      <span className="text-mainTitle dark:text-mainTitleBlack">
                        {chosenProduct.serviceName}
                      </span>
                    </li>
                    <li className="flex flex-col gap-3 md:gap-4">
                      <span>Тривалість:</span>{' '}
                      <span className="text-mainTitle dark:text-mainTitleBlack">
                        {chosenProduct.plan.availability}
                      </span>
                    </li>
                    <li className="flex flex-col gap-3 md:gap-4">
                      <span>Вартість:</span>
                      <span className="text-mainTitle dark:text-mainTitleBlack">
                        {chosenProduct.plan.price} &#8372;
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-44">
                  <button
                    onClick={() => {
                      handleAddToCart(chosenProduct);
                      toastSuccess('Послугу успішно додано до корзини!💪');
                    }}
                    className="bg-orange-100 hover:bg-orange-200 dark:bg-[#a3a3a3] dark:hover:bg-[#d4d4d4]
                text-mainText dark:text-mainTitle rounded-xl p-4 text-center block transition-all duration-150"
                  >
                    Додати в корзину
                  </button>
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                    <span className="text-main dark:text-[#F15C44] text-2xl font-semibold">
                      {chosenProduct.plan.price} &#8372;
                    </span>
                    <button
                      onClick={() => {
                        handleAddToCart(chosenProduct);
                        toastSuccess(
                          'Послугу успішно додано до корзини! Перенаправляємо на сторінку оплати...'
                        );
                        router.push('/services/cart');
                      }}
                      className="md:!w-[170px] actions__button disabled:opacity-50 text-white"
                    >
                      Купити зараз
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
