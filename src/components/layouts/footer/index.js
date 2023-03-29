/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import MOCK_DATA from '@/assets/i18n/data.json';
import { useRouter } from 'next/router';

// TODO: change when locale changes

const Footer = ({ logo, address, mail, id, locale = 'en' }) => {
  const MOCK_SECTOR = MOCK_DATA[locale]?.[id] || {};
  const sectors = MOCK_DATA[locale]?.sectors || [];
  // console.log(MOCK_SECTOR);
  return (
    <section
      id="footer"
      className="w-full md:p-[60px]  font-light bg-[#E5E5E5]"
      style={{
        backgroundImage: `url('/footer.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className="flex-row w-full text-white font-Montserrat">
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[300px] flex flex-col items-center justify-center">
              <div className="w-32 md:w-[300px]">
                {/* <img src={'/logo/logo-white.png'} alt="sb" className="w-full h-full" /> */}
                <img src={(logo && logo) || '/logo/logo-white.png'} alt="sb" className="w-full md:h-full" />
              </div>
              <div className="flex items-center justify-center gap-[30px]">
                <Image src={'/icons/facebook.png'} width={32} height={32}></Image>
                <Image src={'/icons/twitter.png'} width={32} height={32}></Image>
                <Image src={'/icons/youtube.png'} width={32} height={32}></Image>
                <Image src={'/icons/instagram.png'} width={32} height={32}></Image>
              </div>
              <div className="w-full">
                <div className="w-full grid grid-cols-2 md:grid-cols-3">
                  <div className="w-full flex-row pl-[20px] md:pl-[41px]">
                    <div className="text-[24px]">Sectors</div>
                    <div className="flex-row mt-[10px] md:mt-[15px] text-[14px] md:text-[18px] text-[#CACACA]">
                      {sectors.map((sector, index) => (
                        <div key={`sector-${index}`}>
                          <Link className="mb-[11px]" href={`/sector/${sector.id}`}>
                            {sector.title} {sector.subTitle}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                  {MOCK_SECTOR.facilities && (
                    <div className="w-full flex-row pl-[20px] md:pl-[41px]">
                      <div className="text-[24px]">Service</div>
                      <div className="flex-row mt-[10px] md:mt-[15px] text-[14px] md:text-[18px] text-[#CACACA]">
                        {MOCK_SECTOR.facilities.map((facility, index) => (
                          <div key={index}>
                            <Link className="mb-[11px]" href={`/facility/${index}`}>
                              {facility.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="w-full flex-row pl-[20px] md:pl-[41px]">
                    <div className="text-[24px]">Contact us</div>
                    <div className="flex-row mt-[10px] md:mt-[15px] text-[14px] md:text-[18px] text-[#CACACA]">
                      <div>
                        <div className="mb-[11px]" href="/sector">
                          {(address && address) || 'Chinggis Avenue 9-2, Sukhbaatar District, Ulaanbaatar, Mongolia'}
                        </div>
                      </div>
                      <div>
                        <div className="mb-[11px] overflow-hidden" href="/sector">
                          {(mail && mail) || '11-33 4411 manager@corporatehotel.mn'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full my-[40px] border-[1px] border-solid border-[#CACACA] h-[1px]"></div>
            <div className="w-full  items-center justify-center flex text-white text-[14px] md:text-[18px]">
              <div className="pr-[28px]">
                <p>All Rights Reserved</p>
              </div>
              <div>
                <p>2023</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Footer;
