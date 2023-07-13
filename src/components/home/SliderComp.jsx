import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Top Quality Shoes Here!</div>
            <div className="text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores rem delectus consequuntur autem commodi? Illum
              sapiente, porro a, voluptatibus, quae itaque doloribus totam at
              nobis aut iure consequuntur cupiditate inventore?
            </div>
            <button className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-300">
              Explore
            </button>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-damenschuh-FgqV2f.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Top Quality Shoes Here!</div>
            <div className="text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores rem delectus consequuntur autem commodi? Illum
              sapiente, porro a, voluptatibus, quae itaque doloribus totam at
              nobis aut iure consequuntur cupiditate inventore?
            </div>
            <button className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-300">
              Explore
            </button>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d06ad3b3-dddc-435d-98af-690066dc8143/air-jordan-1-low-schuhe-fur-2mLM4c.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
