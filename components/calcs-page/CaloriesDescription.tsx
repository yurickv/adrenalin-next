export const CaloriesDescription = () => {
  return (
    <div className="w-[670px]">
      <ul className=" flex flex-col gap-6 text-lg w-[670px] text-justify">
        <li>
          Скільки калорій треба, щоб схуднути, наростити м’язову масу або
          утримати свою теперішню вагу? Цей показник для кожного індивідуальний.
          Введіть свої дані, і калькулятор калорій розрахує оптимальне значення
          саме для вас, враховуючи: стать, вік, зріст, теперішню вагу та
          активність
        </li>
        <li>
          Щоб схуднути, скоротіть кількість споживаних калорій в день на{' '}
          <strong> 10%</strong>. Якщо ви хочете набрати вагу, збільште на{' '}
          <strong>10%</strong> кількість калорій в день. Важливо:не
          рекомендується зменшувати загальну кількість калорій в день менше 1200
          калорій , так як це небезпечно для вашого здоров'я. Також не
          рекомендується втрачати більше 0,8 - 1 кг в тиждень.
        </li>

        <li>
          Для більш збалансованого схуднення на 0,5 - 0,8 кг на тиждень
          скоротіть споживання калорій на 5-7% , а решту 5-7% калорій втрачайте,
          виконуючи фізичні вправи для схуднення. Цей підхід запобігає зменшення
          вашого рівня метаболізму (обміну речовин) і допоможе зберегти м'язову
          масу. В такому випадку результат буде довготривалим.
        </li>
        <li></li>
      </ul>
      <p className="text-lg font-bold mt-6">
        Пам'ятайте, що надміру ваги сприяє ряд факторів:
      </p>
      <ul className="flex flex-col gap-1 text-justify mt-3 list-disc">
        <li>малоактивний спосіб життя;</li>
        <li>
          похибки в режимі харчування (надмірне споживання вуглеводів, жирів,
          солі, солодких і алкогольних напоїв, прийом їжі на ніч і ін);
        </li>
        <li>психологічне переїдання;</li>
        <li>фізіологічні стани (лактація, вагітність, клімакс);</li>
        <li>деякі ендокринні патології;</li>
        <li>
          стреси, недосипання, вживання психотропних і гормональних препаратів
          (стероїди, інсуліну, протизаплідних таблеток) і тощо.
        </li>
      </ul>
    </div>
  );
};