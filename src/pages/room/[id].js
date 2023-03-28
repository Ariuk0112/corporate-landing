/* eslint-disable @next/next/no-img-element */
import { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//custom
import { Container, Header, RootLayout } from '../../components/layouts';

import MOCK_DATA from '@/assets/i18n/data.json';
import Image from 'next/image';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { sector } = context.query;
  const { locale = 'en' } = context;

  return {
    props: {
      id,
      sectorId: sector,
      locale: locale || 'en',
    },
  };
}

export default function RoomDetail({ id, sectorId, locale }) {
  const MOCK_SECTOR = MOCK_DATA[locale]?.[sectorId] || {};
  const ROOMS = MOCK_SECTOR?.rooms || [];
  const currentRoom = ROOMS[id];
  const { images = [] } = currentRoom;
  const sectorDetail = MOCK_DATA[locale]?.sectors.find((sctr) => sctr.id === sectorId);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <RootLayout
      title="room"
      description="room"
      logo={sectorDetail.logo}
      address={sectorDetail.address}
      mail={sectorDetail.mail}
      id={id}
    >
      <div className="pt-[70px] md:pt-0">
        <Container mx="0">
          <Header />
          <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full relative">
                <Swiper ref={sliderRef} slidesPerView={1} slidesPerGroup={1} spaceBetween={0} loop>
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <Image src={image.url} alt="bg image" fill className="w-full h-full object-cover " />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="absolute bottom-16 right-0 left-1/2 md:left-1/3 z-50">
              <div className="flex items-center justify-center gap-10 md:gap-[400px] w-full">
                <button
                  className="bg-white rounded-full shadow w-10 h-10 md:w-[100px] md:h-[100px] flex"
                  onClick={handlePrev}
                >
                  <div className="m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </div>
                </button>
                <button
                  className="bg-white rounded-full shadow w-10 h-10 md:w-[100px] md:h-[100px] flex"
                  onClick={handleNext}
                >
                  <div className="m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 right-1/2 md:right-2/3 z-50">
              <div className="h-full w-full bg-[#00000099]">
                <div className="p-5 md:p-[45px] md:pt-[100px] text-[#B58E3E]">
                  <div className="">
                    <div className="text-2xl md:text-[80px] uppercase leading-none">{currentRoom.title}</div>
                    <div className="text-lg md:text-[24px] leading-none">{currentRoom.type}</div>
                  </div>

                  <div className="mt-5 md:mt-[85px] flex flex-col md:flex-row gap-5 md:gap-[120px] text-xl md:text-[26px]">
                    <div>
                      <h5 className="uppercase">guest</h5>
                      <p className="text-white truncate md:w-[200px]">{currentRoom.description}</p>
                    </div>
                    <div>
                      <h5 className="uppercase">{currentRoom.size == ' ' && 'size'}</h5>
                      <p className="text-white uppercase">{currentRoom.size}</p>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-[85px] flex gap-5 md:gap-[120px] text-xl md:text-[22px]">
                    <div>
                      <h5 className="uppercase">room includes:</h5>
                      <ul className="decoration-none">
                        <li className="text-white room-list ">Wifi</li>
                        <li className="text-white room-list">Health Club</li>
                        <li className="text-white room-list">Breakfast Bufeet</li>
                        <li className="text-white room-list">Vat 10%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </RootLayout>
  );
}
