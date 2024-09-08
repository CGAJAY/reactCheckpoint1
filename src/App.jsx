// src/App.js
import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";

const firstName = "YourFirstName"; // Replace with your actual first name

const App = () => {
	return (
		<div className="container mt-4">
			<Card className="text-center">
				<Card.Body>
					<Card.Title>
						<Name />
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						<Price />
					</Card.Subtitle>
					<Card.Text>
						<Description />
					</Card.Text>
					<Image />
				</Card.Body>
			</Card>
			<div className="mt-4 text-center">
				<h2>
					{firstName
						? `Hello, ${firstName}`
						: "Hello, there!"}
				</h2>
				{firstName && (
					<img
						src="https://via.placeholder.com/100"
						alt="Greeting"
						className="rounded-circle mt-2"
					/>
				)}
			</div>
		</div>
	);
};

export default App;
