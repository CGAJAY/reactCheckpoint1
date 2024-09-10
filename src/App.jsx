import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import product from "./components/product";
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
