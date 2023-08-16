function BlogPage() {
  const list = [
    {
      title: 'Правильна Техніка',
      description:
        'Перш за все, велика увага має бути приділена правильній техніці виконання станової тяги. Початківцям особливо важливо отримати настанови від досвідченого тренера. Поступово збільшуйте вагу, але не на шкоду правильності виконання руху.',
    },
    {
      title: 'Нагрівання',
      description:
        "Перш ніж перейти до важких навантажень, не забувайте розігрівати м'язи. Загальне нагрівання перед тренуванням та спеціальні розтяжки для спини та ніг допоможуть уникнути травм та покращити результати.",
    },
    {
      title: 'Коректне Постановка Тіла',
      description:
        "Важливо дотримуватись правильної постановки тіла: п'яти, стегон та плечів повинні бути на одній лінії. Зігнуті коліна легко забезпечать стабільність під час підняття штанги.",
    },
  ];
  return (
    <section className="pt-[46px] pb-[90px] flex flex-col items-center">
      <div className="container md:px-10 lg:px-[100px] xl:px-[136px] text-center flex flex-col gap-6">
        <h1 className="font-poppins text-[32px] font-semibold text-mainText">
          Як робити станову тягу ривком?
        </h1>
        <p className="description">
          Станова тяга ривком є одним із найефективніших вправ для розвитку
          сили, стійкості та формування красивої силуетної лінії тіла. Вона
          активно залучає майже всі м'язові групи, зокрема спини, ноги, ягодиці
          та коріння.
        </p>
        <div className="w-full h-96 bg-[#D9D9D9] mb-12"></div>
        <ol className="list-decimal flex flex-col gap-3 text-left">
          {list.map(element => (
            <li key={element.title}>
              <h2 className="font-poppins font-semibold text-mainText text-base leading-normal ">
                {element.title}
              </h2>
              <p>{element.description}</p>
            </li>
          ))}
        </ol>
        <p className="font-poppins font-base text-lg text-mainText leading-normal m-3">
          Станова тяга ривком - це потужна вправа, що може привести до видатних
          результатів, якщо виконана з правильною технікою та зосередженістю.
        </p>
        <p className="font-poppins font-base text-lg text-mainText leading-normal">
          Наш тренажерний зал пропонує індивідуальний підхід до кожного,
          професійних тренерів та збалансовану систему харчування, що допоможе
          досягти ваших спортивних цілей. Приходьте до нас та починайте свій
          шлях до здоров'я та гармонії!
        </p>
      </div>
    </section>
  );
}

export default BlogPage;
