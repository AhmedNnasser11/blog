import InnovationAndTech from "../Components/ InnovationAndTech/ InnovationAndTech"
import FeaturedPosts from "../Components/FeaturedPosts/FeaturedPosts"
import FadeSlider from "../Components/Slider/FadeSlider"

const Home = () => {
    return (
        <header style={{height: '4000px'}}>
            <FadeSlider />
            <FeaturedPosts />
            <InnovationAndTech />
        </header>
    )
}

export default Home
