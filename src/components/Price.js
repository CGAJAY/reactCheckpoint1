// src/Price.js
import React from "react";
import product from "./product";

const Price = () => {
	return (
		<span className="card-subtitle text-muted">
			{product.price}
		</span>
	);
};

export default Price;
