import CategoriesGrid from "../../components/CategoriesGrid/CategoriesGrid";
import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import BrowseProducts from "../BrowseProducts/BrowseProducts";

const Home = () => {
    return (
        <div>
            <Hero/>
            <CategoriesGrid/>
           <BrowseProducts/>
           <Gallery/>
        </div>
    );
};

export default Home;