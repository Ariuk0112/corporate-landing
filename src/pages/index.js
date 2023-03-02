//custom
import { RoomsCard, BannerSlider, News, Map } from '../components/sections/home';
import { Container, RootLayout } from '../components/layouts';
import Head from 'next/head';
import About from '@/components/sections/home/About';
import Sector from '@/components/sections/home/Sector';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <RootLayout title="sda" description="sda">
        <div className="w-full">
          <BannerSlider />
        </div>
        <Container>
          <div className="w-full">
            <div className="w-full">
              <Sector />
            </div>

            <News
              title="NEWS & COMREHENSIVE"
              desc="Designed as privileged almost private place where you will feel right at home"
            />
            <About />
            <Map />
          </div>
        </Container>
      </RootLayout>
    </div>
  );
}
