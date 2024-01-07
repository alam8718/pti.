import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {useRef} from "react";
import Card from "./components/Food/Card";
import TopBar from "./components/Food/TopBar";
import {useEffect} from "react";
import {useState} from "react";

function Carousel({data, firstText, secondText}) {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    arrows: false,
    responsive: [
      {
        breakpoint: 550, // Adjust as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760, // Adjust as needed
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400, // Adjust as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 3150, // Adjust as needed
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col gap-3 my-20 ">
        {/* topbar with name  */}
        <div>
          <TopBar
            first={firstText}
            second={secondText}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
        {/* //the card items */}
        <div>
          <Slider ref={sliderRef} {...settings}>
            {data.map((item) => (
              <div className="" key={item.Id}>
                <Card key={item.Id} item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Carousel;
