/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const BannerSlider = ({ facility }) => {
  return (
    <div className="relative h-[75vh] md:h-screen w-screen">
      <div className="absolute inset-0 z-10 opacity-90">
        <Swiper
          effect="fade"
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={3000}
          centeredSlides
          loop
          className="mySwiper"
        >
          <SwiperSlide>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <div className="h-full w-full">
                <Image src="/slider/bg-2.jpg" fill className="w-full h-full" />
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <div className="h-full w-full">
                <Image src="/slider/bg-1.jpg" fill className="w-full h-full" />
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <div className="h-full w-full">
                <Image src="/slider/bg-3.jpg" fill className="w-full h-full" />
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute inset-0 z-20">
        <div className="text-center flex flex-col items-center justify-around text-white h-full w-full">
          <div className="w-[300px] h-auto">
            <img src="/logo.png" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full">
            <h1 className="font-medium my-5 leading-none text-[32px] md:text-[64px]">WELCOME TO THE CORPORATES</h1>
            <h className="font-light text-xl md:text-2xl">Superior service & Warm hospitality</h>
          </div>
          <div className="w-full my-2">
            <button className="rounded shadow hover:opacity-70 bg-[#B0985A] w-32 md:w-[280px] h-16 md:h-[60px] text-lg">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerSlider;
