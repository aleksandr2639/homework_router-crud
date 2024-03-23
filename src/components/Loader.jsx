import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
  return (
    <>
      <GridLoader
        color="#8636d6"
        margin={6}
        size={17}
        speedMultiplier={1}
        width={140}
      />
    </>
  );
};

export default Loader;
