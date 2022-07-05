import React from "react";
import Slider from "react-slick";

export default function Slide() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };
  return (
    
      <Slider {...settings}>
      {Array(4).fill().map((slide,index)=>(
        <div index={index} className="slidecontainer">
        <div className="slide">
          <div className="slide__1">
            <img src="./images/image32.svg" alt=""></img>
          </div>
          <div className="slide__content">
            <h2>Best Furniture For Your Castle....</h2>
            <h1>New Furniture Collection Trends in 2020</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.{" "}
            </h3>
            <button>Shop Now</button>
          </div>
          <div className="slide__sofa">
            <img src="/images/sofa.svg" alt=""></img>
          </div>
        </div>
      </div>
      ))}
      
    </Slider>
 
  );
}
