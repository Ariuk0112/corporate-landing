/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Room = ({ rooms, sector }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4 md:py-10 font-[Constantia]">
        <div>
          <h1 className="text-[20px] md:text-[30px] uppercase">
            <span className="text-[#B58E3E]">ROOMS</span> & ACCOMMODATION
          </h1>
          <p className="text-[12px] md:text-[30px]">{`Designed as a privileged almost private place where you'll feel right at homes`}</p>
        </div>
      </div>
      <div className="md:my-10 w-full">
        <Carousel responsive={responsive} className="h-full">
          {rooms.map((room, index) => (
            <div className="h-full px-2" key={`zurag-${index}`}>
              <div className="w-full ">
                <div className="w-full md:min-w-[400px] h-[200px]">
                  <img src={room.images[0].url} alt="" className="w-full h-full object-cover " />
                </div>
                <div className="md:h-[200px] bg-white font-[Constantia] p-4 md:p-10 border">
                  <div className="text-[#B58E3E] md:text-[25px] truncate">{room.title}</div>
                  <div className="text-gray-600 text-sm">{room.type}</div>
                  <div className="flex items-center justify-between mt-1 md:mt-4">
                    <Link
                      href={{
                        pathname: `/room/${index}`,
                        query: {
                          sector: sector,
                        },
                      }}
                      className="md:h-[35px] px-4 py-1 bg-[#0D2944] text-gray-100 text-center uppercase"
                    >
                      Details
                    </Link>
                    <div className="text-gray-600 truncate">
                      <span className="font-semibold font-[roboto] text-gray-900"></span>
                      <br /> {room.size}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Room;
