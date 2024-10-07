import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import product from "./Product.json";
import Name from "./components/Name.jsx";
import Description from "./components/Description.jsx";
import Image from "./components/Image.jsx";
import Price from "./components/Price.jsx";
const App = () => {
	const { description, name, price, image } = product;

	return (
		<div className="container mt-4">
			<Card className="text-center">
				<Card.Body>
					<Card.Title>
						<Name name={name} />
					</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						<Price price={price} />
					</Card.Subtitle>
					<Card.Text>
						<Description description={description} />
					</Card.Text>
					<Image image={image} name={name} />
				</Card.Body>
			</Card>
		</div>
	);
};

export default App;
