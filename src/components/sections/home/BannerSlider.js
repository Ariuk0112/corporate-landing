/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

import { PrevButton, NextButton } from '../../common/CarouselButtons';

const BannerSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    // <div className="embla" ref={emblaRef}>
    //   <div className="embla__container">
    //     {[0, 1, 2].map((index) => (
    //       <div key={index} className="embla__slide">
    //         <div className="w-full h-[982px] relative">
    //           <Image fill src="/home-bg-1.jpg" alt="sb" className="w-full" />
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="embla text-white">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {[0, 1, 2].map((index) => (
            <div className="embla__slide" key={index}>
              <div className="w-full h-[100vh] md:h-[982px] relative bg-[#ebebeb]">
                <Image fill src="/home-bg-1.jpg" alt="sb" className="w-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex flex-col items-center justify-center gap-5 text-center">
                    <Link href="/">
                      <img src="/logo.png" alt="logo" className="w-[150px] md:w-[180px] h-[100px] cursor-pointer" />
                    </Link>
                    <h1 className="uppercase text-white text-xl font-medium">THE CORPORATE HOTEL</h1>
                    <p className="uppercase text-white text-xl md:text-6xl font-bold">WELCOME TO THE CORPORATE</p>
                    <span className="uppercase text-white md:xs md:text-lg">Superior Service & Warm Hospitality</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
export default BannerSlider;
