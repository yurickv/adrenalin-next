interface CaloriesProps {
  weight: number;
  height: number;
  age: number;
  sex: boolean;
  activity: number;
}

export const CaloriesCalcFormula = ({
  age,
  sex,
  weight,
  height,
  activity,
}: CaloriesProps) => {
  let param = weight && height;
  let basis = 0;

  if (param && age) {
    if (sex) {
      basis = Math.round(
        (10 * weight + 6.25 * height - 5 * age + 5) * activity
      );
    } else {
      basis = Math.round(
        (10 * weight + 6.25 * height - 5 * age - 161) * activity
      );
    }
  }

  return (
    <div className="flex gap-4 items-center">
      <p className="font-bold text-lg">Денна потреба калорій:</p>
      <p className="rounded-full p-4 text-main font-bold text-lg bg-mainText inline-block w-20 ">
        {basis}
      </p>
    </div>
  );
};
