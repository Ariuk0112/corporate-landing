const SectionTitle = ({ title, index, isRight, isTransparent }) => {
  return (
    <div className={`h-[230px] w-full font-Montserrat ${isTransparent ? 'bg-transparent' : 'bg-black'}`}>
      <div className="relative w-full h-full font-montserrat">
        <div className={`absolute bottom-0 ${isRight ? 'right-0' : 'left-10 md:left-[180px]'}`}>
          <h5 className="text-[74px] md:text-[148px] text-[#FFFFFF33] leading-none uppercase">{title}</h5>
        </div>
        <div
          className={`z-20 absolute top-1/2 transform -translate-y-1/2 
        ${isRight ? 'right-32' : 'left-10 md:left-[40px]'}
       `}
        >
          <div className="flex items-end h-full">
            <div className="my-auto w-[70px] border-[2px] border-[#B0985A]"></div>
            <div className="text-[20px] md:text-[48px] pl-[29px]">
              <h1 className="uppercase text-[#B58E3E] leading-none">{index}</h1>
              <p className="uppercase leading-none">{title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
