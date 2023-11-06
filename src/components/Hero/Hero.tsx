// import React from "react";
// import { Carousel } from "antd";
// import avatar from "../../assets/images/HomeHero/avatar.jpg";
// import oppenheimer from "../../assets/images/HomeHero/oppenheimer.jpeg";
// import stillwater from "../../assets/images/HomeHero/stillwater.jpg";

// const Hero: React.FC = () => (
//   <Carousel autoplay>
//     <div>
//       <h3 className="h-120 text-white leading-40 text-center bg-black">
//         <img src={avatar} alt="" />
//       </h3>
//     </div>
//     <div>
//       <h3 className="h-120 text-white leading-40 text-center bg-black">
//         <img src={oppenheimer} alt="" />
//       </h3>
//     </div>
//     <div>
//       <h3 className="h-120 text-white leading-40 text-center bg-black">
//         <img src={stillwater} alt="" />
//       </h3>
//     </div>
//   </Carousel>
// );

// export default Hero;

import React from "react";
import { Carousel } from "antd";
import avatar from "../../assets/images/HomeHero/avatar.jpg";
import oppenheimer from "../../assets/images/HomeHero/oppenheimer.jpeg";
import stillwater from "../../assets/images/HomeHero/stillwater.jpg";

const Hero: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 className="h-120 text-white leading-40 text-center bg-black">
        <div className="w-64 h-64 mx-auto">
          <img src={avatar} alt="" className="w-full h-full object-cover" />
        </div>
      </h3>
    </div>
    <div>
      <h3 className="h-120 text-white leading-40 text-center bg-black">
        <div className="w-64 h-64 mx-auto">
          <img src={oppenheimer} alt="" className="w-full h-full object-cover" />
        </div>
      </h3>
    </div>
    <div>
      <h3 className="h-120 text-white leading-40 text-center bg-black">
        <div className="w-64 h-64 mx-auto">
          <img src={stillwater} alt="" className="w-full h-full object-cover" />
        </div>
      </h3>
    </div>
  </Carousel>
);

export default Hero;
