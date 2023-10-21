import React from "react";
import { Carousel } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFilm } from "../../store/films/filmsSlice"; // Replace with your action and reducer names
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { LeftArrow, RightArrow, Arrow } from "./Arrow";

const Slider: React.FC<{ images: string[] }> = ({ images }) => {
  const dispatch = useDispatch();
  //   const history = useHistory();
  const navigate = useNavigate();

  const handleImageClick = (filmId: number) => {
    dispatch(selectFilm(filmId));
    navigate(`/film/${filmId}`);
  };

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </Arrow>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
        Right
      </Arrow>
    );
  }

  return (
    // <Carousel autoplay>
    //   {images.map((image, index) => (
    //     <div key={index} onClick={() => handleImageClick(index + 1)}>
    //       <img src={image} alt={`Film ${index + 1}`} />
    //     </div>
    //   ))}
    // </Carousel>

    // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    //   {images.map(({ id }) => (
    //     <Card
    //       itemId={id} // NOTE: itemId is required for track items
    //       title={id}
    //       key={id}
    //       onClick={handleClick(id)}
    //       selected={isItemSelected(id)}
    //     />
    //   ))}
    // </ScrollMenu>
  );
};

export default Slider;
