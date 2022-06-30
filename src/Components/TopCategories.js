import Slider from "react-slick";
import Category from "./Category";

function TopCategories() {
  const fakeimg = [
    "./images/image 20.svg",
    "./images/image 1168.svg",
    "./images/image 1171.svg",
    "./images/image 20.svg",
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
    <div className="content__topcategories">
      <h1>Top Categories</h1>
      <div className="content__topcategories__categories">
        <div id="topcategories__desktop">
          <Slider {...settings}>
            <>
              <div className="content__topcategories__categories__1">
                <Category img="./images/image 20.svg"></Category>
                <Category img="./images/image 1168.svg"></Category>
                <Category img="./images/image 1171.svg"></Category>
                <Category img="./images/image 20.svg"></Category>
              </div>
            </>
            <>
              <div className="content__topcategories__categories__1">
                <Category img="./images/image 20.svg"></Category>
                <Category img="./images/image 1168.svg"></Category>
                <Category img="./images/image 1171.svg"></Category>
                <Category img="./images/image 20.svg"></Category>
              </div>
            </>
            <>
              <div className="content__topcategories__categories__1">
                <Category img="./images/image 20.svg"></Category>
                <Category img="./images/image 1168.svg"></Category>
                <Category img="./images/image 1171.svg"></Category>
                <Category img="./images/image 20.svg"></Category>
              </div>
            </>
          </Slider>
        </div>

        <div id="topcategories__mobile">
          <Slider {...settings}>
            <>
              <div className="content__topcategories__categories__1">
                <Category img="./images/image 20.svg"></Category>
                <Category img="./images/image 1168.svg"></Category>
              </div>
            </>
            <>
              <div className="content__topcategories__categories__1">
                <Category img="./images/image 1171.svg"></Category>
                <Category img="./images/image 20.svg"></Category>
              </div>
            </>
            <>
              <div className="content__topcategories__categories__1">
                <Category img="./images/image 20.svg"></Category>
                <Category img="./images/image 1168.svg"></Category>
              </div>
            </>
            <>
              <div className="content__topcategories__categories__1">
                <Category img="./images/image 1171.svg"></Category>
                <Category img="./images/image 20.svg"></Category>
              </div>
            </>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default TopCategories;
