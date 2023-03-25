import { CalendarIcon, PhoneArrowUpRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const NewsCard = ({ news }) => {
  return (
    <div className="  w-full shadow-md">
      {news && (
        <div className="relative mx-auto text-white">
          <div className="w-full h-full opacity-50 bg-black absolute  "></div>
          <Image fill src={`${news.image}`} alt={news.image} className=" w-full object-fit md:h-[524px]" />
          <h5 className="font-semibold  text-[40px] absolute top-[252px] left-[11px]">{news.title}</h5>
          <div className="flex absolute items-center text-[14px] md:text-[20px] gap-[9px] md:top-[480px] left-[11px] ">
            <PhoneArrowUpRightIcon className="w-5 h-5" />
            <p>{news.phone}</p>
          </div>
          <div className="flex absolute items-center text-[14px] md:text-[20px] gap-[9px] bottom-2 md:top-[480px] left-[295px]">
            <CalendarIcon className="w-5 h-5" />
            <p>{news.date}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
