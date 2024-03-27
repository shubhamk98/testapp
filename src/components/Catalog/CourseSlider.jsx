/* eslint-disable react/prop-types */
import Slider from "react-slick";
import Card from "./Card"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseSlider = ({ courses }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container ">
      <Slider {...settings} className="pl-4">
        {courses.map((course, index) => (
          <div key={index} >
            <Card course={course} Height={"h-[200px] md:h-[160px]"}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
