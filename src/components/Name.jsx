import PropTypes from "prop-types";
const Name = ({ name }) => {
	return <h3 className="card-title">{name}</h3>;
};

// Define prop types for the Name component
Name.propTypes = {
	name: PropTypes.string.isRequired, // 'name' must be a string and required
};

export default Name;
