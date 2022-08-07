import moment from "moment";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Weekly = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment()
        .subtract(7, "d")
        .format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format(
        "YYYY-MM-DD"
      )}&api_key=fea42b1e836ac59816b8332e564dbb41`
    );

    const response = await request.json();

    setMovies(response.results);
  };

  if (!movies) {
    return <p>Loading ...</p>;
  }

  console.log(moment());
  return (
    <>
      <h1>Weekly</h1>
      <section className="d-flex flex-row flex-wrap justify-content-center">
        {movies.map((movie) => {
          return <Card movie={movie} key={movie.title} />;
        })}
      </section>
    </>
  );
};

export default Weekly;
