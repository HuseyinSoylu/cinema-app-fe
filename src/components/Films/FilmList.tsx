import React from "react";

const FilmList = ({ films }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {films.map((film, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={film.Poster}
            alt={film.Title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {film.Title}
            </h2>
            <p className="text-gray-600">{film.Year}</p>
            <p className="text-gray-600">Rated: {film.Rated}</p>
            <p className="text-gray-600">Released: {film.Released}</p>
            <p className="text-gray-600">Runtime: {film.Runtime}</p>
            <p className="text-gray-600">Genre: {film.Genre}</p>
            <p className="text-gray-600">Director: {film.Director}</p>
            <p className="text-gray-600">Actors: {film.Actors}</p>
            <p className="text-gray-600">Plot: {film.Plot}</p>
            <p className="text-gray-600">Language: {film.Language}</p>
            <p className="text-gray-600">Country: {film.Country}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-2xl text-yellow-500">{film.imdbRating}</p>
              <p className="text-gray-600">{film.imdbVotes}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmList;
