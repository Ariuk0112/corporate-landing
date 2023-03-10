const Container = ({ children }) => {
  return (
    <div className="max-w-[1550px] md:mx-10 mx-5">
      <div className="w-full flex ">{children}</div>
    </div>
  );
};

export default Container;
