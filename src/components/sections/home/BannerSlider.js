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

const BannerSlider = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* <div className="absolute inset-0 z-10 opacity-90">
        <Swiper
          effect="fade"
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
            >
              <div className="h-full w-full">
                <img src="/logo.png" className="w-full h-full" />
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="h-full w-full">
                <img src="/news.png" className="w-full h-full" />
              </div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="absolute inset-0 z-20">
        <div className="text-center flex flex-col items-center justify-around text-white h-full w-full">
          <div className="w-[300px] h-auto">
            <img src="/logo.png" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full">
            <p className="font-light text-2xl">The Corporate Hotel</p>
            <h1 className="font-medium text-[64px]">WELCOME TO THE CORPORATE</h1>
            <h className="font-light text-2xl">Superior service & Warm hospitality</h>
          </div>
          <div className="w-full my-2">
            <button className="rounded shadow hover:opacity-70 bg-[#B0985A] w-[280px] h-[60px] text-lg">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerSlider;
