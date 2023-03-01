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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BannerSlider;
