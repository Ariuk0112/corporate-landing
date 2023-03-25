/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import SectionTitle from '@/components/common/SectionTitle';
import { Container } from '@/components/layouts';
import { Arrow } from '@/assets/svg';
import { Swiper, SwiperSlide } from 'swiper/react';

const Room = ({ rooms, sector }) => {
  return (
    <Container>
      <div className="w-full overflow-x-hidden">
        <div className="w-full font-Montserrat">
          <div className="text-white">
            <SectionTitle index="01" title="Rooms" isRight={false} />
          </div>
        </div>
        <div className="w-full font-Montserrat">
          <Swiper slidesPerView={1} slidesPerGroup={1} spaceBetween={24}  breakpoints={{
    // when window width is >= 640px
    280: {
      width: 280,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    640: {
      width: 768,
      slidesPerView: 5,
    },
  }} >
            {rooms.map((room, index) => (
              <SwiperSlide key={`room-${index}`}>
                <div className="md:my-10 w-full text-white">
                  <div
                    className="h-[350px] md:h-[400px] rounded-[8px] relative"
                    style={{
                      background: 'center',
                      backgroundSize: `cover;`,
                      backgroundRepeat: `no-repeat`,
                      backgroundImage: `url(${room.images[0].url});`,
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
                      <div className="flex px-[20px] md:px-[28px] pt-[36px]">
                        <div className="">
                          <p className="uppercase text-[20px] md:text-[28px] truncate text-left">{room.title}</p>
                          <div className="flex justify-between items-center">
                            <p className="text-[16px] md:text-[28px] text-[#B0985A] truncate">{room.type}</p>
                            <p className="text-[16px] md:text-[20px] truncate">{room.size}</p>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Room;
