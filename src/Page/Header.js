import React from "react";
// import "Header.scss"
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__header-top">
          <label for="header__bars__check" className="header__header-top__bars">
            <i class="far fa-bars"></i>
          </label>

          <div className="header__header-top__left">
            <a className="header__header-top__left__left" href={{ href: "#" }}>
              <img src="mail.svg" alt=""></img>
              <p>mhhasanul@gmail.com</p>
            </a>

            <a className="header__header-top__left__right" href={{ href: "#" }}>
              <i className="fal fa-thin fa-phone-volume"></i>
              <p>(12345)67890</p>
            </a>
          </div>

          <div className="header__header-top__right">
            <a className="header__header-top__right__left" href={{ href: "#" }}>
              <p>English</p>
              <i className="fal fa-thin fa-angle-down"></i>
            </a>

            <a className="header__header-top__right__left" href={{ href: "#" }}>
              <p>USD</p>
              <i className="fal fa-thin fa-angle-down"></i>
            </a>

            <a
              className="header__header-top__right__login"
              href={{ href: "#" }}
            >
              <p>Login</p>
              <i className="fal fa-thin fa-user"></i>
            </a>

            <a
              className="header__header-top__right__wishlist"
              href={{ href: "#" }}
            >
              <p>Wishlist</p>
              <i className="fal fa-thin fa-heart"></i>
            </a>

            <a
              className="header__header-top__right__shopping"
              href={{ href: "#" }}
            >
              <i className="fal fa-thin fa-cart-plus"></i>
            </a>
          </div>
        </div>
        <input
          type="checkbox"
          className="header__check"
          id="header__bars__check"
        ></input>
        <div className="header__navbars">
          <label for="header__bars__check">
            <i class="far fa-times"></i>
          </label>
          <div>
          <a className="header-navbar__name" href={{ href: "#" }}>
              <p>Hekto</p>
            </a>
          </div>
          <div>
            <a className="header-navbar__items__home" href={{ href: "#" }}
            >
              <p style={{marginLeft:"22px"}}>Home</p>
              <i class="fal fa-thin fa-angle-down"></i>
            </a>

            <a className="header-navbar__items__page" href={{ href: "#" }}>
              <p>Page</p>
            </a>
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
        </div>
      </div>
    </>
  );
}
export default Header;
