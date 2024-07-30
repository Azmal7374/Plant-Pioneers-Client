import Carosuel from "../../components/Carosuel/Carosuel";
import CategoriesGrid from "../../components/CategoriesGrid/CategoriesGrid";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import BrowseProducts from "../BrowseProducts/BrowseProducts";

const Home = () => {
    return (
        <div className="mt-10 mr-20 ml-20">
            <Carosuel/>
            <Hero/>
            <CategoriesGrid/>
           <BrowseProducts/>
           <Gallery/>
        </div>
    );
};

export default Home;