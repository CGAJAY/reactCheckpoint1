// src/Image.js
// import React from "react";
// import products from "./product";

const Image = ({ product }) => {
	const { name, image } = product;
	return (
		<img src={image} alt={name} className="img-fluid" />
	);
};

export default Image;
