import Facility from '@/components/sections/sector/Facility';
import Room from '@/components/sections/sector/Room';
import Image from 'next/image';
//custom
import Datas from '../../assets/i18n/home.json';

import { Container, RootLayout } from '../../components/layouts';

export async function getServerSideProps(context) {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
}

const SectorDetail = ({ id }) => {
  const localItems = Datas.sectors.find((data) => data.locale === 'en');
  const MOCK_SECTOR = localItems.items[id];
  console.log(MOCK_SECTOR.facilities);
  return (
    <>
      <RootLayout title="sda" description="sda">
        <div className="w-full h-[530px] relative overflow-hidden">
          <img fill src={MOCK_SECTOR.background_image} alt="sb" className="w-full" />
          <div className="absolute top-2/3 left-16 transform  -translate-y-1/2">
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <h1 className="uppercase text-white text-4xl font-medium">{MOCK_SECTOR.title}</h1>
            </div>
          </div>
        </div>
        <Container>
          <div className="w-full">
            <div className="w-full">
              <Room rooms={MOCK_SECTOR.rooms[0]} sector={id} />
            </div>
            <div className="w-full">
              <Facility facilities={MOCK_SECTOR.facilities} sector={id} />
            </div>
          </div>
        </Container>
      </RootLayout>
    </>
  );
};

export default SectorDetail;
