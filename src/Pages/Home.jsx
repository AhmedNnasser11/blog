import InnovationAndTech from "../Components/ InnovationAndTech/ InnovationAndTech"
import FeaturedPosts from "../Components/FeaturedPosts/FeaturedPosts"
import FadeSlider from "../Components/Slider/FadeSlider"
import MostPopular from "../Components/MostPopular/MostPopular"

const Home = () => {
    return (
        <header style={{height: '4000px'}}>
            <FadeSlider />
            <FeaturedPosts />
            <InnovationAndTech />
            <MostPopular />
        </header>
    )
}

export default Home
