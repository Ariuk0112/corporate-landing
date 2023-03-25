import Link from 'next/link';
import SectionTitle from '@/components/common/SectionTitle';
//custom
import MOCK_DATA from '@/assets/i18n/data.json';

// TODO: change when locale changes
const Sector = ({ locale = 'en' }) => {
  const sectors = MOCK_DATA[locale]?.sectors || [];
  console.log(locale, sectors);
  return (
    <div className="overflow-hidden text-white my-10">
      <div className="">
        <SectionTitle index="01" title="Sectors" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {sectors.map((sector, index) => (
          <Link key={index} href={`/sector/${sector.id}`}>
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
