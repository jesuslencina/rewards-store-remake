import { ToastContainer } from "react-toastify";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { ContextWrapper } from "./components/Context/Context";
import Hero from "./components/Hero/Hero";
import Listing from "./components/Listing/Listing";
import Navbar from "./components/Navbar/Navbar";
import ToastComponent from "./components/Toast/ToastComponents";

const App = () => {
    return (
        <>
            <ToastComponent />
            <ContextWrapper>
                <Navbar />
                <Hero />
                <Listing />
            </ContextWrapper>
        </>
    );
};

export default App;
