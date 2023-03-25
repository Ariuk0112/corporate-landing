const SectionTitle = ({ title, index, side, isTransparent }) => {
  console.log(title, index, side, isTransparent);

  return (
    <div className={`h-[230px] w-full  ${isTransparent ? 'bg-transparent' : 'bg-white'}`}>
      <div className="relative "></div>
    </div>
  );
};

export default SectionTitle;
