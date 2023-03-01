import Link from 'next/link';
import Head from 'next/head';

const VIDEO_ID = 'sVTy_wmn5SU';

const Sector = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <meta charSet="utf-8" />
        <title>{`The Corporate`}</title>
        <meta name="title" content={'НҮҮР ХУУДАС'} />
        <meta
          name="description"
          content={
            'Нийслэлийн засаг даргын дэрэгдэх цагдаагийн газар, нийслэлийн, цагдаа, дэрэгдэх, газарь niisleliin tsagdaa, niislel, tsagdaa'
          }
        />
        <meta
          name="keywords"
          content="Нийслэлийн засаг даргын дэрэгдэх цагдаагийн газар, нийслэлийн, цагдаа, дэрэгдэх, газарь niisleliin tsagdaa, niislel, tsagdaa"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-between py-10 font-[Constantia]">
        <div>
          <h1 className="text-[30px] uppercase">
            <span className="text-[#B58E3E]">Sectors</span> & comprehensive
          </h1>
          <p>{`Designed as a privileged almost private place where you'll feel right at homes`}</p>
        </div>
      </div>
      <div className="my-10 grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* todo: declare mock data */}
        {[0, 1, 2, 3].map((index) => (
          <Link key={index} href={`/sector/${index}`}>
            <div
              className={`hover:shadow-md hover:scale-105 transition-all ease-in h-[320px] md:h-[720px] bg-slate-200 text-white p-5 ${
                index % 2 === 0 ? '-mt-16' : ''
              }`}
              style={{
                backgroundImage: `url('/home-bg-${index + 1}.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="mt-10 mb-32 font-semibold text-xl hover:underline">
                The Corporate Hotel & Resort Nukht
              </div>
              <div className="hover:underline">
                lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full h-[500px] bg-[#676767] my-10">
        <iframe
          id="ytplayer"
          className=""
          type="text/html"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&origin=http://example.com&controls=0&rel=1?autoplay=1`}
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Sector;
