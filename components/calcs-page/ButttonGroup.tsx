import { Button } from '../Button';
import { ButtonSecond } from '../ButtonSecond';

export const ButtonGroup = () => {
  return (
    <>
      <p className="mt-12 text-mainText dark:text-mainTextBlack">
        Дізнайся більше про здорове харчування
      </p>
      <ButtonSecond
        route="/blog"
        text="Все про харчування"
        width="mx-auto mt-4 w-full md:w-[284px]"
      />
      <p className="mt-12 text-mainText dark:text-mainTextBlack">
        Пройди нашу програму харчування з тренером
      </p>
      <Button
        route="/services"
        text="Придбати програму"
        width="mx-auto mt-4 w-full md:w-[284px]"
      />
    </>
  );
};
