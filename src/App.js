import "./App.scss";
import "./SCSS/responsive.scss"
import "./SCSS/Header.scss"
import "./SCSS/Navbar.scss"
import "./SCSS/Slide.scss"
import "./SCSS/Content.scss"
import "./SCSS/Footer.scss"
import "./SCSS/Featured.scss"
import "./SCSS/Leatest.scss"
import "./SCSS/Shopoffer.scss"
import "./SCSS/Unique.scss"
import "./SCSS/Trending.scss"
import "./SCSS/Discount.scss"
import "./SCSS/TopCategories.scss"
import "./SCSS/GetLeast.scss"
import "./SCSS/LeastBlog.scss"
import "./SCSS/Navigation.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./MainPage/Home"
import ShopGrid from "./MainPage/ShopGrid";
import ShoppingCurt from "./MainPage/ShoppingCurt";
import Error from "./MainPage/Error";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<ShopGrid/>}/>
      <Route path="/shopping" element={<ShoppingCurt/>}/>
      <Route path="/error" element={<Error/>}/>
    </Routes>
  );
}

export default App;


