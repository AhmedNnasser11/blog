import InnovationAndTech from "../Components/ InnovationAndTech/ InnovationAndTech"
import FeaturedPosts from "../Components/FeaturedPosts/FeaturedPosts"
import FadeSlider from "../Components/Slider/FadeSlider"
import MostPopular from "../Components/MostPopular/MostPopular"

const Home = () => {
    return (
        <header>
            <FadeSlider />
            <FeaturedPosts />
            <InnovationAndTech />
            <MostPopular />
        </header>
    )
}

export default Home
