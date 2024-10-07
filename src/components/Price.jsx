import PropTypes from "prop-types";
const Price = ({ price }) => {
	return (
		<span className="card-subtitle text-muted">
			{price}
		</span>
	);
};

// Define prop types for the Price component
Price.propTypes = {
	price: PropTypes.string.isRequired, // 'name' must be a string and required
};

export default Price;
