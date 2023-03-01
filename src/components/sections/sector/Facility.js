import Link from 'next/link';

const FACILITIES = [
  {
    image: '/home-bg-1.jpg',
    title: 'CONCERT HALL',
  },
  {
    image: '/home-bg-2.jpg',
    title: 'EVENT HALL',
  },
  {
    image: '/home-bg-3.jpg',
    title: 'CHAIRMAN RESTAURANTS',
  },

  {
    image: '/home-bg-1.jpg',
    title: 'COFFEE LOUNGE',
  },
  {
    image: '/home-bg-2.jpg',
    title: 'CONFERENCE HALL & ROOMS',
  },
  {
    image: '/home-bg-3.jpg',
    title: 'CIGAR BAR',
  },
  {
    image: '/home-bg-1.jpg',
    title: 'HEALTH CLUB',
  },
  {
    image: '/home-bg-3.jpg',
    title: 'BEAUTY SALON & MASSAGE AND SPA',
  },
];

const Facility = () => {
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
        <div className="w-full grid grid-cols-4 md:grid-cols-8">
          {FACILITIES.map((facility, index) => (
            <Link key={index} href={`/facility/${index}`}>
              <div
                className="w-full flex items-center justify-center h-[520px]"
                style={{
                  backgroundImage: `url('${facility.image}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="text-[#FFE3AB] text-center hover:underline transition-all ease-in hover:scale-105 hover:shadow-lg">
                  {facility.title}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* <img fill src="/home-bg-1.jpg" alt="sb" className="w-full" /> */}
      </div>
    </div>
  );
};

export default Facility;
