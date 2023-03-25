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
      <div className="flex text-white relative py-4 md:py-12 font-[Constantia] w-full ">
        <div className="text-[148px] left-[149px] absolute -top-14 opacity-30 font-[Montserrat]">ROOMS</div>
        <div className="absolute -top-10 left-[11px]">
          <div className="flex">
            <div className="my-auto w-[72px] h-0 border-[5px] border-solid border-[#B0985A]"></div>
            <div className="text-[20px] md:text-[48px] pl-[29px]">
              <h1 className=" uppercase">
                <span className="text-[#B58E3E]">01</span>
              </h1>
              <p className="">ROOMS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-10 w-full">
        <div></div>
      </div>
    </div>
  );
};

export default Room;
