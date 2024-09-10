// src/Price.js
// import React from "react";
// import products from "./product";

const Price = ({ product }) => {
	const { price } = product;

	return (
		<span className="card-subtitle text-muted">
			{price}
		</span>
	);
};

export default Price;
