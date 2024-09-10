// src/Price.js
// import React from "react";
import products from "./product";

const Price = () => {
	return (
		<span className="card-subtitle text-muted">
			{products.price}
		</span>
	);
};

export default Price;
