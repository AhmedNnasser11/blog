import FeaturedPosts from "../Components/FeaturedPosts/FeaturedPosts"
import FadeSlider from "../Components/Slider/FadeSlider"

const Home = () => {
    return (
        <header style={{height: '800px'}}>
            <FadeSlider />
            <FeaturedPosts />
        </header>
    )
}

export default Home
