import Link from 'next/link';

const Facility = ({ facilities, sector }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-10 font-[Constantia]">
        <div>
          <h1 className="text-[30px] uppercase">
            <span className="text-[#B58E3E]">FACILITIES</span> & SERVICES
          </h1>
          <p>{`Designed as a privileged almost private place where you'll feel right at homes`}</p>
        </div>
      </div>
      <div className="my-10 w-full h-[520px]">
        <div className="w-full flex justify-between items-stretch">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center h-[520px] relative"
              style={{
                backgroundImage: `url('${facility.image[0].url}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Link
                href={{
                  pathname: `/facility/${index}`,
                  query: {
                    sector: sector,
                  },
                }}
              >
                <div className="text-[#FFE3AB] hover:text-white z-20 font-base shadow-lg text-center hover:underline transition-all ease-in hover:scale-105 hover:shadow-lg">
                  {facility.title}
                </div>
                <div className="absolute inset-0 bg-[#ebebeb] shadow-lg opacity-0 hover:opacity-50 z-10 hover:block transition-all ease-in"></div>
              </Link>
            </div>
          ))}
        </div>

        {/* <img fill src="/home-bg-1.jpg" alt="sb" className="w-full" /> */}
      </div>
    </div>
  );
};

export default Facility;
