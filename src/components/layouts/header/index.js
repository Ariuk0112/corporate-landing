import Image from 'next/image';
import Link from 'next/link';
//custom
import headerData from '../../../assets/i18n/header.json';
import { Fragment, useEffect, useRef, useState } from 'react';

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);
  const data = headerData.navigation.find((data) => data.locale === 'en').items;
  return (
    <>
      <header
        className={`w-full backdrop-filter backdrop-blur-lg gap-3 bg-black/50 fixed z-10 trasition ease-in-out duration-500 ${
          animateHeader && 'shadow-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto ">
          <div
            className={`flex max-w-screen-xl py-4 ${
              animateHeader && 'py-5'
            } mx-auto items-center px-8 trasition ease-in-out duration-500`}
          >
            <Image src="/logo.png" width={80} height={77} alt="fb" />
            <nav>
              <ul className="flex items-center justify-start">
                {data.map((item) => (
                  <li key={item?.title}>
                    <Link
                      href={item?.link}
                      className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent  leading-[22px] md:px-3 text-white hover:text-black"
                    >
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
