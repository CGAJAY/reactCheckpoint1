// src/Image.js
// import React from "react";
import products from "./product";

const Image = () => {
	return (
		<img
			src={products.image}
			alt={products.name}
			className="img-fluid"
		/>
	);
};

export default Image;
