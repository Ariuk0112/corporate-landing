/* eslint-disable react-hooks/exhaustive-deps */
import { Element } from 'react-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Datas from '../../assets/i18n/home.json';
import { useRouter } from 'next/router';
//custom
import { Container, RootLayout } from '../../components/layouts';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function RoomDetail() {
  const router = useRouter();
  const { sector, id } = router.query;
  const room = Datas.sectors.find((data) => data.locale === 'en').items[sector].rooms[0][id];

  return (
    <RootLayout title="sda" description="sda">
      <div className="">
        <Element name="detail" className="element">
          <div>
            <div className="w-full h-[107px] bg-[#00000080] opacity-50"></div>
            <div className="md:h-[75vh] w-full">
              <Carousel responsive={responsive} className="h-full">
                {room.images.map((img, index) => (
                  <div className="h-full" key={`zurag-${index}`}>
                    <img src={img.url} alt="" className="w-full h-full object-cover " />
                  </div>
                ))}
              </Carousel>
            </div>
            <Container>
              <div className="px-5 md:px-10 my-5">
                <div className="flex">
                  <div className="pr-5">
                    <div className="w-full grid grid-cols-3 md:grid-cols-8 my-5 gap-5">
                      {room.images.map((img, index) => (
                        <div className="h-32" key={`zurag-${index}`}>
                          <img src={img.url} alt="" className="w-full h-full object-cover hover:opacity-60" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[#B58E3E] text-[25px] uppercase">{room.title}</div>
                    <div className="text-gray-600 text-sm">{room.type}</div>

                    <div className="mt-5">{room.description}</div>
                  </div>
                  <div className="pl-5 border-black border-l">
                    <div className="w-32 md:w-96">
                      <div className="text-gray-600">
                        <span className="font-semibold italic font-[roboto] text-gray-900">{room.price}</span>
                        / per night <br /> 1-2 guest 25м2
                      </div>
                      <div>
                        room RATE INCLUDES:
                        <ul>
                          <li>WIFI</li>
                          <li>HEALTH CLUB</li>
                          <li>BREAKFAST BUFEET</li>
                          <li>VAT 10%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Element>
      </div>
    </RootLayout>
  );
}
