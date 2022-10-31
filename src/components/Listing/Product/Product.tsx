import "./Product.scss";
import { IProduct } from "../../../utils/product.interface";
import coin_icon from "../../../assets/coin.webp";
import buy_icon_blue from "../../../assets/buy-blue.webp";
import buy_icon_white from "../../../assets/buy-white.webp";
import { requestHeaders } from "../../../utils/requestHeaders";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { context } from "../../Context/Context";

interface IProductProps extends IProduct {
    isOnCooldown: boolean;
    setIsOnCooldown: Dispatch<SetStateAction<boolean>>;
}

const Product = (props: IProductProps) => {
    const [isTouching, setIsTouching] = useState<boolean>(false);

    const { userData, retrieveData } = useContext(context);

    const handleBuy = () => {
        if (props.isOnCooldown) {
            toast("Esperá un poco...", { type: "info" });
        } else {
            axios
                .post(
                    `${import.meta.env.VITE_API_URL}/redeem`,
                    { productId: props._id },
                    requestHeaders
                )
                .then(() =>
                    toast(`¡Canjeado con éxito!`, {
                        type: "success",
                    })
                )
                .catch(() =>
                    toast("Ocurrió un error :(", {
                        type: "error",
                    })
                )
                .finally(() => {
                    retrieveData();
                    props.setIsOnCooldown(true);
                    setTimeout(() => props.setIsOnCooldown(false), 4000);
                });
        }
    };

    return (
        <article
            className={`product ${
                props.cost > userData.points && "not-enough"
            }`}>
            <img
                src={props.img.url}
                alt={props.name}
                width="100%"
                className="product-img"
            />
            <h4>{props.name}</h4>
            <div className="cost-container">
                <span>{props.cost}</span>
                <img src={coin_icon} alt="Icono de moneda" width={20} />
            </div>
            <button
                className="buy-button"
                onClick={() => props.cost <= userData.points && handleBuy()}
                onMouseEnter={() => setIsTouching(true)}
                onMouseLeave={() => setIsTouching(false)}
                onTouchStart={() => setIsTouching(true)}
                onTouchEnd={() => setIsTouching(false)}
                disabled={props.isOnCooldown}>
                <img
                    src={
                        !isTouching && props.cost <= userData.points
                            ? buy_icon_blue
                            : buy_icon_white
                    }
                    alt="Botón de compra"
                    width={50}
                />
            </button>
        </article>
    );
};

export default Product;
