//custom
import { RoomsCard, BannerSlider, News, Map, VideoPlayer, Video } from '../components/sections/home';
import { Container, RootLayout } from '../components/layouts';
import Head from 'next/head';
import About from '@/components/sections/home/About';
import Sector from '@/components/sections/home/Sector';

import Splash from '@/components/common/Splash';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <div className="overflow-hidden">
      <div className="w-full" id="Home">
        <BannerSlider />
      </div>
      {/* <RootLayout>
      </RootLayout> */}
      <Container>
        <div className="w-full">
          <div className="w-full" id="Sectors">
            <Sector />
          </div>
          <div className="w-full" id="About-us">
            <About />
            <Video />
          </div>
          <div className="w-full" id="News">
            <News />
            <Map />
          </div>

          {/* <div id="Service" className="w-full">
            <News
              title="NEWS & COMREHENSIVE"
              desc="Designed as privileged almost private place where you will feel right at home"
            />
          </div>

          <div id="Contact" className="w-full">
            <About />
            
          </div> */}
        </div>
      </Container>
    </div>
  );
}
