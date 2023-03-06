/* eslint-disable @next/next/no-img-element */

const Footer = (logo) => {
  return (
    <section className="w-full md:p-[60px]  font-light bg-[#E5E5E5] ">
      <div className="flex flex-col justify-center items-center">
        <div className="h-[150px] w-[280px] mb-16">
          <img src={logo.logo || '/logo/main.png'} alt="sb" className="w-full h-full" />
        </div>
        <div className="flex text-[15px] font-bold">
          <p>Махатма Ганди гудамж 39, Сүхбаатар, Улаанбаатар, Монгол, 17011 </p>
          <p className="">- (+976) 7000 2030 - INFO@CORPORATEHOTEL.MN</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
