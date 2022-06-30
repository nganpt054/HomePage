import Slider from "react-slick";
import Offer from "./Offer";

function Shopoffer() {
  const fakeimg = [
    "./images/freedelivery1.svg",
    "./images/cashback1.svg",
    "./images/premiumquality1.svg",
    "./images/24hourssupport1.svg",
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
    rows: 1,
  };
  return (
    <div className="content__shopoffer">
      <h2>What Shopex Offer!</h2>
      <div className="content__shopoffer__supports">
        <div id="supports__mobile">
          <Slider {...settings}>
            {fakeimg.map((img) => (
              <Offer img={img}></Offer>
            ))}
          </Slider>
        </div>
        <div id="supports__desktop">
          <Slider {...settings}>
            <>
            <div className="content__shopoffer__supports__1">
            <Offer img="./images/freedelivery1.svg"></Offer>
            <Offer img="./images/cashback1.svg"></Offer>
            <Offer img="./images/premiumquality1.svg"></Offer>
            <Offer img="./images/24hourssupport1.svg"></Offer>
            </div>
            </>
            <>
            <div className="content__shopoffer__supports__1">
            <Offer img="./images/freedelivery1.svg"></Offer>
            <Offer img="./images/cashback1.svg"></Offer>
            <Offer img="./images/premiumquality1.svg"></Offer>
            <Offer img="./images/24hourssupport1.svg"></Offer>
            </div>
            </>
            <>
            <div className="content__shopoffer__supports__1">
            <Offer img="./images/freedelivery1.svg"></Offer>
            <Offer img="./images/cashback1.svg"></Offer>
            <Offer img="./images/premiumquality1.svg"></Offer>
            <Offer img="./images/24hourssupport1.svg"></Offer>
            </div>
            </>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Shopoffer;
