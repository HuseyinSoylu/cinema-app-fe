import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const navigate = useNavigate();

  // Dummy veri
  const dummyImages = [
    { id: 1, name: "Resim 1", url: "https://via.placeholder.com/150" },
    { id: 2, name: "Resim 2", url: "https://via.placeholder.com/150" },
    { id: 3, name: "Resim 3", url: "https://via.placeholder.com/150" },
    { id: 4, name: "Resim 4", url: "https://via.placeholder.com/150" },
    { id: 5, name: "Resim 5", url: "https://via.placeholder.com/150" },
    { id: 6, name: "Resim 6", url: "https://via.placeholder.com/150" },
  ];

  useEffect(() => {
    setImages(dummyImages);
  }, []);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    navigate(`/film/${itemId}`);
    console.log(`Item id: ${itemId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image) => (
          <div
            key={image.id}
            className="p-2"
            onClick={() => handleItemClick(image.id)}
          >
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-auto cursor-pointer"
            />
            <p className="text-center mt-2">{image.name}</p>
          </div>
        ))}
      </Slider>
      {selectedItemId && <p>Item Id: {selectedItemId}</p>}
    </div>
  );
};

export default Carousel;
