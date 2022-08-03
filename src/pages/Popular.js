import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const Popular = () => {
  const params = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8af06974346546d4ea37dbcb45e39277"
    );
    const response = await request.json();
    setMovies(response);
    // console.log(response);
  };
  console.log(movies);

  if (!movies) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <h1>Popular</h1>
      <section className="d-flex flex-row flex-wrap">
        {movies.results.map((movie) => {
          return (
            <Card
              key={movie.title}
              movieImage={movie.backdrop_path}
              movieTitle={movie.title}
              movieYear={movie.release_date}
              movieDescription={movie.overview}
            />
          );
        })}
      </section>
    </>
  );
};

export default Popular;
