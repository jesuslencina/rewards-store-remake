import "./Listing.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IProduct } from "../../utils/product.interface";
import { requestHeaders } from "../../utils/requestHeaders";
import Product from "./Product/Product";
import coin_icon from "../../assets/coin.webp";
import { context } from "../Context/Context";

const Listing = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const [isOnCooldown, setIsOnCooldown] = useState<boolean>(false);

    const { userData } = useContext(context);

    const getProducts = () => {
        axios
            .get(`${import.meta.env.VITE_API_URL}/products`, requestHeaders)
            .then((response) => setProducts(response.data));
    };

    useEffect(getProducts, []);

    return (
        <section className="listing">
            {!products.length ? (
                <strong className="loading">Cargando...</strong>
            ) : (
                <>
                    <div className="container">
                        <h2>Catálogo</h2>

                        <div className="coin-indicator">
                            <span>{userData.points}</span>
                            <img
                                width={24}
                                height={24}
                                src={coin_icon}
                                alt="Icono de moneda. Representación de la cantidad de puntos acumulados"
                            />
                        </div>
                    </div>
                    <div className="products-container">
                        {products.map((product) => (
                            <Product
                                key={product._id}
                                {...product}
                                isOnCooldown={isOnCooldown}
                                setIsOnCooldown={setIsOnCooldown}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default Listing;
