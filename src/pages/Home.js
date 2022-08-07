import { useEffect, useState } from "react";
import Card from "../components/Card";
import LoadingFilmAnim from "../components/LoadingFilmAnim";

const Home = () => {
  const [latest, setLatest] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  // key : api_key=8bf0372ddd1eb53a0909b7e274ee5973

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Latest
    const requestLatest = await fetch(
      `https://api.themoviedb.org/3/movie/latest?api_key=8bf0372ddd1eb53a0909b7e274ee5973&language=en-US`
    );
    const responseLatest = await requestLatest.json();

    setLatest(responseLatest.results);

    // top rated
    const requestTopRated = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`
    );
    const responseTopRated = await requestTopRated.json();

    setTopRated(responseTopRated.results);

    // Now playing
    const requestNowPlaying = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`
    );
    const responseNowPlaying = await requestNowPlaying.json();

    setNowPlaying(responseNowPlaying.results);

    // upcoming
    const requestUpcoming = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=8bf0372ddd1eb53a0909b7e274ee5973&page=1`
    );
    const responseUpcoming = await requestUpcoming.json();

    setUpcoming(responseUpcoming.results);
  };

  return (
    <>
      <h1>Home</h1>
      <section className="mt-2">
        <h3 className="home-title">Latest</h3>
        <article className="movie-bar top-rated d-flex flex-row ">
          {!latest ? (
            <>
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
            </>
          ) : (
            latest.map((movie) => {
              return <Card movie={movie} key={movie.id} />;
            })
          )}
        </article>
      </section>

      {/* topRated */}
      <section className="mt-5">
        <h3 className="home-title">Top Rated</h3>
        <article className="movie-bar top-rated d-flex flex-row ">
          {!topRated ? (
            <>
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
            </>
          ) : (
            topRated.map((movie) => {
              return <Card movie={movie} key={movie.id} />;
            })
          )}
        </article>
      </section>

      <section className="mt-5">
        <h3 className="home-title">Now playing</h3>
        <article className="movie-bar top-rated d-flex flex-row ">
          {!nowPlaying ? (
            <>
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
            </>
          ) : (
            nowPlaying.map((movie) => {
              return <Card movie={movie} key={movie.id} />;
            })
          )}
        </article>
      </section>

      <section className="mt-5">
        <h3 className="home-title">Upcoming</h3>
        <article className="movie-bar top-rated d-flex flex-row ">
          {!nowPlaying ? (
            <>
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
              <LoadingFilmAnim />
            </>
          ) : (
            upcoming.map((movie) => {
              return <Card movie={movie} key={movie.id} />;
            })
          )}
        </article>
      </section>
    </>
  );
};

export default Home;
