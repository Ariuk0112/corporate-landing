/* eslint-disable @next/next/no-img-element */
import Play from '@/assets/svg/Play';

const Video = () => {
  return (
    <section className="w-full flex flex-col justify-end items-end py-10 md:py-32 gap-2 md:gap-0 overflow-x-hidden">
      <div
        className="w-full h-56 md:h-[530px] md:mr-[230px] rounded-[8px] flex justify-center items-center"
        style={{
          backgroundImage: "url('/home-bg-1.jpg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* TODO: fix button center position */}
        <div className="w-10 h-10 md:w-[90px] md:h-[90px]">
          <img src="/icons/play.png" className="w-full h-full" alt="play" />
        </div>
      </div>
      <div className="p-5 w-full md:-mt-[230px] bg-[#B0985A] md:h-[430px] md:w-[560px] rounded-[8px] text-center text-white">
        <b className="text-[75px] md:text-[200px] leading-[1]">“</b>
        <p className="leading-none text-xl md:text-[32px] px-5 md:px-[65px] text-justify tracking-tighter">
          Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.
        </p>
      </div>
    </section>
  );
};
export default Video;
