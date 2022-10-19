import "./Navbar.scss";

import { useTransition } from "react-transition-state";

import logo from "../../assets/logo.webp";
import coin_icon from "../../assets/coin.webp";
import { FiPlus } from "react-icons/fi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useContext, useState } from "react";
import { context } from "../Context/Context";
import { requestHeaders } from "../../utils/requestHeaders";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
    const [menuClass, menuToggle] = useTransition({
        timeout: 500,
    });

    const [isOnCooldown, setIsOnCooldown] = useState<boolean>(false);

    const { userData, retrieveData } = useContext(context);

    const addPoints = () => {
        const possibleAmounts = [1000, 5000, 7500];

        const randomAmount = possibleAmounts[Math.floor(Math.random() * 4)];

        axios
            .post(
                `${import.meta.env.VITE_API_URL}/user/points`,
                { amount: randomAmount },
                requestHeaders
            )
            .then(() => toast(`¡${randomAmount} puntos canjeados!`))
            .catch(() => toast("Ocurrió un error :("))
            .finally(() => {
                retrieveData();
                setIsOnCooldown(true);

                setTimeout(() => setIsOnCooldown(false), 12000);
            });
    };

    return (
        <header>
            <img
                width={32}
                height={32}
                className="logo"
                src={logo}
                alt="Logo de la tienda de puntos. Es un barrilete color naranja"
            />

            <nav className={`menu ${menuClass.status}`}>
                <IoMdClose
                    color="white"
                    size={32}
                    className="close-icon"
                    onClick={() => menuToggle()}
                />
                <strong>Menú</strong>

                <div className="profile-area">
                    <p>{userData.name}</p>
                    <div>
                        <button onClick={addPoints} disabled={isOnCooldown}>
                            <FiPlus color="white" size={20} />
                        </button>
                        <button>
                            <MdOutlineHistoryToggleOff
                                color="white"
                                size={20}
                            />
                        </button>
                    </div>
                </div>

                <div className="coin-indicator">
                    <span>{userData.points}</span>
                    <img
                        width={24}
                        height={24}
                        src={coin_icon}
                        alt="Icono de moneda. Representación de la cantidad de puntos acumulados"
                    />
                </div>
            </nav>

            <HiOutlineMenuAlt3
                color="#6ed1ff"
                size={32}
                className="burger-menu"
                onClick={() => menuToggle()}
            />
        </header>
    );
};

export default Navbar;
