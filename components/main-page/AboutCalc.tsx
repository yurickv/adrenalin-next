import { Button } from "../Button";

export const AboutCalc = () => {
  return (
    <section className="py-[88px] bg-calc-bg bg-contain bg-no-repeat bg-right">
      <div className="container xl:px-[132px] lg:px-[66px]  mx-auto">
        <h3 className="title">Перевір свою форму просто зараз</h3>
        <p className="text-2xl font-poppins xl:w-[845px] text-mainText mt-14 mb-11 text-left">
          Прості калькулятори допоможуть визначити ІМТ (індекс маси тіла), денну
          потребу калорій та інші важливі параметри, які допоможуть збалансувати
          твоє харчування та тренування. Здорове харчування - це основа успіху,
          і ми готові допомогти тобі досягти найкращих результатів!
        </p>
        <Button route="/calcs" text="Дізнатися більше" width="w-[302px]" />
      </div>
    </section>
  );
};
