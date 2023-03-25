/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import SectionTitle from '@/components/common/SectionTitle';
import { Container } from '@/components/layouts';
import { Arrow } from '@/assets/svg';
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
    <Container>
      <div className="w-full font-Montserrat overflow-hidden">
        <div className="text-white -mt-24">
          {' '}
          <SectionTitle index="01" title="Rooms" isRight={true} />
        </div>
        <div className="flex gap-5 font-Montserrat ">
          {rooms.map((room, index) => (
            <div className="md:my-10 w-full text-white" key={`zurag-${index}`}>
              <div
                className="h-[400px] w-[400px] rounded-[8px] relative"
                style={{
                  background: 'center',
                  backgroundSize: `cover;`,
                  backgroundRepeat: `no-repeat`,
                  backgroundImage: `url(/tuv/room/king1.jpg);`,
                }}
              >
                <div
                  className="absolute w-full bottom-0 h-[150px]"
                  style={{
                    background: 'center',
                    backgroundSize: `cover;`,
                    backgroundRepeat: `no-repeat`,
                    backgroundImage: `linear-gradient(0.54deg, #000000 0.47%, rgba(63, 63, 63, 0.1) 99.53%);  `,
                  }}
                >
                  <div className="flex px-[32px] pt-[36px]">
                    <div className="">
                      <p className="uppercase text-[28px] truncate">Standard king</p>
                      <div className="flex justify-between items-center">
                        <p className="text-[28px] text-[#B0985A] truncate">Single room</p>
                        <p className="text-[20px] truncate">35M2</p>
                      </div>
                    </div>
                    <div className="ml-auto pt-4">
                      <Link
                        href={{
                          pathname: `/room/${index}`,
                          query: {
                            sector: sector,
                          },
                        }}
                        className="rounded-full bg-[#B0985A] w-[40px] h-[40px] flex items-center justify-center"
                      >
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Room;
