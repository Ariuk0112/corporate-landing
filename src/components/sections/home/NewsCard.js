const NewsCard = ({ news }) => {
  return (
    <div className="w-full shadow-md rounded h-48 md:h-[430px]">
      {news && (
        <div
          className="text-center text-white flex flex-col h-full rounded-lg p-5 md:px-[65px] md:pb-[70px]"
          style={{
            backgroundImage: `url('${news.image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="my-auto w-full">
            <h5 className="font-semibold text-[#B58E3E] text-2xl md:text-[34px] text-justify leading-none">
              {news.title}
            </h5>
          </div>
          <div className=" my-auto w-full leading-none text-[#B58E3E] text-[32px]">
            <p>{news.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
