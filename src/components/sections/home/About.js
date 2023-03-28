/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { EffectCards, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { Container } from '@/components/layouts';
import SectionTitle from '@/components/common/SectionTitle';

import 'swiper/css/effect-cards';
import Image from 'next/image';

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      // control.start('hidden');
    }
  }, [control, inView]);

  return (
    <div className="text-white">
      <div className="flex flex-col pt-10 w-full">
        <div className="text-white">
          <SectionTitle index="01" title="About us" isRight />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.article
            ref={ref}
            variants={{
              visible: { x: 0, transition: { duration: 1.5 } },
              hidden: { x: -500 },
            }}
            initial="hidden"
            animate={control}
            className="py-5 md:py-32 text-[14px] md:text-[16px] text[#CACACA] text-justify font-montserrat"
          >
            Whether you are travelling for business or pleasure, The Corporate hotels offer services under one roof
            making it an ideal choice for your stay. The hotel’s warm surroundings, comfort, modern touches and a high
            quality service sets it apart from any other hotel, allowing you to feel like being at home from your very
            first steps into the hotel. The first chain hotels in Mongolia, The Corporate Hotels have four branches. Two
            branches located in a beautiful nature nearby Bogd Mountain provide full opportunities to relax and conduct
            business meetings in a comfortable environment. The branch located in the central zone of the city has an
            event hall and a concert hall that can be transformed from a concert hall into a cinema. A wide selection of
            conference, business meeting, and training rooms with high-speed Internet access is available.We also have
            restaurants that serve Asian and European foods. Coffee lounge, fitness club, relaxing massages, swimming
            pool, sauna, hairdressing services are all located under one roof. Welcome to The Corporate Hotels Superior
            Service and Warm Hospitality
          </motion.article>
          <motion.div
            ref={ref}
            variants={{
              visible: { x: 0, transition: { duration: 1.5 } },
              hidden: { x: 500 },
            }}
            initial="hidden"
            animate={control}
            className="md:p-16 md:mt-16 min-h-[300px]"
          >
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              centeredSlides
              loop
              className="card-swiper"
            >
              {/* todo: images */}
              <SwiperSlide>
                <div className="w-42 h-auto">
                  <Image fill src="/about.jpg" alt="logo" className="w-full h-full rounded-2xl" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-42 h-auto">
                  <Image fill src="/about-1.jpg" alt="logo" className="w-full h-full rounded-2xl" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-42 h-auto">
                  <Image fill src="/about-2.webp" alt="logo" className="w-full h-full rounded-2xl" />
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
