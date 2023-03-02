/* eslint-disable @next/next/no-img-element */
import Facility from '@/components/sections/sector/Facility';
import Room from '@/components/sections/sector/Room';
import Image from 'next/image';

import { useParams } from 'react-router-dom';
import { Container, RootLayout } from '../../components/layouts';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Datas from '../../assets/i18n/home.json';
const MOCK = Datas.sectors;
const FacilityDetail = () => {
  const router = useRouter();
  const sector = router.query || router.params;
  const [facility, setFacility] = useState(MOCK.find((data) => data.locale === 'en').items[sector.sector]);
  useEffect(() => {
    const afacility = facility.facilities[sector.id];
    setFacility(afacility);
  }, []);
  // const facality = items.facilities[id];
  return (
    <>
      <RootLayout title="sda" description="sda">
        <div className="w-full relative">
          <div className="grid grid-cols-2 overflow-hidden">
            <div className="w-full h-[670px]">
              <img src="/home-bg-3.jpg" alt="sv" className="w-full" />
            </div>
            <div className="w-full grid grid-cols-1">
              <div className="w-full h-[335px]">
                <img src="/home-bg-3.jpg" alt="sv" className="w-full" />
              </div>
              <div className="w-full h-[335px]">
                <img src="/home-bg-3.jpg" alt="sv" className="w-full" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 h-[268px] w-full bg-[#B58E3E80] ">
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <h1 className="uppercase text-white text-4xl font-medium">Concert Hall</h1>
            </div>
          </div>
        </div>
      </RootLayout>
    </>
  );
};

export default FacilityDetail;
