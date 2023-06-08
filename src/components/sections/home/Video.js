/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import { useRouter } from 'next/router';
const Video = () => {
  const router = useRouter();
  const { locale } = router;
  return (
    <section className="w-full flex flex-col justify-end items-end py-10 md:pb-64 gap-2 md:gap-0 overflow-hidden">
      <div
        className="w-full md:w-[840px] lg:w-[1080px] h-[330px] md:h-[530px] md:mr-auto rounded-md relative"
        style={{
          backgroundImage: "url('/video.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <a target="_blank" href="http://www.youtube.com/embed/lhl2BgFhrI0">
            <div className="w-16 h-16 md:w-[90px] md:h-[90px] pulse hover:scale-95 flex justify-center items-center text-white">
              <div className="m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 text-white">
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
        <div className="hidden md:block absolute -bottom-16 -right-16 md:-bottom-[215px] md:-right-[280px]">
          <div className="bg-[#B0985A] flex flex-col p-5 w-32 h-32 md:h-[430px] md:w-[560px] rounded-lg text-center text-white">
            <b className="text-[75px] md:text-[200px] leading-none">“</b>{' '}
            {locale == 'en' ? 'WELCOME TO THE CORPORATE HOTELS' : 'КОРПОРЕЙТЭД ТАВТАЙ МОРИЛ'}
            <p className=" text-[32px]"> </p>
            <p className="leading-none text-xl md:text-[32px] text-justify mx-auto ">
              {locale == 'en' ? 'Superior service & Warm hospitality' : 'Тав тухтай орчин & Төгс үйлчилгээ'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Video;
