import { Link } from "react-router-dom";
import ShopGrid from "../ShopGrid";
import Home from "../Home";
function Navbar(){
    return(
        <div className="navbar">
          <div className="header-navbar">
            <a className="header-navbar__name" href={{ href: "#" }}>
              <p>Hekto</p>
            </a>

            <div className="header-navbar__items">
              <Link to="/">
              <a className="header-navbar__items__home" href={{ href: "#" }}>
                <p>Home</p>
                <i class="fal fa-thin fa-angle-down"></i>
              </a>
              </Link>

              <Link to="/shop">
              <a className="header-navbar__items__page" >
                <p>Page</p>
              </a>
              </Link>
              <a className="header-navbar__items__product" href={{ href: "#" }}>
                <p>Product</p>
              </a>
              <a className="header-navbar__items__blog" href={{ href: "#" }}>
                <p>Blog</p>
              </a>
              <a className="header-navbar__items__shop" href={{ href: "#" }}>
                <p>Shop</p>
              </a>
              <a className="header-navbar__items__contact" href={{ href: "#" }}>
                <p>Contact</p>
              </a>
            </div>

            <div className="header-navbar__search">
              <input></input>
              <div className="header-navbar__search__square">
                <i class="fal fa-search"></i>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Navbar;