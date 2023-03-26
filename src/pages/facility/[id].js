/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Container, RootLayout } from '../../components/layouts';
import StaticData from '../../assets/i18n/home.json';

import MOCK_DATA from '@/assets/i18n/data.json';
import HeroSlider from '@/components/common/HeroSlider';
import Image from 'next/image';

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
  console.log(currentFacility);
  const sliderImages = ['/slider/corp-1.png', '/slider/corp-2.png', '/slider/corp-1.png', '/slider/corp-1.png'];

  return (
    <RootLayout title="sda" description="sda" logo={MOCK_SECTOR.logo}>
      <div className="w-full mt-[76px]">
        <HeroSlider images={sliderImages} title="The Corporate Hotel" subTitle="Ulaanbaatar" />
      </div>
      <div className="max-w-[1420px]">
        <div className="flex justify-end -mt-10 mb-[50px] z-20">
          <div className="w-full md:w-[926px] md:h-[358px] bg-[#B0985A] text-[#E9E9E9] text-[40px] md:text-[28px] z-30">
            <div className="flex flex-col w-full justify-center items-center">
              <div className="mx-5 md:mx-[105px] mt-[14px]">
                <div className="mt-[24px]">
                  <p className="mx-auto text-[20px] md:text-[32px]">{currentFacility.title}</p>
                </div>
                <div className="mb-10 mt-5 md:mt-[20px] text-[24px]">
                  <p className="text-[20px] text-[#E9E9E9] md:leading-[24px] font-normal">
                    {currentFacility.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {currentFacility && (
          <div className="w-full font-Montserrat flex flex-col text-white text-justify">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[120px] pb-10 md:pb-[120px]">
              <div>
                <div className="h-46 md:h-[589px]">
                  <Image className="h-full w-full" fill src={currentFacility.image[0].url} />
                </div>
                <div className="h-46 md:h-[292px] mt-10 md:mt-[120px]">
                  <Image className="h-full w-full" fill src={currentFacility.image[1].url} />
                </div>
                <div className="flex flex-col w-full text-right mt-10 md:mt-[76px] justify-end items-end">
                  <div>
                    <div className="w-[72px] border-[5px] border-solid  border-[#B0985A]"></div>
                  </div>
                  <div>
                    <div className="mt-[24px]">
                      <div className="mb-[32px]">
                        <p className="text-[40px] leading-none"> Feel Real Comfortable</p>
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
              <div className="flex flex-col-reverse md:flex-col">
                <div className="flex flex-col w-full">
                  <div>
                    <div className="w-[72px] border-[5px] border-solid border-[#B0985A]"></div>
                    <div className="mt-[24px]">
                      <div className="mb-[32px]">
                        <p className="text-[40px] leading-none text-left"> Feel Real Comfortable</p>
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
                <div className="h-64 md:h-[776px] w-full mt-10 md:mt-[120px]">
                  <Image className="h-full" fill src={currentFacility.image[2].url} />
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </RootLayout>
  );
};

export default FacilityDetail;
