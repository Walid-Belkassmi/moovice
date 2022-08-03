const Card = (props) => {
  const handleClickAddToFavorites = () => {
    const selectedMovieId = props.id;
    const favorites = [selectedMovieId];
    const stringifiedId = JSON.stringify(favorites);

    localStorage.setItem("favorites", stringifiedId);
    console.log(localStorage);
  };

  return (
    <>
      <div className="card d-flex col-4">
        <img
          className="img-fluid align-self-center pt-2"
          src={`https://image.tmdb.org/t/p/w300/${props.movieImage}`}
          alt={props.movieTitle}
        />
        <div className="card-body">
          <h2 className="card-title text-capitalize">{props.movieTitle}</h2>
          <p className="card-text font-weight-bold">{props.movieYear}</p>
          <p className="card-text">{props.movieDescription}</p>
          <button
            onClick={handleClickAddToFavorites}
            type="button"
            className="btn btn-primary"
          >
            Add to favorites
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
