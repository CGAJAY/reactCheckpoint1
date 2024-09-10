import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import product from "./Product.json";

const App = () => {
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
