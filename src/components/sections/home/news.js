import NewsCard from './NewsCard';/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
const MOCK_NEWS = [
    {
        title: 'Төрсөн өдрийн хүлээн авалт хийж байна',
        phone: '99111199',
        date: '2022-02-23',
        image: '/news.png'
    },
    {
        title: 'Төрсөн өдрийн хүлээн авалт  хийж байна ',
        phone: '99111199',
        date: '2022-02-23',
        image: '/news.png'
    },
];
const News = ({ title, desc }) => {
    return (
        <div>
            <div className='flex flex-col py-11 md:py-[54px]'>
                <p className='text-[#B58E3E] text-[14px] md:text-[29px] gap-[24px]'>{title}</p>
                <p>{desc}</p>
            </div>

            <div className="bg-custom-ee w-full flex flex-col justify-center items-center">

                <div className="w-full">
                    <div className="w-full grid grid-cols-2 gap-5">
                        {MOCK_NEWS.map((news, index) => (
                            <NewsCard key={index} news={news} />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default News;
