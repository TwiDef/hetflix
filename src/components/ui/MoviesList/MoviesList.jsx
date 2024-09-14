import React from 'react';

const MoviesList = ({ movies, totalPages, page, setPage }) => {

  return (
    <div>
      {movies.map(movie => <img key={movie.kinopoiskId} width={300} src={movie.posterUrl}></img>)}
    </div>
  );
};

export default MoviesList;