/* eslint-disable */
import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon, Close } from '../../../assets/svg';
import { Menu, Transition } from '@headlessui/react';
import headerData from '../../../assets/i18n/header.json';
import Head from 'next/head';
import { useRouter } from 'next/router';

const navigations = headerData.navigation.find((data) => data.locale === 'en').items;
const Header = ({ textColor, bgColor }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

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

  const router = useRouter();

  const handleScroll = (targetId) => {
    // get the element by id and use scrollIntoView

    if (targetId === 'home') {
      router.push('/');
      return;
    }
    if (targetId === 'contact') {
      const elem = document.getElementById('footer');
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
      return;
    }

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <nav
      className={`h-[70px] z-[999] flex w-full backdrop-filter backdrop-blur-lg gap-3 bg-black/50 fixed trasition ease-in-out duration-500 ${
        animateHeader && 'shadow-xl'
      }`}
      s
    >
      <div className={`my-auto mx-5 md:w-[100px]`}>
        <Link href="/">
          <Image width={84} height={64} src="/logo/logo-white.png" alt="logo" className="cursor-pointer" />
        </Link>
      </div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`The Corporate`}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className="md:mr-auto hidden md:flex list-none flex-row justify-between items-center flex-initial text-white">
        {navigations.map((item, index) => (
          <li key={`navbar-${index}`} className="mx-4 cursor-pointer md:text-[20px]">
            {item.childNavigations ? (
              <Menu as="div" className="relative inline-block text-left z-100">
                <div>
                  <Menu.Button className="">{item.title}</Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 md:w-[350px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    {item.childNavigations.map((childItem, index) => (
                      <Link href={`/${childItem.id}`} key={`child-item-${index}`} className="w-full">
                        <div
                          className={`px-1 py-1 text-[#021F6E] hover:bg-[#E6F7FF] border-[#021F6E] hover:border-r-2`}
                        >
                          {childItem.title}
                        </div>
                      </Link>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              // <Link href={`/${item.id}`}>{item.title}</Link>
              <button
                onClick={() => {
                  handleScroll(item.title.toLowerCase());
                }}
              >
                {item.title}
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="flex relative ml-auto text-white">
        {!toggleMenu && (
          <MenuIcon fontSize={28} className="m-3 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <MenuIcon fontSize={28} className="m-3 md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-20 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md bg-black/50 opacity-70 animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <Close onClick={() => setToggleMenu(false)} />
            </li>
            {navigations.map((item, index) => (
              <li key={`mobile-nav-${index}`} className="mx-4 cursor-pointer">
                <button
                  onClick={() => {
                    handleScroll(item.title.toLowerCase());
                  }}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
