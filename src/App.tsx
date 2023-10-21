import { useState } from "react";
import { Layout } from "./Layout/Layout";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Slider from "./components/Home/Slider";
import FilmMenu from "./components/Home/FilmMenu";
import Carousel from "./components/Home/Carousel";
function App() {
  const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",

    // Add more images
  ];

  const films = [
    {
      title: "Film 1",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      genres: ["Action", "Adventure"],
    },
    {
      title: "Film 2",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      genres: ["Drama", "Romance"],
    },
    {
      title: "Film 2",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      genres: ["Drama", "Romance"],
    },
    {
      title: "Film 2",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      genres: ["Drama", "Romance"],
    },
    {
      title: "Film 2",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      genres: ["Drama", "Romance"],
    },
    {
      title: "Film 2",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      genres: ["Drama", "Romance"],
    },
    {
      title: "Film 2",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      genres: ["Drama", "Romance"],
    },
    {
      title: "Film 2",
      image:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      genres: ["Drama", "Romance"],
    },
  ];

  return (
    <>
      <Layout>
        <Hero />
        <Categories />
        <Carousel />
        <h1 className="text-center align-middle">Test</h1>
      </Layout>
    </>
  );
}

export default App;
