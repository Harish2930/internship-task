// src/components/FavoriteMovies.js
import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (

    <div className="grid grid-cols-4 gap-4 mt-10">
      {favorites.map((movie) => (
            <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full  bg-slate-900 p-8 flex-col" key={movie.id}>
                <div className="flex items-center mb-3">
                    <h2 className="text-white text-lg font-medium">{movie.movie}</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white">
                    Rating: {movie.rating}
                    </p>
                      <button onClick={() => window.location.href = movie.imdb_url} className="bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">View on IMDb</button>
                    </div>
                </div>
            </div>
      ))}
    </div>
  );
};

export default FavoriteMovies;

