/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';

const Video = () => {
  return (
    <section className="w-full flex flex-col justify-end items-end py-10 md:pb-64 gap-2 md:gap-0 overflow-hidden">
      <div
        className="w-full md:w-[840px] lg:w-[1080px] h-[330px] md:h-[530px] md:mr-auto rounded-md relative"
        style={{
          backgroundImage: "url('/home-bg-1.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-16 h-16 md:w-[90px] md:h-[90px] pulse hover:scale-95">
            <a target="_blank" href="http://www.youtube.com/embed/lhl2BgFhrI0">
              <img src="/icons/play.png" className="w-full h-full" alt="play" />
            </a>
          </div>
        </div>
        <div className="hidden md:block absolute -bottom-16 -right-16 md:-bottom-[215px] md:-right-[280px]">
          <div className="bg-[#B0985A] p-5 w-32 h-32 md:h-[430px] md:w-[560px] rounded-lg text-center text-white">
            <b className="text-[75px] md:text-[200px] leading-[1]">“</b>
            <p className="leading-none text-xl md:text-[32px] px-5 md:px-[65px] text-justify tracking-tighter">
              Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Video;
