import "./Product.scss";
import { IProduct } from "../../../utils/product.interface";
import coin_icon from "../../../assets/coin.webp";
import buy_icon from "../../../assets/buy-blue.webp";

const Product = (props: IProduct) => {
    return (
        <article className="product">
            <img src={props.img.url} alt={props.name} width="100%" />
            <h4>{props.name}</h4>
            <div className="cost-container">
                <span>{props.cost}</span>
                <img src={coin_icon} alt="Icono de moneda" width={20} />
            </div>
            <button className="buy-button">
                <img src={buy_icon} alt="Botón de compra" width={50} />
            </button>
        </article>
    );
};

export default Product;
