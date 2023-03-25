/* eslint-disable @next/next/no-img-element */
import Facility from '@/components/sections/sector/Facility';
import Room from '@/components/sections/sector/Room';
import Image from 'next/image';
//custom
import Datas from '../../assets/i18n/home.json';
import { News, About, Video } from '@/components/sections/home';
import { Container, RootLayout } from '../../components/layouts';

import MOCK_DATA from '@/assets/i18n/data.json';

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

  return (
    <>
      <RootLayout
        title="sda"
        description="sda"
        logo={MOCK_SECTOR.logo}
        address={MOCK_SECTOR.address}
        mail={MOCK_SECTOR.mail}
      >
        <Container>
          <div className="w-full ">
            <div className="w-full relative ">
              <img fill src={MOCK_SECTOR.background_image} alt="sb" className="w-full" />
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
              className="h-[1379px] "
              style={{
                backgroundSize: `cover;`,
                backgroundRepeat: `no-repeat`,
                backgroundImage: `url(/services-bg.png);`,
              }}
            >
              <Facility facilities={MOCK_SECTOR.facilities} sector={id} />
            </div>
            <div className="mx-[90px] md:-mt-[600px]">
              <Video />
            </div>
          </div>
        </Container>
      </RootLayout>
    </>
  );
};

export default SectorDetail;
