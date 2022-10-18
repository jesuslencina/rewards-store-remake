import "./Listing.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../../utils/product.interface";
import { requestHeaders } from "../../utils/requestHeaders";
import Product from "./Product/Product";
import coin_icon from "../../assets/coin.webp";

const Listing = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getProducts = () => {
        axios
            .get(import.meta.env.VITE_API_URL, requestHeaders)
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
                            <span>5000</span>
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
                            <Product key={product._id} {...product} />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default Listing;
