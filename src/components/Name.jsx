// src/Name.js
// import React from "react";
// import products from "./product";

const Name = ({ product }) => {
	const { name } = product;
	return <h3 className="card-title">{name}</h3>;
};

export default Name;
