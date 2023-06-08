/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Container, Header, RootLayout } from '../../components/layouts';
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
  const sectorDetail = MOCK_DATA[locale]?.sectors.find((sctr) => sctr.id === sectorId);
  const currentFacility = FACILITIES[id];
  const sliderImages = currentFacility.bg_img;
  console.log(locale);
  return (
    <RootLayout
      title="facility"
      description="facility"
      logo={sectorDetail.logo}
      address={sectorDetail.address}
      mail={sectorDetail.mail}
      id={sectorId}
    >
      <Header />
      <div className="w-full pt-[76px]">
        <HeroSlider images={sliderImages} title={sectorDetail.title} subTitle={sectorDetail.subTitle} />
      </div>
      <div className="max-w-[1420px] font-Montserrat">
        <div className="flex justify-end -mt-10 mb-[50px] z-20">
          <div className="w-full md:w-[926px] md:h-[358px] bg-[#7c807d] text-white text-[40px] md:text-[28px] z-30">
            <div className="flex flex-col w-full justify-center items-center ">
              <div className="mx-5 md:mx-[145px] mt-[14px]">
                <div className="mt-[24px]">
                  <p className="mx-auto text-[20px] md:text-[32px]">{currentFacility.title}</p>
                </div>
                <div className="mb-10 mt-5 md:mt-[20px] text-[24px]">
                  <p className="text-[20px] text-white md:leading-[24px] ">{currentFacility.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {currentFacility && (
          <div className="w-full  flex flex-col text-white text-justify font-Montserrat">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[40px] md:mr-[80px] pb-10 md:pb-[120px]">
              <div>
                <div className="h-46 md:h-[589px]">
                  <img className="h-full w-full" src={currentFacility.image[0].url} />
                </div>
                <div className="h-46 md:h-[292px] mt-10 md:mt-[120px]">
                  <img className="h-full w-full" src={currentFacility.image[1].url} />
                </div>
                <div className="flex flex-col w-full text-right mt-10 md:mt-[76px] md:pl-[30px] justify-end items-end">
                  <div>
                    <div className="w-[72px] border-[5px] border-solid  border-[#B0985A]"></div>
                  </div>
                  <div>
                    <div className="mt-[24px]">
                      <div>
                        <pre className="w-full h-full text-[20px] text-[#E9E9E9] leading-[24px] font-normal whitespace-pre-wrap text-left">
                          {currentFacility.title1}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-col mx-2 md:pr-[40px]">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="w-[72px] border-[5px] border-solid border-[#B0985A]"></div>
                    <div className="mt-[24px]">
                      <div className="mb-[32px]">
                        <p className="text-[35px] leading-none text-left">
                          {locale == 'en' ? 'Feel Real Comfortable' : 'Төгс үйлчилгээ , тав тухыг мэдэр'}{' '}
                        </p>
                      </div>
                      <div>
                        <pre className="text-[20px] text-[#E9E9E9] whitespace-pre-wrap leading-[24px] w-full font-normal">
                          {currentFacility.title2}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-64 md:h-[776px] w-full mt-10 md:mt-[120px]">
                  <img className="h-full" src={currentFacility.image[2].url} />
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
