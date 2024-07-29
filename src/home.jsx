import AISection from "./components/AIsection"
import Features from "./components/features"
import Header from "./components/header"
import Hero from "./components/hero"
import Partner from "./components/partners"
import Tools from "./components/tools"

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Partner />
            <Features />
            <AISection />
            <Tools />
        </div>
    )
}

export default Home