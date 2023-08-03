import { cardInfo } from "@/const";
import { Arrow } from "../icons/Arrow-down";

export const MotivationCard = () => {
  return (
    <div className="w-[670px] text-justify">
      <p className="text-2xl">
        У нашому тренажерному залі ми прагнемо створити найкращі умови для
        вашого розвитку та зростання. Давайте разом здійснимо ваші мрії про
        здорове, активне та щасливе життя.
      </p>
      <h4 className="mt-11 text-2xl font-semibold">
        3 основні правила, які ми завжди дотримуємось:
      </h4>
      <ul>
        {cardInfo.map(({ title, text }) => (
          <li
            className=" relative p-4 pr-12 group overflow-hidden 
          transition-all duration-300 hover:first:h-[180px] 
          hover:h-[220px] hover:last:h-[250px]"
          >
            <h3 className="text-2xl leading-normal font-medium border-b-2 border-main overflow-hidden">
              {title}
            </h3>
            <div className="absolute top-5 right-5 text-main rotate-45">
              <Arrow />
            </div>
            <p
              className="absolute bg-white z-10 font-medium text-2xl transition-all 
              duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100  
              -translate-y-1/4 "
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
