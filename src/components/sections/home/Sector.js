import Link from 'next/link';
import Head from 'next/head';
//custom
import Sector_data from '../../../assets/i18n/home.json';
import SectionTitle from '@/components/common/SectionTitle';
const MOCK_SECTOR = Sector_data.sectors.find((data) => data.locale === 'en').items;
const Sector = () => {
  return (
    <div className="overflow-hidden text-white my-10">
      <div className="">
        <SectionTitle index="01" title="Sectors" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {MOCK_SECTOR.map((sector, index) => (
          <Link key={index} href={`/sector/${index}`}>
            <div
              className={`opacity-30 hover:opacity-100 transition-all duration-700 text-[#B58E3E] hover:text-black ease-out h-[320px] md:h-[750px]  p-5 relative`}
              style={{
                backgroundImage: `url('${sector.img}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute top-5 left-5">
                <div className="">
                  <h5 className="text-[20px] md:text-[48px] uppercase  leading-none">{`0${index + 1}`}</h5>
                  <p className="text-[#ebebeb]">{sector.title}</p>
                </div>
              </div>
              <div className="absolute bottom-32 left-5 font-semibold md:lg md:text-xl text-[#ebebeb]">
                <div className="flex justify-center items-center gap-3 text-vertical rotate-180">
                  <span>Тав тух</span>
                  <div className="flex items-center justify-center w-full">
                    <div className="border-l border-white h-5 pl-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sector;
