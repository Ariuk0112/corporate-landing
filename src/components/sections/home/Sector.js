import Link from 'next/link';
import Head from 'next/head';
//custom
import Sector_data from '../../../assets/i18n/home.json';
const VIDEO_ID = 'lhl2BgFhrI0';
const MOCK_SECTOR = Sector_data.sectors.find((data) => data.locale === 'en').items;
const Sector = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between py-10">
        <div>
          <h1 className="text-[30px] uppercase">
            <span className="text-[#B58E3E]">Sectors</span> & comprehensive
          </h1>
          <p>{`Designed as a privileged almost private place where you'll feel right at homes`}</p>
        </div>
      </div>
      <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* todo: declare mock data */}
        {MOCK_SECTOR.map((sector, index) => (
          <Link key={index} href={`/sector/${index}`}>
            <div
              className={`hover:shadow-md hover:scale-105 transition-all ease-in h-[320px] md:h-[720px] bg-slate-200 text-white p-5 ${
                index % 2 === 0 ? '-mt-16' : ''
              }`}
              style={{
                backgroundImage: `url('${sector.img}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="mt-10 mb-32 font-semibold text-xl ">{sector.title}</div>
              <div className="">{sector.desc}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full h-[500px] bg-[#676767] my-10">
        <iframe
          id="player"
          className=""
          type="text/html"
          width="100%"
          height="100%"
          src={`http://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1`}
        ></iframe>
      </div>
    </div>
  );
};

export default Sector;
