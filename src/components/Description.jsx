// src/Description.js
// import React from "react";
// import products from "../Product";

const Description = ({ product }) => {
	const { description } = product;
	return <span className="card-text">{description}</span>;
};

export default Description;
