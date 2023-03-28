/* eslint-disable @next/next/no-img-element */
import Facility from '@/components/sections/sector/Facility';
import Room from '@/components/sections/sector/Room';
//custom
import { Video } from '@/components/sections/home';
import { Container, Header, RootLayout } from '../../components/layouts';

import MOCK_DATA from '@/assets/i18n/data.json';
import HeroSlider from '@/components/common/HeroSlider';
import { useEffect } from 'react';
import { useState } from 'react';

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { locale } = context.locale;
  return {
    props: {
      id,
      locale: locale || 'en',
    },
  };
}

const SectorDetail = ({ id, locale }) => {
  const MOCK_SECTOR = MOCK_DATA[locale]?.[id] || {};
  const sectorDetail = MOCK_DATA[locale]?.sectors.find((sctr) => sctr.id === id);
  const sliderImages = sectorDetail.background_image;
  // console.log(MOCK_SECTOR.background_image)
  console.log();
  return (
    <>
      <RootLayout
        title="sda"
        description="sda"
        logo={sectorDetail.logo}
        address={sectorDetail.address}
        mail={sectorDetail.mail}
        id={id}
      >
        <div className="absolute top-0">
          <Header />
        </div>
        <div className="w-full overflow-x-hidden pt-[76px] relative">
          <HeroSlider images={sliderImages} title={sectorDetail.title} subTitle={sectorDetail.subTitle} />
        </div>
        <Container>
          <div className="w-full ">
            <div className="w-full relative ">
              <div className="absolute top-2/3 left-16 transform  -translate-y-1/2">
                <div className="flex flex-col items-center justify-center gap-5 text-center">
                  <h1 className="uppercase text-white text-lg md:text-4xl font-medium">{MOCK_SECTOR.title}</h1>
                </div>
              </div>
            </div>
            <div className="w-full bg-black">
              {MOCK_SECTOR.rooms && MOCK_SECTOR.rooms.length > 0 && <Room rooms={MOCK_SECTOR.rooms} sector={id} />}
            </div>
            <div
              className="h-[450px] md:h-[1379px] "
              style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url("/services-bg.png")',
              }}
            >
              <Facility facilities={MOCK_SECTOR.facilities} sector={id} />
            </div>
            <div className="w-full" id="About-us">
              <Video />
            </div>
          </div>
        </Container>
      </RootLayout>
    </>
  );
};

export default SectorDetail;
