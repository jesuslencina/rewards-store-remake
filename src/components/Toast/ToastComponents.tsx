import { ToastContainer } from "react-toastify";

const ToastComponent = () => (
    <ToastContainer
        theme="colored"
        autoClose={2000}
        limit={2}
        hideProgressBar
        className="toast"
    />
);

export default ToastComponent;
