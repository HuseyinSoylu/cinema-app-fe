import React from "react";
import { Button } from "antd";
// import "antd/dist/antd.css";

const Categories: React.FC = () => {
  return (
    <div className="text-center p-4 space-x-4 md:space-x-8 md:flex md:justify-center">
      <Button type="primary" className="text-black">
        Category 1
      </Button>
      <Button type="primary" className="text-black">
        Category 2
      </Button>
      <Button type="primary" className="text-black">
        Category 3
      </Button>
      <Button type="primary" className="text-black">
        Category 4
      </Button>
    </div>
  );
};

export default Categories;
