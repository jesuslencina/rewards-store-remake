import "./App.scss";
import { ContextWrapper } from "./components/Context/Context";
import Hero from "./components/Hero/Hero";
import Listing from "./components/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <ContextWrapper>
            <Navbar />
            <Hero />
            <Listing />
        </ContextWrapper>
    );
};

export default App;
