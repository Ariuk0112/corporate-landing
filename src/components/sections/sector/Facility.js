import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { Video } from '../home';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules

const MAX_SWIPER_SLIDES = 6;

const Facility = ({ facilities, sector }) => {
  const [slidesLength, setSlidesLength] = useState(3);

  useEffect(() => {
    const length = facilities.length > MAX_SWIPER_SLIDES ? MAX_SWIPER_SLIDES : facilities.length;

    setSlidesLength(length);
  }, [facilities]);

  return (
    <div className="w-full overflow-x-hidden font-Montserrat" id="service">
      <div className="text-white -mr-28">
        <SectionTitle index="02" title="Services" isRight={true} isTransparent={true} />
      </div>
      <div className="h-[350px] md:h-[600px] items-center justify-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-stretch relative gap-2">
          <div className="absolute inset-0 z-10 opacity-90 h-[350px] md:h-[570px] md:mx-[50px] rounded-[8px]">
            <Swiper
              key={slidesLength}
              className="mySwiper"
              slidesPerView={1}
              spaceBetween={23}
              breakpoints={{
                640: {
                  width: 768,
                  slidesPerView: 1,
                },
                1080: {
                  width: 1080,
                  slidesPerView: 2,
                },
                1420: {
                  width: 1320,
                  slidesPerView: slidesLength,
                },
              }}
            >
              {facilities.map((facility, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[300px] md:h-[570px] mx-auto rounded-[8px]">
                    <div
                      className="w-full h-full flex items-center justify-center relative rounded-[8px]"
                      style={{
                        backgroundImage: `url('${facility.image[0].url}')`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center absolute bg-[#3A3A3A] opacity-60 rounded-[8px]"></div>
                      <div className="absolute">
                        <Link
                          href={{
                            pathname: `/facility/${index}`,
                            query: {
                              sector: sector,
                            },
                          }}
                        >
                          <div className="text-white opacity-100 text-center md:text-[26px] ">{facility.title}</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
