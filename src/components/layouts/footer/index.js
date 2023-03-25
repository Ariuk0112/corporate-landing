/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Container from '../Container';

const Footer = ({ logo, address, mail }) => {
  return (
    <section className="w-full md:p-[60px]  font-light bg-[#E5E5E5]"
    
    style={{
      backgroundImage: `url('/footer.png')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <Container>
        <div className='w-full flex'>
          <div className='w-32 md:w-[300px]'>
          <img src={'/logo/main.png'} alt="sb" className="w-full h-full" />
          </div>
          <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3'>

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
