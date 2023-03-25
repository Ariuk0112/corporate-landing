/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { EyeIcon, calendar } from '@heroicons/react/20/solid';
import Image from 'next/image';
const RoomsCard = ({ room }) => {
  return (
    <div className="rounded-20 bg-white w-full shadow-md">
      {room && (
        <Link href={`/news/detail/${room.id}`}>
          <div className="relative">
            <img src={`${room.images[0]}`} alt={room.type} className="rounded-t-20 w-full object-fit h-[268px]" />
            <article className="text-[#283F63] px-4 pt-[10px] pb-2">
              <h5 className="font-semibold truncate">{room.type}</h5>
              <p>{room.desc}</p>
            </article>
          </div>
        </Link>
      )}
    </div>
  );
};

export default RoomsCard;
