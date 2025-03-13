import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const products = [
        { id: 1, description: "Қора камера 48/68 px", price: "6 999 999 uzs", installment: "6 oy / 1 200 000 uzs" },
        { id: 2, description: "120Hz AMOLED экран", price: "10 499 999 uzs", installment: "12 oy / 875 000 uzs" },
        { id: 3, description: "48MP камера, Dynamic Island", price: "15 999 999 uzs", installment: "12 oy / 1 333 333 uzs" },
        { id: 4, description: "Google AI bilan kuchaytirilgan kamera", price: "8 999 999 uzs", installment: "6 oy / 1 500 000 uzs" },
        { id: 5, description: "Snapdragon 8 Gen 2, 100W tezkor quvvat", price: "9 499 999 uzs", installment: "6 oy / 1 583 333 uzs" },
        { id: 6, description: "AMOLED ekran, 108MP kamera", price: "4 999 999 uzs", installment: "6 oy / 833 333 uzs" },
        { id: 7, description: "5000mAh batareya, 5G qo‘llab-quvvatlash", price: "5 999 999 uzs", installment: "6 oy / 999 999 uzs" },
        { id: 8, description: "50MP selfie kamera, MediaTek chipset", price: "6 499 999 uzs", installment: "6 oy / 1 083 333 uzs" },
    ];

    return (
        <div className="slider-container">
            <Slider className="slider" {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="card">
                        <Link to={`/product/${product.id}`} className="card-link">
                            <h5>{product.name}</h5>
                            <p className="card-description">{product.description}</p>
                            <h4 className="card-price">{product.price}</h4>
                            <h3 className="card-installment">{product.installment}</h3>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Card;

























/*
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Card() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const products = [
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
        "Смартфон Xiaomi 12 Lite 8/128Gb Қора камера 48/68 px",
    ];

    return (
        <div className="slider-container">
            <Slider className="slider" {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="card">
                        <h5></h5>
                        <p className="card-description">{product}</p>
                        <h4 className="card-price">6 999 999 uzs</h4>
                        <h3 className="card-installment">6 oy / 1 200 000 uzs</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Card;
*/