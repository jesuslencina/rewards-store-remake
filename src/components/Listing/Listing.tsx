import axios from "axios";
import { useState } from "react";
import { IProduct } from "../../utils/product.interface";
import { requestHeaders } from "../../utils/requestHeaders";

const Listing = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getProducts = () => {
        console.log(import.meta.env.VITE_TOKEN);

        axios
            .get(import.meta.env.VITE_API_URL, requestHeaders)
            .then((response) => console.log(response));
    };

    return (
        <section>
            <button onClick={getProducts}>ACA</button>
        </section>
    );
};

export default Listing;
