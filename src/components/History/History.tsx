import { useContext } from "react";
import { context } from "../Context/Context";
import { IoMdClose } from "react-icons/io";
import coin_icon from "../../assets/coin.webp";
import "./History.scss";

const History = () => {
    const { userData, historyOpen, switchHistoryOpen } = useContext(context);

    return (
        <div className={`modal-bg ${historyOpen ? "open" : "closed"}`}>
            <section className="modal-body">
                <p className="close-p">
                    <IoMdClose
                        color="black"
                        size={30}
                        className="close-icon"
                        onClick={switchHistoryOpen}
                    />
                </p>
                <h2>History</h2>
                <div className="history-container">
                    {userData.redeemHistory.map((item) => (
                        <article key={item._id} className="history-item">
                            <img
                                src={item.img.url}
                                alt={item.name}
                                width={100}
                                className="item-img"
                            />
                            <div className="text">
                                <strong>{item.name}</strong>
                                <div className="cost-container">
                                    <span>{item.cost}</span>
                                    <img
                                        src={coin_icon}
                                        alt="Icono de moneda"
                                        width={20}
                                    />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default History;
