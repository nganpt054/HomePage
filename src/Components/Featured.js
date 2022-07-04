import FeaturedProduct from "./FeaturedProduct";
import Slider from "react-slick";
function Featured() {
  const fakeimg = [
    "./images/image1168.svg",
    "./images/image1.svg",
    "./images/image1169.svg",
    "./images/image3.svg",
  ];
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    rows: 1,
  
    autoplaySpeed: 0,
  };
  return (
    <div className="content__featured">
      <h1 className="content__featured__title">Featured Products</h1>
      <div className="content__featured__products">
        <div id="featured__desktop">
          <Slider {...settings}>
            <>
              <div className="content__featured__products__1">
                {fakeimg.map((img,index) =>(<FeaturedProduct key={index} img={img}></FeaturedProduct>))}
                
              </div>
            </>
            <>
              <div className="content__featured__products__1">
              {fakeimg.map(img=>(<FeaturedProduct img={img}></FeaturedProduct>))}
              </div>
            </>
            <>
              <div className="content__featured__products__1">
              {fakeimg.map(img=>(<FeaturedProduct img={img}></FeaturedProduct>))}
              </div>
            </>
          </Slider>
        </div>
        <div id="featured__mobile">
          <Slider {...settings}>
            <>
              <div className="content__featured__products__1">
                <FeaturedProduct img="./images/image1168.svg"></FeaturedProduct>
                <FeaturedProduct img="./images/image1.svg"></FeaturedProduct>
              </div>
            </>
            <>
              <div className="content__featured__products__1">
                <FeaturedProduct img="./images/image1169.svg"></FeaturedProduct>
                <FeaturedProduct img="./images/image3.svg"></FeaturedProduct>
              </div>
            </>
            <>
              <div className="content__featured__products__1">
                <FeaturedProduct img="./images/image1168.svg"></FeaturedProduct>
                <FeaturedProduct img="./images/image1.svg"></FeaturedProduct>
              </div>
            </>
            <>
              <div className="content__featured__products__1">
                <FeaturedProduct img="./images/image1169.svg"></FeaturedProduct>
                <FeaturedProduct img="./images/image3.svg"></FeaturedProduct>
              </div>
            </>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Featured;
