import PropTypes from "prop-types";
const Description = ({ description }) => {
	return <span className="card-text">{description}</span>;
};

// Define prop types for the Description component
Description.propTypes = {
	description: PropTypes.string.isRequired, // 'description' must be a string and required
};

export default Description;
