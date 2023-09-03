import { CoachService, Service } from '@/app/_types/services.types';

interface StylesItem {
  css?: string;
  cssUl?: string;
  cssText?: string;
}
interface InfoTemplateProps {
  title: string;
  styles: StylesItem;
  data: Service[] | CoachService[];
}

export const InfoTemplate: React.FC<InfoTemplateProps> = ({
  title,
  data,
  styles,
}) => {
  return (
    <div
      className={`max-[767px]:mt-4 px-4 py-12 md:py-4 lg:py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
      hover:shadow-[rgba(246,_120,_49,_0.29)_0px_9px_20px] rounded-lg flex flex-col gap-6 hover:shrink  ${
        styles.css ? styles.css : ''
      } border-4 hover:border-main border-mainText`}
    >
      <h2 className="text-xl md:text-base lg:text-xl font-bold h-12 text-center">
        {title}
      </h2>
      <ul className={`grid ${styles.cssUl ? styles.cssUl : ''}`}>
        {data.map(({ quantity, price, serviceName }) => (
          <li
            className={`flex justify-between 
            lg:flex-row lg:justify-between
          border-b-2 border-main p-2 ${styles.cssText ? styles.cssText : ''}`}
          >
            <p>{quantity + ' ' + serviceName}</p>
            <span className="font-semibold">{price} &#8372;</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
