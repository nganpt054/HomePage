import Slider from "react-slick";
import TrendingProduct from "./TrendingProduct";

function Trending() {
  const fakeimg = [
    "./images/box for image.svg",
    "./images/box for image1.svg",
    "./images/box for image2.svg",
    "./images/box for image3.svg",
  ];
  var settings = {
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
    <div className="content__trending">
      <h2>Trending Products</h2>
      <div className="content__trending__products">
        <div id="trending__desktop">
          <Slider {...settings}>
            <>
              <div className="content__trending__products__1">
                <TrendingProduct img="./images/box for image.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image1.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image2.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image3.svg"></TrendingProduct>
              </div>
            </>
            <>
              <div className="content__trending__products__1">
                <TrendingProduct img="./images/box for image.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image1.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image2.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image3.svg"></TrendingProduct>
              </div>
            </>
            <>
              <div className="content__trending__products__1">
                <TrendingProduct img="./images/box for image.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image1.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image2.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image3.svg"></TrendingProduct>
              </div>
            </>
          </Slider>
        </div>
        <div id="trending__mobile">
          <Slider {...settings}>
            <>
              <div className="content__trending__products__1">
                <TrendingProduct img="./images/box for image.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image1.svg"></TrendingProduct>
              </div>
            </>
            <>
              <div className="content__trending__products__1">
                <TrendingProduct img="./images/box for image2.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image3.svg"></TrendingProduct>
              </div>
            </>
            <>
              <div className="content__trending__products__1">
                <TrendingProduct img="./images/box for image.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image1.svg"></TrendingProduct>
              </div>
            </>
            <>
              <div className="content__trending__products__1">
                <TrendingProduct img="./images/box for image2.svg"></TrendingProduct>
                <TrendingProduct img="./images/box for image3.svg"></TrendingProduct>
              </div>
            </>
          </Slider>
        </div>
      </div>
      <div className="content__trending__allproducts">
        <div className="content__trending__allproducts__left">
          <div className="content__trending__allproducts__left__title">
            <p>23% off in all products</p>
            <a href="#">Shop Now</a>
          </div>
          <img src="./images/image1162.svg" alt=""></img>
        </div>
        <div className="content__trending__allproducts__center">
          <div className="content__trending__allproducts__center__title">
            <p>23% off in all products</p>
            <a  href="#" >View Collection</a>
          </div>
          <img
            className="content__trending__allproducts__center__images"
            src="./images/image1161.svg" alt=""
          ></img>
        </div>
        <div className="content__trending__allproducts__right">
          <div className="content__trending__allproducts__right__product">
            <div className="content__trending__allproducts__right__product__image">
              <img src="./images/image30.svg"></img>
            </div>
            <div className="content__trending__allproducts__right__product__info">
              <p>Executive Seat chair</p>
              <span>$32.00</span>
            </div>
          </div>
          <div className="content__trending__allproducts__right__product">
            <div className="content__trending__allproducts__right__product__image">
              <img src="./images/image19.svg"></img>
            </div>
            <div className="content__trending__allproducts__right__product__info">
              <p>Executive Seat chair</p>
              <span>$32.00</span>
            </div>
          </div>
          <div className="content__trending__allproducts__right__product">
            <div className="content__trending__allproducts__right__product__image">
              <img src="./images/image28.svg"></img>
            </div>
            <div className="content__trending__allproducts__right__product__info">
              <p>Executive Seat chair</p>
              <span>$32.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trending;
