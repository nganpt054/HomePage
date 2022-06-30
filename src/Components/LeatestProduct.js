function LeatestProduct({img}){
    return (
        <div className="content__leatest__products__1__product1">
        <div className="content__leatest__products__1__product1__images">
          <div className="content__leatest__products__1__product1__images__vector">
            <img src="/images/Group 28.svg" alt=""></img>

            <img src="/images/uil_heart-alt.svg" alt=""></img>

            <img src="/images/uil_search-plus.svg" alt=""></img>
          </div>
          <img src={img} alt=""></img>
        </div>
        <div className="content__leatest__products__1__product1__info">
          <h2 className="content__leatest__products__1__product1__info__title">
            Cantilever chair
          </h2>
          <div className="content__leatest__products__1__product1__info__code">
            <p>$42.00</p>
            <span>$65.00</span>
          </div>
        </div>
      </div>
    )
}
export default LeatestProduct;