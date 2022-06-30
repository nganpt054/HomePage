function FeaturedProduct ({img}){
    return (
        <div className="content__featured__products__1__product">
              <div className="content__featured__products__1__product__images">
              <div className="content__featured__products__1__product__images__vector">
                  <img src="/images/fluent_cart-24-regular.svg" alt=""></img>

                  <img src="/images/uil_heart-alt.svg" alt=""></img>

                  <img src="/images/uil_search-plus.svg" alt=""></img>
                </div>
                <img src={img}alt=""></img>
                <button>View Details</button>
                
              </div>
              <div className="content__featured__products__1__product__info">
                <h2 className="content__featured__products__1__product__info__title">
                  Cantilever chair
                </h2>
                <div>
                  <div className="content__featured__products__1__product__info__active">
                    <div className="content__featured__products__1__product__info__active__active1"></div>
                    <div className="content__featured__products__1__product__info__active__active2"></div>
                    <div className="content__featured__products__1__product__info__active__active3"></div>
                  </div>
                </div>
                <div className="content__featured__products__1__product__info__code">
                  Code - Y523201
                  <p></p>
                </div>
                <div className="content__featured__products__1__product__info__price">
                  $42.00
                  <p></p>
                </div>
              </div>
            </div>
    )
}
export default FeaturedProduct;