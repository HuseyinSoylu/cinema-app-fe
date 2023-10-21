import React from "react";

function Carousel() {
  return (
    <>
      <div className="carousel carousel-center space-x-10 items-center">
        <div className="carousel-item">
          <img
            src="http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
            alt="Burger"
          />
          <h1 className="">Avatar</h1>
        </div>
        {/* <div className="carousel-item">
          <img
            src="http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg"
            alt="Burger"
          />
        </div> */}
        <div className="carousel-item">
          <img
            src="http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg"
            alt="Burger"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
