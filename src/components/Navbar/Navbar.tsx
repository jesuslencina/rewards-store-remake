import "./Navbar.scss";

import { useTransition } from "react-transition-state";

import logo from "../../assets/logo.webp";
import coin_icon from "../../assets/coin.webp";
import { FiPlus } from "react-icons/fi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [menuClass, menuToggle] = useTransition({
        timeout: 500,
    });

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
                    <p>Jesús</p>
                    <div>
                        <button>
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
                    <span>5000</span>
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
