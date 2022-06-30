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
    slidePerShow:1,
    autoplaySpeed: 0,
  };
  return (
    <div className="content__featured">
      <h1 className="content__featured__title">Featured Products</h1>
      <div className="content__featured__products">
        <div >
        <Slider {...settings}>
          {fakeimg.map((img) => (
            <>
              <div className="content__featured__products__1" id="featured__desktop">
                <FeaturedProduct img={img}></FeaturedProduct>

                <FeaturedProduct img={img}></FeaturedProduct>

                <FeaturedProduct img={img}></FeaturedProduct>

                <FeaturedProduct img={img}></FeaturedProduct>
              </div>
              
              <div className="content__featured__products__1" id="featured__phone">
                <FeaturedProduct img={img}></FeaturedProduct>

                <FeaturedProduct img={img}></FeaturedProduct>
              </div>
            </>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}
export default Featured;
