/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
// custom
import Link from 'next/link';

export default function Navigation({ items }) {
  const router = useRouter();
  const { locale } = router;
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    setNavItems(items);
  }, [locale, items]);

  return (
    <div className="my-auto hidden md:block mr-auto">
      <div className="w-full flex text-center">
        <div className="mx-auto flex">
          {navItems.map((navItem, index) => (
            <Menu key={navItem.title} as="div" className="relative">
              <Menu.Button
                href={navItem.link}
                className={`pr-3 text-white text-[18px] font-light leading-none truncate h-[25px]`}
              >
                <div className="flex hover:font-[500]">
                  {navItem.subItems.length > 0 ? (
                    <>
                      {navItem.title}
                      <ChevronDownIcon className="w-5 h-5 text-white" />
                    </>
                  ) : (
                    <Link href={navItem.link}>{navItem.title}</Link>
                  )}
                </div>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="ml-[31px] absolute left-0 w-[300px] origin-top-left focus:outline-none bg-header opacity-90 z-[999]">
                  <div className="px-[20px]">
                    {navItem.subItems.length > 0 &&
                      navItem.subItems.map((subItem, subIndex) => (
                        <Menu.Item key={`sub-item-${subIndex}`}>
                          {({ active }) => (
                            <Link
                              href={subItem.link}
                              className={`${active ? 'text-gray-300' : 'text-white'} text-left flex my-[12px]`}
                            >
                              {subItem.title}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </div>
      </div>
    </div>
  );
}
