'use client';

import { useEffect, useState } from 'react';
import { ButtonSecond } from '../ButtonSecond';
import Link from 'next/link';

const SurveyPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const submitted = sessionStorage.getItem('submittedQuestions');

    if (!submitted || submitted === 'false') {
      const timeout = setTimeout(() => {
        setShowPopup(true);
      }, Math.random() * (15000 - 10000) + 10000); // Випадковий час між 10-15 сек.

      return () => clearTimeout(timeout);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
        {/* <p className="text-lg font-semibold">
          💡 Ми покращуємо наші інструменти!
        </p>
        <p className="mt-2 text-gray-700">
          Допоможіть нам створити ідеальний сервіс персонального харчування.
          Відповіді займуть 30 секунд! В подарунок бекоштовний Телеграм-бот
        </p>
        <ButtonSecond
          route="/questionary"
          text="Пройти опитування 📝"
          width="mx-auto mt-4 w-full md:w-[284px]"
        /> */}
        <p className="text-lg font-semibold">
          🤖 Хочете персональне меню на день?
        </p>
        <p className="mt-2 text-gray-700">
          Наш безкоштовний Telegram-бот <strong>@Nutri_day_bot</strong> допоможе
          вам скласти денний раціон харчування, враховуючи ваші цілі та
          вподобання.
        </p>
        <Link
          href="https://t.me/Nutri_day_bot"
          target="_blank"
          className={`bg-orange-100 hover:bg-orange-200 dark:bg-[#a3a3a3] dark:hover:bg-[#d4d4d4]
      text-mainTitle rounded-xl p-4 text-center block mx-auto mt-4 w-full md:w-[284px] transition-all duration-150`}
        >
          Спробувати бота в Telegram 🚀
        </Link>
        <button
          onClick={handleClose}
          className="mt-3 text-gray-500 hover:text-gray-700"
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default SurveyPopup;
