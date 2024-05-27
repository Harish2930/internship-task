// src/components/MovieList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/moviesSlice';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies)
  const favorites = useSelector((state) => state.movies.favorites);

  const isFavorite = (movie) => favorites.some(fav => fav.id === movie.id);

  const toggleFavorite = (movie) => {
    if (isFavorite(movie)) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
       {movies.map((movie) => (
          <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full  bg-slate-900 p-8 flex-col">
              <div className="flex items-center mb-3">
                  <h2 className="text-white text-lg font-medium">{movie.movie}</h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                  <p className="leading-relaxed text-base text-white">
                  Rating: {movie.rating}
                  </p>
                  <div className="flex justify-center items-center gap-5">
                    <button onClick={() => window.location.href = movie.imdb_url} className="bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">View on IMDb</button>
                    <button onClick={() => toggleFavorite(movie)} className="bg-green-400 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
                      {isFavorite(movie) ? 'Unfavorite' : 'Favorite'}
                    </button>
                  </div>
              </div>
          </div>
      </div>
      ))}
    </div>
  );
};

export default MovieList;
