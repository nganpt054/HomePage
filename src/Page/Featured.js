function Featured(){
    return (
        <div className="content__featured">
          <h1 className="content__featured__title">Featured Products</h1>
          <div className="content__featured__products">
            <div className="content__featured__products__product">
              <div className="content__featured__products__product__images">
                <img src="./images/image1168.svg" alt=""></img>
              </div>
              <div className="content__featured__products__product__info">
                <h2 className="content__featured__products__product__info__title">
                  Cantilever chair
                </h2>
                <div className="content__featured__products__product__info__active">
                  <div className="content__featured__products__product__info__active__active1"></div>
                  <div className="content__featured__products__product__info__active__active2"></div>
                  <div className="content__featured__products__product__info__active__active3"></div>
                </div>
                <div className="content__featured__products__product__info__code">
                  Code - Y523201
                  <p></p>
                </div>
                <div className="content__featured__products__product__info__price">
                  $42.00
                  <p></p>
                </div>
              </div>
            </div>

            <div className="content__featured__products__product1">
              <div
                className="content__featured__products__product1__images"
                style={{ backgroundColor: "#F7F7F7" }}
              >
                {/* <div className="content__featured__products__product1__images__vector">
                  <img src="/images/Group 28.svg"></img>

                  <img src="/images/Vector2.svg"></img>

                  <img src="/images/Vector3.svg"></img>
                </div> */}
                <img src="./images/image1.svg" alt=""></img>
                <button>View Details</button>
              </div>
              <div
                className="content__featured__products__product1__info"
                style={{
                  backgroundColor: " #2F1AC4",
                  boxShadowhadow: "0px 0px 25px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2 className="content__featured__products__product1__info__title">
                  Cantilever chair
                </h2>
                <div>
                  <div className="content__featured__products__product1__info__active">
                    <div className="content__featured__products__product1__info__active__active1"></div>
                    <div className="content__featured__products__product1__info__active__active2"></div>
                    <div
                      className="content__featured__products__product1__info__active__active3"
                      style={{ backgroundColor: " #FFEAC1" }}
                    ></div>
                  </div>
                </div>
                <div className="content__featured__products__product__info__code">
                  Code - Y523201
                </div>
                <div className="content__featured__products__product__info__price">
                  $42.00
                </div>
              </div>
            </div>

            <div className="content__featured__products__product">
              <div className="content__featured__products__product__images">
                <img src="./images/image1169.svg" alt=""></img>
              </div>
              <div className="content__featured__products__product__info">
                <h2 className="content__featured__products__product__info__title">
                  Cantilever chair
                </h2>
                <div>
                  <div className="content__featured__products__product__info__active">
                    <div className="content__featured__products__product__info__active__active1"></div>
                    <div className="content__featured__products__product__info__active__active2"></div>
                    <div className="content__featured__products__product__info__active__active3"></div>
                  </div>
                </div>
                <div className="content__featured__products__product__info__code">
                  Code - Y523201
                  <p></p>
                </div>
                <div className="content__featured__products__product__info__price">
                  $42.00
                  <p></p>
                </div>
              </div>
            </div>

            <div className="content__featured__products__product">
              <div className="content__featured__products__product__images">
                <img src="./images/image3.svg" alt=""></img>
              </div>
              <div className="content__featured__products__product__info">
                <h2 className="content__featured__products__product__info__title">
                  Cantilever chair
                </h2>
                <div>
                  <div className="content__featured__products__product__info__active">
                    <div className="content__featured__products__product__info__active__active1"></div>
                    <div className="content__featured__products__product__info__active__active2"></div>
                    <div className="content__featured__products__product__info__active__active3"></div>
                  </div>
                </div>
                <div className="content__featured__products__product__info__code">
                  Code - Y523201
                  <p></p>
                </div>
                <div className="content__featured__products__product__info__price">
                  $42.00
                  <p></p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="content__featured__footer">
            <img src="./images/rectangle104.svg" alt=""></img>
            <img src="./images/rectangle105.svg" alt=""></img>
            <img src="./images/rectangle105.svg" alt=""></img>
            <img src="./images/rectangle105.svg" alt=""></img>
          </div>
        </div>
    )
}
export default Featured;