/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';

import SectionTitle from '@/components/common/SectionTitle';

import 'swiper/css/effect-cards';
import { Container } from '@/components/layouts';

const About = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col pt-10 w-full">
        <div className="text-white">
          <SectionTitle index="01" title="About us" isRight />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="py-5 md:py-32 text-[14px] md:text-[16px] text[#CACACA] text-justify font-montserrat">
            The Corporate Hotel and Convention Centre is one of the newest additions to The Corporate Hotels. It is a
            hotel where member of the team takes terrific pride in offering the highest levels of service, where guests
            are sincerely welcomed and can enjoy elegant accommodations, and the splendid lobby bar, restaurant, coffee
            lounge where every best of Asian and Western cuisine served. With 92 rooms and suites, The Corporate Hotel
            and Convention Centre is truly one of the finest hotels in perfect location. Its central location and modern
            design are a convenient choice for a comfortable stay. What sets this hotel apart from the others is its
            attention given to every detail of the modern look and design. The unique texture that collectively created
            and energized interior with sophisticated presence will surely help you to enjoy your stay in the city. The
            hotel is carefully planned to provide an accommodation for holding special events, weddings, conferences,
            meetings and other official gatherings. With a management team and staff dedicated to make every guest feel
            important, the corporate Hotel and Convention Centre is truly the ultimate place of what comfort should be
            like. The hotel is also a home to the one of the outstanding restaurants in Ulaanbaatar. The energetic
            members of our rapidly growing team have a goal to serve you with passion. The warm and comfortable
            atmosphere will make your dining experience rigorously exclusive. Take advantage of our Health Club with
            indoor pool, fitness room, sauna and Jacuzzi. Enjoy and kick back in our stylishly decorated lounge club, or
            gather with friends and family for a delicious meal at Chairman Restaurant. Stay in touch with what matters
            to you the most with high-speed internet access and refresh yourself with a coffee at our coffee Lounge
            conveniently located in the lobby.
          </article>

          {/* swiper-container */}
          <div className="swiper-container">
            <div className="md:p-16">
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
                    <img src="/home-bg-1.jpg" alt="logo" className="w-full h-full rounded-2xl" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-42 h-auto">
                    <img src="/home-bg-1.jpg" alt="logo" className="w-full h-full rounded-2xl" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-42 h-auto">
                    <img src="/home-bg-1.jpg" alt="logo" className="w-full h-full rounded-2xl" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
