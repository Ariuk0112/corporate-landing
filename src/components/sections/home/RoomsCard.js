/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

const RoomsCard = ({ rooms }) => {
  const [roomsData, setRoomData] = useState(null);

  useEffect(() => {
    setRoomData(rooms);
  }, [rooms]);

  return (
    <div className="rounded-20 bg-white w-full shadow-md">
      {roomsData && (
        <Link href={`/news/detail/${newsData.id}`}>
          <div className="relative">
            <img
              src={`${API_URL}/${news.imgSrc}`}
              alt={newsData.title}
              className="rounded-t-20 w-full object-fit h-[268px]"
            />
            <article className="text-[#283F63] px-4 pt-[10px] pb-2">
              <h5 className="font-semibold">{newsData.title}</h5>
              <p>{newsData.paragraph || newsData.content}</p>
              <div>
                <div>{moment(newsData.publishedAt).format('YYYY-MM-DD')}</div>

                <div className="flex gap-2">
                  <EyeIcon className="h-5 w-5 text-[#283F63] my-auto" aria-hidden="true" />
                  {newsData.readCount}
                </div>
              </div>
            </article>
          </div>
        </Link>
      )}
    </div>
  );
};

export default RoomsCard;
