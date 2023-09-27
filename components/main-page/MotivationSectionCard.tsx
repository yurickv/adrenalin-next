import { cardInfo } from '@/const';
import { Arrow } from '../icons/Arrow-down';
import FadeIn, { FadeInStagger } from '@/components/FadeIn';

export const MotivationCard = () => {
  return (
    <div className=" text-justify md:min-w-[368px] lg:min-w-[671px] md:min-h-[500px]  lg:min-h-[650px]">
      <FadeIn>
        <p className="text-lg lg:text-2xl text-mainText dark:text-mainTextBlack">
          У нашому тренажерному залі ми прагнемо створити найкращі умови для
          вашого розвитку та зростання. Давайте разом здійснимо ваші мрії про
          здорове, активне та щасливе життя.
        </p>
        <h4 className="mt-11 text-lg lg:text-2xl font-semibold xl:font-bold text-mainTitle dark:text-mainTitleBlack">
          3 основні правила, які ми завжди дотримуємось:
        </h4>
      </FadeIn>
      <FadeInStagger>
        <ul role="list">
          {cardInfo.map(({ title, text }, index) => (
            <li key={index}>
              <FadeIn>
                <details className="p-4 lg:p-5  ">
                  <summary
                    className="group flex gap-4 items-end justify-between 
               text-lg lg:text-2xl leading-normal font-medium 
               border-b-2 border-main px-3 py-2  cursor-pointer              
               transition-all duration-300 outline-0"
                  >
                    <h5 className="text-mainTitle dark:text-mainTitleBlack ">
                      {title}
                    </h5>
                    <div className="  text-main rotate-45 group-hover:rotate-0 transition-all duration-300 ">
                      <Arrow />
                    </div>
                  </summary>
                  <p
                    className="mt-2 bg-white dark:bg-darkBody z-10 font-medium text-lg lg:text-xl lg:leading-8 indent-4
              text-mainText dark:text-mainTextBlack"
                  >
                    {text}
                  </p>
                </details>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </div>
  );
};
