import { useEffect } from "react";
import { useState } from "react";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

import Slide from "../Components/Slide";

function Home() {
  const [goTop, setGoTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 3000) {
        setGoTop(true);
      } else {
        setGoTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <Header />
      <Navbar />
      <Slide />
      <Content />
      <Footer />
      {goTop && (
        <button
          id="myBtn"
          onClick={handleClick}
        >
          Go to top
        </button>
      )}
    </>
  );
}

export default Home;
