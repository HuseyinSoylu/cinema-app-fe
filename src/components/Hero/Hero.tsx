import React from "react";
import { Carousel } from "antd";
import avatar from "../../assets/images/HomeHero/avatar.jpg";
import oppenheimer from "../../assets/images/HomeHero/oppenheimer.jpeg";
import stillwater from "../../assets/images/HomeHero/stillwater.jpg";

const Hero: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 className="h-120 text-white leading-40 text-center bg-black">
        <img src={avatar} alt="" />
      </h3>
    </div>
    <div>
      <h3 className="h-120 text-white leading-40 text-center bg-black">
        <img src={oppenheimer} alt="" />
      </h3>
    </div>
    <div>
      <h3 className="h-120 text-white leading-40 text-center bg-black">
        <img src={stillwater} alt="" />
      </h3>
    </div>
  </Carousel>
);

export default Hero;
