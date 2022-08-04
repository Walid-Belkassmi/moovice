import { useEffect, useState } from "react";
import Card from "../components/Card";

const Favorites = () => {
  // const [favoriteMovies, setFavoriteMovies] = useState([]);

  // useEffect(() => {
  //   let favoriteIdsArray;

  //   if (localStorage.favoriteIds) {
  //     const localStorageIds = localStorage.getItem("favoriteIds");
  //     favoriteIdsArray = JSON.parse(localStorageIds);

  //     const favorite = [...favoriteMovies];

  //     favoriteIdsArray.map((id) => {
  //       fetchFavs(id, favorite);
  //     });
  //   }
  // }, []);

  // const fetchFavs = async (id, favorite) => {
  //   const request = await fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=8bf0372ddd1eb53a0909b7e274ee5973`
  //   );
  //   const response = await request.json();

  //   favorite.push(response);
  //   setFavoriteMovies(favorite);
  // };

  // if (!favoriteMovies) {
  //   return <p>Loading ...</p>;
  // }

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFavoriteMovies();
  }, []);

  const fetchFavoriteMovies = async () => {
    // recup les ids du localstorage
    const stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
    const favoriteIds = JSON.parse(stringifiedFavoriteIds);

    if (favoriteIds) {
      // construire notre boite de promesses
      const promises = favoriteIds.map((id) => {
        return fetchMovie(id);
      });

      // dire a Promise.all de prendre la boite de promesses
      // de resoudre toutes ces promesses
      // une fois qu'elle a fini, de nous donner une
      // nouvelle boite avec toutes les reponses
      const response = await Promise.all(promises);
      setMovies(response);
    }
  };

  const fetchMovie = async (id) => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    );
    const response = await request.json();
    return response;
  };
  return (
    <>
      <h1>Favorites</h1>
      {movies.length === 0 && <p className="text-center">Pas de favoris</p>}
      <section className="d-flex flex-row flex-wrap justify-content-center">
        {movies.map((movie) => {
          return <Card key={movie.title} movie={movie} />;
        })}
      </section>
    </>
  );
};

export default Favorites;
