//custom
import { RoomsCard, BannerSlider } from '../components/sections/home';
import { Container, RootLayout } from '../components/layouts';
import Head from 'next/head';
import Sector from '@/components/sections/home/Sector';
const MOCK_ROOMS = [
  {
    type: 'KING room ',
    desc: 'Өвөрмөц шийдэл бүхий тохижилттой Таньд хэрэгтэй бүх үйлчилгээ нэг дор Ажлынхаа чөлөөт цагаар фитнессээр хичээллэж, усанд сэлж, амттай хоолоо захиалах боломжтой. Энгийн , минималист орчин бүхий тав тухтай орчныг ажлын байрандаа бий болгохоор зорьж тохижуулсан оффис , өвөрмөц өнгө төрх нь уламжлалт хэв маягийг өөрчилж чадсан.Ажлын байрандаа олон төрлийн арга хэмжээ зохион байгуулах,хамтран ажиллах түншүүдтэйгээ уулзах тав тухтай өрөөг олон шийдлээр тохижуулснаар үр бүтээмжтэй ажиллах нөхцөлийг бүрдүүлсэн. Цаг үе үргэлж өөрчлөлтөд бэлэн байж, чөлөөтэй сэтгэж, хурдтай ажиллахыг бидэнд сануулсаар байна. Хэн нэгэндээ саад болохгүй ч хамтран шийдвэр гаргах, зөвлөлдөх боломж, орчинг бүрдүүлсэн шийдэл бүхий тохижилттой. Та бүхнийг урьж байна..',
    roomRate: [{ name: 'WIFI' }, { name: 'HEALTH CLUB' }, { name: 'BREAKFAST BUFEET' }, { name: 'VAT 10%' }],
    capacity: '25м2',
    images: [
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
    ],
    price: '257.300 ₮',
  },
  {
    type: 'C suite room ',
    desc: 'Өвөрмөц шийдэл бүхий тохижилттой Таньд хэрэгтэй бүх үйлчилгээ нэг дор Ажлынхаа чөлөөт цагаар фитнессээр хичээллэж, усанд сэлж, амттай хоолоо захиалах боломжтой. Энгийн , минималист орчин бүхий тав тухтай орчныг ажлын байрандаа бий болгохоор зорьж тохижуулсан оффис , өвөрмөц өнгө төрх нь уламжлалт хэв маягийг өөрчилж чадсан.Ажлын байрандаа олон төрлийн арга хэмжээ зохион байгуулах,хамтран ажиллах түншүүдтэйгээ уулзах тав тухтай өрөөг олон шийдлээр тохижуулснаар үр бүтээмжтэй ажиллах нөхцөлийг бүрдүүлсэн. Цаг үе үргэлж өөрчлөлтөд бэлэн байж, чөлөөтэй сэтгэж, хурдтай ажиллахыг бидэнд сануулсаар байна. Хэн нэгэндээ саад болохгүй ч хамтран шийдвэр гаргах, зөвлөлдөх боломж, орчинг бүрдүүлсэн шийдэл бүхий тохижилттой. Та бүхнийг урьж байна..',
    roomRate: [{ name: 'WIFI' }, { name: 'HEALTH CLUB' }, { name: 'BREAKFAST BUFEET' }, { name: 'VAT 10%' }],
    capacity: '52м2',
    images: [
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
      {
        url: '/rooms/sda.png',
      },
    ],
    price: '1.500.00 ₮',
  },
];
export default function Home() {
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

      <RootLayout title="sda" description="sda">
        <div className="w-full">
          <BannerSlider />
        </div>
        <Container>
          <div className="w-full">
            <div className="w-full">
              <Sector />
            </div>

            <div className="bg-custom-ee w-full flex flex-col justify-center items-center">
              <div className="w-full">
                <div className=" w-full grid grid-cols-2 gap-5">
                  {MOCK_ROOMS.map((room, index) => (
                    <RoomsCard key={index} room={room} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </RootLayout>
    </div>
  );
}
