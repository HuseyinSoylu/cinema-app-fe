import React from "react";

interface Film {
  title: string;
  image: string;
  genres: string[];
}

interface FilmMenuProps {
  films: Film[];
}

const FilmMenu: React.FC<FilmMenuProps> = ({ films }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {films.map((film, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={film.image}
            alt={film.title}
            className="w-32 h-48 object-cover"
          />

          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold">{film.title}</h2>
            <p className="text-sm text-gray-500">{film.genres.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmMenu;
