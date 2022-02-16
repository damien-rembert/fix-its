const FixIt3 = () => {
  return (
    <>
      <Movie title="akira" year="1991" />
      <Movie title="point break" year="1991" />
      <Movie title="blade runner: 2049" year="2017" />
    </>
  );
};

const Movie = ({ title, year }) => {
  return (
    <>

      <h2>{title}</h2>
      <h3>{year}</h3>
    </>
  );
};
export default FixIt3;
