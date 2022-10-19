import { ToastContainer } from "react-toastify";

const ToastComponent = () => (
    <ToastContainer
        theme="colored"
        autoClose={2000}
        limit={2}
        hideProgressBar
        style={{ paddingLeft: "25%", marginTop: "1vh" }}
    />
);

export default ToastComponent;
