import { usePopularMoviesQuery } from "../../../../hooks/usePoplarMovies";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import LodingSpinner from "../../../../components/LodingSpinner";

const Banner = () => {
  const headUrl = "https://media.themoviedb.org/t/p/w1066_and_h600_bestv2";
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("data", data);
  const randNum = (Math.random() * 20).toFixed(0);
  console.log(randNum);
  if (isLoading) return <LodingSpinner />;
  if (isError) return <Alert variant="danger">{error.message};</Alert>;
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${headUrl + data?.results[randNum].poster_path})`,
      }}
    >
      <div className="banner-text-area">
        <h1>{data?.results[randNum].title}</h1>
        <p>{data?.results[randNum].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
