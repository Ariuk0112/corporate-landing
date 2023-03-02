/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

const VIDEO_ID = 'sVTy_wmn5SU';
import { PrevButton, NextButton } from '../../common/CarouselButtons';

const Room = ({ rooms, sector }) => {
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
    <div className="w-full">
      <div className="flex items-center justify-between py-10 font-[Constantia]">
        <div>
          <h1 className="text-[30px] uppercase">
            <span className="text-[#B58E3E]">ROOMS</span> & ACCOMMODATION
          </h1>
          <p>{`Designed as a privileged almost private place where you'll feel right at homes`}</p>
        </div>
      </div>
      <div className="my-10 w-full">
        {/* todo: declare mock data */}
        <div className="embla text-white relative">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {rooms.map((room, index) => (
                <div className="w-full pr-5" key={index}>
                  <div className="w-[450px] h-[250px]">
                    <img src="/home-bg-4.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[200px] bg-white font-[Constantia] p-10 border">
                    <div className="text-[#B58E3E] text-[25px]">{room.title}</div>
                    <div className="text-gray-600 text-sm">{room.type}</div>
                    <div className="flex items-center justify-between mt-4">
                      <Link
                        href={{
                          pathname: `/room/${index}`,
                          query: {
                            sector: sector,
                          },
                        }}
                        className="h-[35px] px-4 py-1 bg-[#0D2944] text-gray-100 text-center uppercase"
                      >
                        Book now
                      </Link>
                      <div className="text-gray-600">
                        <span className="font-semibold font-[roboto] text-gray-900">{room.price}/</span>
                        per night <br /> 03 зочин {room.size}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} fillColor="#ebebeb" />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} fillColor="#ebebeb" />
        </div>
      </div>
    </div>
  );
};

export default Room;
