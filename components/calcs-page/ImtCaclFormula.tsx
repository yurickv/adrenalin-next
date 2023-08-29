interface FormulaProps {
  weight: number;
  height: number;
}

export const ImtCalcFormula = ({ weight, height }: FormulaProps) => {
  let message = '';
  let resultImt = 0;

  if (weight && height) {
    resultImt = Math.round((weight / (height / 100) ** 2) * 10) / 10;

    if (resultImt < 18.5 && resultImt >= 0.5)
      message = 'Вам слід набрати вагу! Вага недостатня, щоб бути здоровим!';
    if (24.9 > resultImt && resultImt >= 18.5)
      message = 'Ви молодець, Ваша вага в нормі!';
    if (29.9 > resultImt && resultImt >= 25)
      message = 'Вага надмірна! Контролюйте раціон і займайтеся спортом!';
    if (130 > resultImt && resultImt >= 30)
      message =
        'Велика надмірна вага! Вам треба худнути! Полюбіть себе, життя чудове! ';
  }
  if (resultImt > 130) resultImt = 0;
  return (
    <>
      <div className="flex gap-4 items-center">
        <p className="font-bold text-lg">Індекс маси тіла:</p>
        <p className="rounded-full p-4 text-main font-bold text-lg bg-mainText inline-block w-20 ">
          {resultImt}
        </p>
      </div>
      <div className="h-14 text-lg lg:text-xl font-medium">{message}</div>
    </>
  );
};
