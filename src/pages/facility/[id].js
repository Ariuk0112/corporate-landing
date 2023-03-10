/* eslint-disable @next/next/no-img-element */
import { Container, RootLayout } from '../../components/layouts';
import StaticData from '../../assets/i18n/home.json';

const LOCALIZED_SECTORS_DATA = StaticData.sectors;

// Server taldaa doorh function ajilaad request shidsen urlaas id bolon locale-n utgiig awna
// locale utga ni  "en" | "mn" bn.
// yor n bol backend-s dataa duudaad ahij CRUD hiideggv zvger haruuldag page ntr hiih gej baigaa bol getServerSideProps ashiglasan n zvgeer bdg
export async function getServerSideProps(context) {
  const { id } = context.params;
  const { sector } = context.query;
  //  Default-r "en" bolgoson
  const { locale = 'en' } = context;

  // index bolon sector index deer tohirson utga zarlasan json deer bhgv bol aldaa zaana shvv
  // badly hard written here :()
  const currentLocaleData = LOCALIZED_SECTORS_DATA.find((localizedSectors) => localizedSectors.locale === locale);
  const currentSector = currentLocaleData?.items[sector];
  const currentFacility = currentSector?.facilities[id];
  return {
    props: {
      id,
      facility: currentFacility,
      sector: currentSector,
    },
  };
}

const FacilityDetail = ({ facility, sector }) => {
  return (
    <RootLayout title="sda" description="sda" logo={sector.logo}>
      <Container>
        <div className="w-full">
          {facility && (
            <div>
              <div className="w-full relative">
                <div className="grid grid-cols-3 overflow-hidden gap-2">
                  {facility.image.map((img, index) => (
                    <div key={index} className="w-full h-[650px] md:h-[950px]">
                      <img src={img.url} alt="sv" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 h-[268px] w-full bg-[#B58E3E80] ">
                  <div className="flex flex-col items-center justify-center gap-5 text-center">
                    <h1 className="uppercase text-white text-4xl font-medium">{facility.title}</h1>
                    <p className="mx-auto text-white text-3xl font-medium">{facility.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </RootLayout>
  );
};

export default FacilityDetail;
