import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const BannerSlider = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {[0, 1, 2].map((index) => (
          <div key={index} className="embla__slide">
            <div className="w-full h-[360px] relative">
              <Image fill src="/home-bg-1.jpg" alt="sb" className="w-full" />
              <div className="absolute top-[127px] right-[230px]">
                <button className="bg-header opacity-90 w-[103px] h-[103px] rounded-full">
                  <a
                    href="https://www.youtube.com/watch?v=IZGGnk4nIoU"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center"
                  >
                    <Image src="/play-button.png" fill alt="play" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BannerSlider;
