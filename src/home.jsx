import Features from "./components/features"
import Header from "./components/header"
import Hero from "./components/hero"
import Partner from "./components/partners"

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Partner />
            <Features />
        </div>
    )
}

export default Home