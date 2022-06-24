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

import Content from "./Page/Content";
import Footer from "./Page/Footer";
import Header from "./Page/Header";
import Navbar from "./Page/Navbar";
import Slide from "./Page/Slide";

function App() {
  return (
    <>
    
        <Header/>
        <Navbar/>
    
      <Slide/>
      <Content/>
      <Footer/>
    </>
  );
}

export default App;
