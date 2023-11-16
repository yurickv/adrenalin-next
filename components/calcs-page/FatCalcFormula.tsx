interface FormulaProps {
  age: string;
  sex: boolean;
  sum: number;
}

export const FatCalcFormula = ({ age, sex, sum }: FormulaProps) => {
  let message = '';
  let BodyFatPercentage = 0;
  if (age && sum) {
    if (sex) {
      const BodyDensity =
        1.10938 -
        0.0008267 * sum +
        0.0000016 * sum ** 2 -
        0.0002574 * Number(age);
      BodyFatPercentage = Math.round((495 / BodyDensity - 450) * 10) / 10;
      message = messageCalcMan(BodyFatPercentage);
    } else {
      const BodyDensity =
        1.0994921 -
        0.0009929 * sum +
        0.0000023 * sum ** 2 -
        0.0001392 * Number(age);
      BodyFatPercentage = Math.round((495 / BodyDensity - 450) * 10) / 10;
      message = messageCalcWoman(BodyFatPercentage);
    }
  }

  return (
    <>
      <div className="flex gap-4 items-center">
        <p className="font-bold text-xl text-mainTitle dark:text-mainTitleBlack">
          % жиру в тілі:
        </p>
        <p className="rounded-xl p-2 text-main font-bold text-xl bg-[#D9D9D9] inline-block w-20 ">
          {BodyFatPercentage}
        </p>
      </div>
      <div className="h-20 text-lg md:text-xl font-medium text-mainTitle dark:text-mainTitleBlack">
        {message}
      </div>
    </>
  );
};

function messageCalcMan(fat: number) {
  if (fat < 6) return 'Мінімальний відсоток жиру.';
  if (13 > fat && fat >= 6)
    return 'Малий відсоток жиру. Спортсмен, підтягнута атлетична статура.';
  if (17 > fat && fat >= 13)
    return 'Невеликий відсоток жиру. Любитель спорту, гарна фізична форма з малою кількістю жиру.';
  if (21 > fat && fat >= 17)
    return 'Середній рівень жиру. Звичайна статура, середній рівень фізичної активності. ';
  if (25 > fat && fat >= 21)
    return 'Прийнятний рівень жиру. Не високий рівень фізичної форми, наявність жиру у проблемних місцях.';
  return 'Зайва вага. Погана спортивна форма. ';
}

function messageCalcWoman(fat: number) {
  if (fat < 10) {
    return 'Виснаження. Небезпечно для жіночого організму і веде до припинення менструального циклу.';
  }
  if (14 > fat && fat >= 10)
    return 'Мінімальний відсоток для здорової життєдіяльності організму.';
  if (16 > fat && fat >= 14)
    return 'Невеликий відсоток жиру. Спортсменка, з атлетичною статурою.';
  if (20 > fat && fat >= 16) {
    return 'Невеликий відсоток жиру. Аматорка спорту, хороша фізична форма з наявністю невеликої кількості жирових запасів. ';
  }
  if (24 > fat && fat >= 20)
    return 'Прийнятний відсоток жиру. Звичайна статура, середній рівень фізичної активності.';
  if (30 > fat && fat >= 24)
    return 'Середній рівень жиру. Звичайна статура, низький рівень фізичної активності.';

  return 'Наявність зайвої ваги. Спортивної форми немає.';
}
