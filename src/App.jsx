import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import product from "./Product";

const App = () => {
	const product = {
		name: "Gaming Laptop",
		price: "$1,499.99",
		description:
			"High-performance gaming laptop with a powerful GPU and fast refresh rate display.",
		image:
			"https://images.unsplash.com/photo-1640695257754-7e2932f9ad0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	};

	console.log(product);

	return (
		<div className="container mt-4">
			<Card className="text-center">
				<Card.Body>
					<Card.Title>
						<Name product={product} />
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						<Price product={product} />
					</Card.Subtitle>
					<Card.Text>
						<Description product={product} />
					</Card.Text>
					<Image product={product} />
				</Card.Body>
			</Card>
		</div>
	);
};

export default App;
