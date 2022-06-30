function Footer(){
    return (
        <div className="footer">
        <div className="footer__top">
          <div className="footer__top__body">
            <div className="footer__top__body__info">
              <h1>Hekto</h1>
              <div className="footer__top__body__info__search">
                <input type="text" placeholder="Enter Email Address"></input>
                <button>Sign Up</button>
              </div>
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className="footer__top__body__pages">
              <h1>Catagories</h1>
              <p>Laptops & Computers</p>
              <p>Cameras & Photography</p>
              <p>Smart Phones & Tablets</p>
              <p>Video Games & Consoles</p>
              <p>Waterproof Headphones</p>
            </div>
            <div className="footer__top__body__pages">
              <h1>Customer Care</h1>
              <p>My Account</p>
              <p>Discount</p>
              <p>Returns</p>
              <p>Orders History</p>
              <p>Order Tracking</p>
            </div>
            <div className="footer__top__body__pages">
              <h1>Pages</h1>
              <p>Blog</p>
              <p>Browse the Shop</p>
              <p>Category</p>
              <p>Pre-Built Pages</p>
              <p>Visual Composer Elements</p>
              <p>WooCommerce Pages</p>
            </div>
          </div>
        </div>
        <div className="footer__bot">
          <div className="footer__bot__info">
            <div className="footer__bot__info__content">
              <p>©Webecy - All Rights Reserved</p>
            </div>
            <div className="footer__bot__info__icons">
              <div className="footer__bot__info__icons__circle">
                <i class="fab fa-facebook-f"></i>
              </div>
              <div className="footer__bot__info__icons__circle">
                <i class="fab fa-instagram"></i>
              </div>
              <div className="footer__bot__info__icons__circle">
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Footer;