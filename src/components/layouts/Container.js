const Container = ({ children, mx = '5' }) => {
  return (
    <div className={`max-w-[1550px] overflow-x-hidden overflow-y-visible md:mx-auto mx-${mx}`}>
      <div className="w-full flex">{children}</div>
    </div>
  );
};

export default Container;
