import "./Product.scss";
import { IProduct } from "../../../utils/product.interface";
import coin_icon from "../../../assets/coin.webp";

const Product = (props: IProduct) => {
    return (
        <article className="product">
            <img src={props.img.url} alt={props.name} width="100%" />
            <h4>{props.name}</h4>
            <div className="cost-container">
                <span>{props.cost}</span>
                <img src={coin_icon} alt="Icono de moneda" width={20} />
            </div>
        </article>
    );
};

export default Product;
