import Facility from '@/components/sections/sector/Facility';
import Room from '@/components/sections/sector/Room';
import Image from 'next/image';

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
  return (
    <>
      <RootLayout title="sda" description="sda">
        <div className="w-full h-[530px] relative">
          <Image fill src="/home-bg-3.jpg" alt="sb" className="w-full" />
          <div className="absolute top-2/3 left-16 transform  -translate-y-1/2">
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <h1 className="uppercase text-white text-4xl font-medium">The Corporate Hotel & Resort Nukht</h1>
            </div>
          </div>
        </div>
        <Container>
          <div className="w-full">
            <div className="w-full">
              <Room />
            </div>
            <div className="w-full">
              <Facility />
            </div>
          </div>
        </Container>
      </RootLayout>
    </>
  );
};

export default SectorDetail;
