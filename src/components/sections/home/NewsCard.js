const NewsCard = ({ news }) => {
  return (
    <div className="w-full shadow-md rounded h-48 md:h-[430px]">
      {news && (
        <div
          className="text-center text-white flex flex-col h-full rounded-lg p-5 md:p-[65px]"
          style={{
            backgroundImage: `url('${news.image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="my-auto w-full">
            <h5 className="font-semibold text-2xl md:text-[40px] leading-none">{news.title}</h5>
          </div>
          <div className="mt-auto w-full leading-none">
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
