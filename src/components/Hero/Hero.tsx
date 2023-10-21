import React from "react";
import { Carousel } from "antd";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";

const Hero: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 className="h-80 text-white leading-40 text-center bg-black">
        <img src={img1} alt="" />
      </h3>
    </div>
    <div>
      <h3 className="h-80 text-white leading-40 text-center bg-black">
        <img src={img2} alt="" />
      </h3>
    </div>
    <div>
      <h3 className="h-80 text-white leading-40 text-center bg-black">
        <img src={img3} alt="" />
      </h3>
    </div>
  </Carousel>
);

export default Hero;
