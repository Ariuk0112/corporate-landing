import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/components/common/SectionTitle';
import { Video } from '../home';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules

const Facility = ({ facilities, sector }) => {
  return (
    <div className="w-full overflow-x-hidden font-Montserrat">
      <div className="text-white -mr-28">
        <SectionTitle index="02" title="Services" isRight={true} isTransparent={true} />
      </div>
      <div className="h-[350px] md:h-[600px] items-center justify-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-stretch relative gap-2">
          <div className="absolute inset-0 z-10 opacity-90 h-[350px] md:h-[570px] md:mx-[150px] rounded-[8px]">
            <Swiper className="mySwiper" slidesPerView={1} spaceBetween={23}  breakpoints={{
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
  }}>
              {facilities.map((facility, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[300px] md:h-[570px] mx-auto rounded-[8px]">
                    <div
                      className="w-full h-full flex items-center justify-center  relative rounded-[8px]"
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

        {/* <img fill src="/home-bg-1.jpg" alt="sb" className="w-full" /> */}
      </div>
    </div>
  );
};

export default Facility;
