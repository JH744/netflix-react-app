import "./Poster.style.css";

const Poster = ({ data }) => {
  const headUrl = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2";

  return (
    <>
      <div
        className="poster-section"
        style={{
          backgroundImage: `url(${headUrl + data?.poster_path})`,
        }}
      ></div>
    </>
  );
};

export default Poster;
