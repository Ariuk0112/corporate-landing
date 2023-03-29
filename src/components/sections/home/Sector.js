import Link from 'next/link';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

//custom
import SectionTitle from '@/components/common/SectionTitle';
import MOCK_DATA from '@/assets/i18n/data.json';
import Image from 'next/image';

// TODO: change when locale changes
const Sector = ({ locale = 'en' }) => {
  const sectors = MOCK_DATA[locale]?.sectors || [];

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <div className="overflow-hidden text-white my-10">
      <div className="">
        <SectionTitle index="01" title="Sectors" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-5">
        {sectors.map((sector, index) => (
          <Link key={index} href={`/sector/${sector.id}`}>
            <motion.div
              ref={ref}
              variants={{
                visible: { y: 0, transition: { duration: 1.8 } },
                hidden: { y: 500 / (index + 1) },
              }}
              initial="hidden"
              animate={control}
            >
              <div
                className={`bg-[#0e0d0d] opacity-50 hover:opacity-100 transition-all duration-700 text-[#B58E3E] hover:text-black ease-out h-[320px] md:h-[750px] p-5 relative`}
              >
                <Image src={sector.img} alt="sector" fill className="w-full h-full absolute" />
                <div className="absolute top-5 left-5">
                  <div className="">
                    <h5 className="text-[20px] md:text-[48px] uppercase leading-none">{`0${index + 1}`}</h5>
                    <p className="text-[#ebebeb] uppercase ">
                      {sector.title} {sector.subTitle}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-2 md:bottom-32 md:left-5 font-semibold md:lg md:text-xl text-[#ebebeb]">
                  <div className="flex justify-center items-center gap-3 text-vertical rotate-180">
                    <span>{sector.text}</span>
                    <div className="flex items-center justify-center w-full">
                      <div className="border-l border-white h-5 pl-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sector;
