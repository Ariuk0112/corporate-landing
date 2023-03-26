//custom
import { BannerSlider, News, Map, Video } from '../components/sections/home';
import { Container, Footer } from '../components/layouts';
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
      <Container>
        <div className="w-full">
          <div className="w-full" id="Sectors">
            <Sector />
          </div>
          <div className="w-full" id="About-us">
            <About />
            <Video />
          </div>
        </div>
      </Container>
      <div className="relative w-full">
        <Container>
          <div className="w-full z-20 pb-10" id="News">
            <News />
            <Map />
          </div>
        </Container>
        <div className="absolute z-10 bottom-1/2 inset-x-0">
          <div className="w-full flex justify-center items-center">
            <div className="bg-[#B0985A] h-16 md:h-[280px] w-full"></div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
