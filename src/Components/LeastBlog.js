import Slider from "react-slick";
import Blog from "./Blog";

function LeastBlog() {
  const fakeimg = [
    "/images/JIUjvqe2ZHg.svg",
    "/images/2dcYhvbHV-M.svg",
    "/images/2dcYhvbHV-M2.svg",
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
    <div className="content__leastblog">
      <h1>Leatest Blog</h1>
      <div className="content__leastblog__leastblogs">
        <div id="leastblogs__desktop">
          <Slider {...settings}>
              <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/JIUjvqe2ZHg.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M2.svg"></Blog>
              </div>
              </>
              <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/JIUjvqe2ZHg.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M2.svg"></Blog>
              </div>
              </>
              <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/JIUjvqe2ZHg.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M2.svg"></Blog>
              </div>
              </>
          </Slider>
        </div>
        <div id="leastblogs__mobile">
          <Slider {...settings}>
            <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/JIUjvqe2ZHg.svg"></Blog>
              </div>
            </>
            <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/2dcYhvbHV-M.svg"></Blog>
              </div>
            </>
            <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/2dcYhvbHV-M2.svg"></Blog>
              </div>
            </>
          </Slider>
        </div>
        <div id="leastblogs__ipad">
          <Slider {...settings}>
            <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/JIUjvqe2ZHg.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M.svg"></Blog>
              </div>
            </>
            <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/2dcYhvbHV-M.svg"></Blog>
                <Blog img="/images/2dcYhvbHV-M2.svg"></Blog>
              </div>
            </>
            <>
              <div className="content__leastblog__leastblogs__1">
                <Blog img="/images/2dcYhvbHV-M2.svg"></Blog>
                <Blog img="/images/JIUjvqe2ZHg.svg"></Blog>
              </div>
            </>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default LeastBlog;
