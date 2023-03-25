import NewsCard from './NewsCard';
import SectionTitle from '@/components/common/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

const MOCK_NEWS = [
  {
    title: 'Төрсөн өдрийн хүлээн авалт хийж байна',
    phone: '99111355',
    date: '2022-02-23',
    image: '/news.png',
  },
  {
    title: 'Төрсөн өдрийн хүлээн авалт  хийж байна ',
    phone: '99111355',
    date: '2022-02-23',
    image: '/news.png',
  },
  {
    title: 'Төрсөн өдрийн хүлээн авалт  хийж байна ',
    phone: '99111355',
    date: '2022-02-23',
    image: '/news.png',
  },
];
const News = ({ title, desc, VIDEO_ID }) => {
  return (
    <div className="">
      <div className="w-full text-white">
        <SectionTitle title="news" index="03" />
      </div>

      <div className="w-full py-5 md:py-10">
        <div className="w-full relative h-64 md:h-[450px]">
            <div className="w-full">
              <Swiper slidesPerView={2} slidesPerGroup={2} spaceBetween={16}>
                {MOCK_NEWS.map((news, index) => (
                  <SwiperSlide key={index}>
                    <NewsCard news={news} />
                  </SwiperSlide>
                ))}
                 <span slot="wrapper-end">Wrapper End</span>
              </Swiper>
            </div>

          {/* <div className="w-full">
          <div className="w-full grid md:grid-cols-2 gap-5">
           
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default News;
