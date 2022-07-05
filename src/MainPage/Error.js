import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import Navbar from "../Components/Navbar";
import Navigation from "../Components/Navigation";

function Error(){
    return(
        <>
        <Header></Header>
        <Navbar></Navbar>
        <Navigation title="404 Not Found" name="404 Not Found"></Navigation>
        <></>
        <Logo></Logo>
        <Footer></Footer>
        </>
    )
}
export default Error;