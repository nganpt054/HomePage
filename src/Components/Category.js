function Category({img}){
    return(
        <div className="content__topcategories__categories__1__category">
              <div className="content__topcategories__categories__1__category__image">
                <img src={img}></img>
                <button>View Shop</button>
              </div>
              <div className="content__topcategories__categories__1__category__text">
                <div className="content__topcategories__categories__1__category__text__title">
                  <p className="content__topcategories__categories__1__category__text__title__1">
                    Mini
                  </p>
                  <p className="content__topcategories__categories__1__category__text__title__2">
                    LCW
                  </p>
                  <p className="content__topcategories__categories__1__category__text__title__3">
                    Chair
                  </p>
                </div>
                <div className="content__topcategories__categories__1__category__text__price">
                  <p>$56.00</p>
                </div>
              </div>
            </div>
    )
}
export default Category;