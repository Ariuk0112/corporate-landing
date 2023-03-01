const Container = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full flex ">{children}</div>
    </div>
  );
};

export default Container;
