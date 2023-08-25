import { Button } from '../Button';

export const ButtonGroup = () => {
  return (
    <>
      <p className="font-bold mt-12">Дізнайся більше про здорове харчування</p>
      <Button
        route="/blog"
        text="Все про харчування"
        width="mx-auto mt-4 w-[240px] md:w-[284px] !bg-none 
        !border-main border-2 border-solid !text-mainText !shadow-none"
      />
      <p className="font-bold mt-12">
        Пройди нашу програму харчування з тренером
      </p>
      <Button
        route="/services"
        text="Придбати програму"
        width="mx-auto mt-4 w-[240px] md:w-[284px]"
      />
    </>
  );
};
