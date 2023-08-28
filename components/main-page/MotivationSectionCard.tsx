import { cardInfo } from '@/const';
import { Arrow } from '../icons/Arrow-down';

export const MotivationCard = () => {
  return (
    <div className=" text-justify md:min-w-[368px] lg:min-w-[671px] md:min-h-[500px]  lg:min-h-[650px]">
      <p className="text-lg lg:text-2xl">
        У нашому тренажерному залі ми прагнемо створити найкращі умови для
        вашого розвитку та зростання. Давайте разом здійснимо ваші мрії про
        здорове, активне та щасливе життя.
      </p>
      <h4 className="mt-11 text-lg lg:text-2xl font-semibold xl:font-bold">
        3 основні правила, які ми завжди дотримуємось:
      </h4>
      <ul>
        {cardInfo.map(({ title, text }) => (
          <li>
            <details className="p-4 lg:p-5  ">
              <summary
                className="group flex gap-4 items-end justify-between 
               text-lg lg:text-2xl leading-normal font-medium 
               border-b-2 border-main px-3 py-2 hover:bg-orange-100 
               transition-all duration-300 outline-0"
              >
                <p>{title}</p>
                <div className="  text-main rotate-45 group-hover:rotate-0 transition-all duration-300">
                  <Arrow />
                </div>
              </summary>
              <p className=" bg-white z-10 font-medium text-lg lg:text-xl lg:leading-8 indent-4">
                {text}
              </p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
};

// group overflow-hidden
//           transition-all duration-300 hover:first:h-[130px] hover:h-[160px]
//           hover:last:h-[160px]          md:hover:first:max-h-[440px] md:hover:max-h-[480px] md:hover:last:max-h-[465px]
//           lg:hover:first:h-[140px] lg:hover:h-[170px] lg:hover:last:h-[210px]

// transition-all
//               duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
//               -translate-y-1/4
