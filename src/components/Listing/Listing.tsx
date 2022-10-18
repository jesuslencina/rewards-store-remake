import "./Listing.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../../utils/product.interface";
import { requestHeaders } from "../../utils/requestHeaders";
import Product from "./Product/Product";

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
                    <h2>Catálogo</h2>
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
