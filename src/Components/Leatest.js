import Slider from "react-slick";
import LeatestProduct from "./LeatestProduct";

function Leatest() {
  const fakeimg=["./images/image1166.svg",
                  "./images/image15.svg",
                  "./images/image1168.svg",
                  "./images/image23.svg",
                  "./images/image_32.svg",
                  "./images/image_3.svg"]
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 0,
    rows:2,
  };
  var settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    autoplaySpeed: 0,
  };
  return (
    <div className="content__leatest">
      <h1 className="content__leatest__title">Leatest Products</h1>
      <div className="content__leatest__properties">
        <a
          className="content__leatest__properties__active"
          href={{ href: "#" }}
        >
          <span>New Arrival</span>
        </a>
        <a
          className="content__leatest__properties__noactive"
          href={{ href: "#" }}
        >
          <span>Best Seller</span>
        </a>
        <a
          className="content__leatest__properties__noactive"
          href={{ href: "#" }}
        >
          <span>Featured</span>
        </a>
        <a
          className="content__leatest__properties__noactive"
          href={{ href: "#" }}
        >
          <span>Special Offer</span>
        </a>
      </div>
      <div className="content__leatest__products">
        <div id="leatest__desktop">
        <Slider {...settings}>
          <>
          <div className="content__leatest__products__1">
          <LeatestProduct img="./images/image1166.svg"></LeatestProduct>
          <LeatestProduct img="./images/image15.svg"></LeatestProduct>
          <LeatestProduct img="./images/image1168.svg"></LeatestProduct>
          
          </div>
          </>
          <>
          <div className="content__leatest__products__1">
          <LeatestProduct img="./images/image23.svg"></LeatestProduct>
          <LeatestProduct img="./images/image_32.svg"></LeatestProduct>
          <LeatestProduct img="./images/image_3.svg"></LeatestProduct>
          </div>
          </>
          <>
          <div className="content__leatest__products__1">
          <LeatestProduct img="./images/image1166.svg"></LeatestProduct>
          <LeatestProduct img="./images/image15.svg"></LeatestProduct>
          <LeatestProduct img="./images/image1168.svg"></LeatestProduct>
          
          </div>
          </>
          <>
          <div className="content__leatest__products__1">
          <LeatestProduct img="./images/image23.svg"></LeatestProduct>
          <LeatestProduct img="./images/image_32.svg"></LeatestProduct>
          <LeatestProduct img="./images/image_3.svg"></LeatestProduct>
          </div>
          </>
        </Slider>
        </div>
        <div id="leatest__mobile">
        <Slider {...settings1}>
        {fakeimg.map((img) => (
            <div className="content__leatest__products__1" >
            <LeatestProduct img={img}></LeatestProduct>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}
export default Leatest;
