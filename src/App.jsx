import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<button className="tn btn-primary">Hello</button>
		</>
	);
}

export default App;
