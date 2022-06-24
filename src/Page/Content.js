import Discount from "./Discount";
import Featured from "./Featured";
import GetLeast from "./GetLeast";
import LeastBlog from "./LeastBlog";
import Leatest from "./Leatest";
import Logo from "./Logo";
import Shopoffer from "./Shopoffer";
import TopCategories from "./TopCategories";
import Trending from "./Trending";
import Unique from "./Unique";




function Content(){
    return(
        <div className="content">
        <Featured/>
        <Leatest/>
        <Shopoffer/>
        <Unique/>
        <Trending/>
        <Discount/>
        <TopCategories/>
        <GetLeast/>
        <Logo/>
        <LeastBlog/>
      </div>
    )
}
export default Content;