import { cardInfo } from "@/const";
import Image from "next/image";

export const MotivationCard = () => {
  return cardInfo.map(({ src, alt, title, text }) => (
    <div className="w-[373px]  overflow-hidden hover:last:transform-none">
      <Image src={src} alt={alt} width={373} height={234} />
      <h3 className="text-2xl leading-normal font-medium">{title}</h3>
      <p className="font-thin text-base translate-y-full">{text}</p>
    </div>
  ));
};
