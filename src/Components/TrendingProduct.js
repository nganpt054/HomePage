function TrendingProduct({img}){
    return(
        <div className="content__trending__products__1__product">
              <div className="content__trending__products__1__product__image">
                <img src={img} alt=""></img>
              </div>
              <h3>Cantilever chair</h3>
              <div className="content__trending__products__1__product__price">
                <p>$26.00 </p>
                <span>$42.00</span>
              </div>
            </div>
    )
}
export default TrendingProduct;