/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';

const Footer = ({ logo, address, mail }) => {
  return (
    <section
      className="w-full md:p-[60px]  font-light bg-[#E5E5E5]"
      style={{
        backgroundImage: `url('/footer.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <div className="flex-row w-full text-white font-Montserrat">
          <div className="w-full flex ">
            <div className="w-32 md:w-[300px]">
              <img src={'/logo/main.png'} alt="sb" className="w-full h-full" />
              <div className="flex items-center justify-center gap-[30px]">
                <Image src={'/icons/facebook.png'} width={32} height={32}></Image>
                <Image src={'/icons/twitter.png'} width={32} height={32}></Image>
                <Image src={'/icons/youtube.png'} width={32} height={32}></Image>
                <Image src={'/icons/instagram.png'} width={32} height={32}></Image>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full grid grid-cols-1 md:grid-cols-3">
                <div className="w-full flex-row pl-[20px] md:pl-[41px]">
                  <div className="text-[24px]">Sectors</div>
                  <div className="flex-row mt-[10px] md:mt-[15px] text-[14px] md:text-[18px] text-[#CACACA]">
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-row pl-[20px] md:pl-[41px]">
                  <div className="text-[24px]">Service</div>
                  <div className="flex-row mt-[10px] md:mt-[15px] text-[14px] md:text-[18px] text-[#CACACA]">
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-row pl-[20px] md:pl-[41px]">
                  <div className="text-[24px]">Contact us</div>
                  <div className="flex-row mt-[10px] md:mt-[15px] text-[14px] md:text-[18px] text-[#CACACA]">
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                    <div>
                      <Link className="mb-[11px]" href="/sector">
                        The Corporate Hotel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full my-[40px] border-[1px] border-solid border-[#CACACA] h-[1px]"></div>
          <div className="w-full  items-center justify-center flex text-white text-[14px] md:text-[18px]">
            <div className="pr-[28px]">
              <p>All Rights Reserved</p>
            </div>
            <div>
              <p>2023</p>
            </div>
          </div>
        </div>
      </Container>
      {/* <div className="flex flex-col justify-center items-center">
        <div className="md:h-[150px] md:w-[280px] md:mb-16 h-[100px] w-[200px]">
          <img src={logo ? logo : '/logo/main.png'} alt="sb" className="w-full h-full" />
        </div>
        <div className="flex md:text-[15px] text-[12px] font-bold">
          <p>{address ? address : 'Mahatma Gandhi street-39, Khan-Uul district 15th khoroo, Ulaanbaatar, Mongolia'}</p>
          <p className=""> {mail ? mail : ' (+976) 7000 2030 - INFO@CORPORATEHOTEL.MN'}</p>
        </div>
      </div> */}
    </section>
  );
};
export default Footer;
