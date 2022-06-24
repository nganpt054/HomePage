function Trending(){
    return(
        <div className="content__trending">
          <h2>Trending Products</h2>
          <div className="content__trending__products">
            <div className="content__trending__products__product">
              <div className="content__trending__products__product__image">
                <img src="./images/box for image.svg" alt=""></img>
              </div>
              <h3>Cantilever chair</h3>
              <div className="content__trending__products__product__price">
                <p>$26.00 </p>
                <span>$42.00</span>
              </div>
            </div>

            <div className="content__trending__products__product">
              <div className="content__trending__products__product__image">
                <img src="./images/box for image1.svg" alt=""></img>
              </div>
              <h3>Cantilever chair</h3>
              <div className="content__trending__products__product__price">
                <p>$26.00 </p>
                <span>$42.00</span>
              </div>
            </div>

            <div className="content__trending__products__product">
              <div className="content__trending__products__product__image">
                <img src="./images/box for image2.svg" alt=""></img>
              </div>
              <h3>Cantilever chair</h3>
              <div className="content__trending__products__product__price">
                <p>$26.00 </p>
                <span>$42.00</span>
              </div>
            </div>

            <div className="content__trending__products__product">
              <div className="content__trending__products__product__image">
                <img src="./images/box for image3.svg" alt=""></img>
              </div>
              <h3>Cantilever chair</h3>
              <div className="content__trending__products__product__price">
                <p>$26.00 </p>
                <span>$42.00</span>
              </div>
            </div>
          </div>
          <div className="content__trending__allproducts">
            <div className="content__trending__allproducts__left">
              <div className="content__trending__allproducts__left__title">
                <p>23% off in all products</p>
                <a href="#">Shop Now</a>
              </div>
              <img src="./images/image1162.svg"></img>
            </div>
            <div className="content__trending__allproducts__center">
              <div className="content__trending__allproducts__center__title">
                <p>23% off in all products</p>
                <a href="#">View Collection</a>
              </div>
              <img
                className="content__trending__allproducts__center__images"
                src="./images/image1161.svg"
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
    )
}
export default Trending;