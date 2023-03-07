const Container = ({ children }) => {
  return (
    <div className="max-w-[1720px] mx-auto">
      <div className="w-full flex ">{children}</div>
    </div>
  );
};

export default Container;
