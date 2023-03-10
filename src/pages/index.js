//custom
import { RoomsCard, BannerSlider, News, Map, Video } from '../components/sections/home';
import { Container, RootLayout } from '../components/layouts';
import Head from 'next/head';
import About from '@/components/sections/home/About';
import Sector from '@/components/sections/home/Sector';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <RootLayout>
        <div className="w-full" id="Home">
          <BannerSlider />
        </div>
        <Container>
          <div className="w-full">
            <div className="w-full" id="Room">
              <Sector />
            </div>

            <div id="Service" className="w-full">
              <News
                title="NEWS & COMREHENSIVE"
                desc="Designed as privileged almost private place where you will feel right at home"
              />
            </div>

            <div id="Contact" className="w-full">
              <About />
              <Map />
            </div>
          </div>
        </Container>
      </RootLayout>
    </div>
  );
}
