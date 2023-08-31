import { Button } from '../Button';
import { ButtonSecond } from '../ButtonSecond';

export const ButtonGroup = () => {
  return (
    <>
      <p className="font-bold mt-12">Дізнайся більше про здорове харчування</p>
      <ButtonSecond
        route="/blog"
        text="Все про харчування"
        width="mx-auto mt-4 w-[240px] md:w-[284px]"
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
