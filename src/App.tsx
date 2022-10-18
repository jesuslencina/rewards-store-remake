import "./App.scss";
import Hero from "./components/Hero/Hero";
import Listing from "./components/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Listing />
        </>
    );
};

export default App;
