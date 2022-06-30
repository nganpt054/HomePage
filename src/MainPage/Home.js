
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

import Slide from "../Components/Slide";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Slide/>
      <Content />
      <Footer />
    </>
  );
}

export default Home;
