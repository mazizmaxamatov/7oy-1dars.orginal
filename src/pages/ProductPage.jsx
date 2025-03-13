import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const products = [
    { id: 1, description: "Қора камера 48/68 px", price: "6 999 999 uzs", installment: "6 oy / 1 200 000 uzs" },
    { id: 2, description: "120Hz AMOLED экран", price: "10 499 999 uzs", installment: "12 oy / 875 000 uzs" },
    { id: 3, description: "48MP камера, Dynamic Island", price: "15 999 999 uzs", installment: "12 oy / 1 333 333 uzs" },
    { id: 4, description: "Google AI bilan kuchaytirilgan kamera", price: "8 999 999 uzs", installment: "6 oy / 1 500 000 uzs" },
];

function ProductPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Mahsulot topilmadi</h2>;
    }

    return (
        <div className="product-page">
            <h5></h5>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h4>Narxi: {product.price}</h4>
            <h3>Bo‘lib to‘lash: {product.installment}</h3>
            <div className="back-button-container">
                <Link to="/" className="back-button">Orqaga qaytish</Link>
            </div>
        </div>
    );
}

export default ProductPage;
