/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

const HeroSlider = (props) => {
  const { images, title, subTitle } = props;
  console.log(images);
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 z-10 opacity-90">
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
          {images &&
            images.length > 0 &&
            images.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className="h-full w-full">
                    <img src={imgSrc} alt={title || 'image'} className="w-full h-full" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="absolute inset-x-0 bottom-32 z-20">
        <div className="text-left flex flex-col items-center justify-around text-white h-full w-full">
          <div className="w-full">
            <h1 className="font-medium my-5 leading-none text-[48px] md:text-[64px]">{title}</h1>
            <h className="font-light text-[#B58E3E] text-[48px] md:text-[64px]">{subTitle}</h>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSlider;
