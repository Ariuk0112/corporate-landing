/* eslint-disable @next/next/no-img-element */
import { Container, RootLayout } from '../../components/layouts';
import StaticData from '../../assets/i18n/home.json';

import MOCK_DATA from '@/assets/i18n/data.json';
import HeroSlider from '@/components/common/HeroSlider';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const { sector } = context.query;
  const { locale = 'en' } = context;

  return {
    props: {
      id,
      sectorId: sector,
      locale: locale || 'en',
    },
  };
}

const FacilityDetail = ({ id, sectorId, locale }) => {
  const MOCK_SECTOR = MOCK_DATA[locale]?.[sectorId] || {};
  const FACILITIES = MOCK_SECTOR?.facilities || [];
  const currentFacility = FACILITIES[id];

  const sliderImages = ['/slider/corp-1.png', '/slider/corp-1.png', '/slider/corp-1.png', '/slider/corp-1.png'];

  return (
    <RootLayout title="sda" description="sda" logo={MOCK_SECTOR.logo}>
      <div className="w-full">
        <HeroSlider images={sliderImages} title="The Corporate Hotel" subTitle="Ulaanbaatar" />
      </div>
      <Container>
        {currentFacility && (
          <div className="w-full font-Montserrat flex flex-col text-white text-justify">
            <div className="flex justify-end -mt-10 mb-[50px] z-50">
              <div className="w-[926px] h-[358px] bg-[#B0985A] text-[#E9E9E9] text-[40px] md:text-[28px]">
                <div className="flex flex-col w-full justify-center items-center ">
                  <div className="mx-[80px] md:mx-[105px] mt-[14px]">
                    <div className="mt-[24px]">
                      <p className=" mx-auto text-[20px] md:text-[40px]">Chairman Restaurants</p>
                    </div>
                    <div className="mt-[60px] text-[24px]">
                      <p className="text-[20px] text-[#E9E9E9] leading-[24px] font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-col">
              <div className="mx-[40px] flex gap-14">
                <div className="w-1/2">
                  <div className="">
                    <img className="h-[589px]" src="/service/111.png" />
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="mt-[116px]">
                    <div className="flex flex-col w-full">
                      <div>
                        <div className="w-[72px] border-[5px] border-solid border-[#B0985A]"></div>
                        <div className="mt-[24px]">
                          <div className="mb-[32px]">
                            <p className="text-[40px]"> Feel Real Comfortable</p>
                          </div>
                          <div>
                            <p className="text-[20px] text-[#E9E9E9] leading-[24px] font-normal">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                              been the industry standard dummy text ever since the 1500s, when an unknown printer took a
                              galley of type and scrambled it to make a type specimen book.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-[40px] my-[125px] flex gap-14">
                <div className="w-1/2">
                  <div className=" flex">
                    <img className="h-[292px] w-full" src="/service/111.png" />
                  </div>
                  <div className="flex flex-col w-full text-right mt-[76px] justify-end items-end">
                    <div>
                      <div className="w-[72px] border-[5px] border-solid  border-[#B0985A]"></div>
                    </div>
                    <div>
                      <div className="mt-[24px] ">
                        <div className="mb-[32px]">
                          <p className="text-[40px] "> Feel Real Comfortable</p>
                        </div>
                        <div>
                          <p className="text-[20px] text-[#E9E9E9] leading-[24px] font-normal text-justify">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="ml-[12px] -mt-[170px]">
                    <img className="h-[776px]" src="/service/111.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          // <div>
          //   <div className="w-full relative">
          //     <div className="grid grid-cols-3 overflow-hidden gap-1 md:gap-2">
          //       {facility.image.map((img, index) => (
          //         <div key={index} className="w-full h-[650px] md:h-[950px]">
          //           <img src={img.url} alt="sv" className="w-full h-full object-cover" />
          //         </div>
          //       ))}
          //     </div>

          //     <div className="absolute bottom-0 md:h-[268px] w-full bg-[#B58E3E80] ">
          //       <div className="flex flex-col items-center justify-center gap-5 text-center">
          //         <h1 className="uppercase text-white md:text-4xl font-medium">{facility.title}</h1>
          //         <p className="mx-auto text-white text-xs md:text-3xl font-medium">{facility.description}</p>
          //       </div>
          //     </div>
          //   </div>
          // </div>
        )}
      </Container>
    </RootLayout>
  );
};

export default FacilityDetail;
