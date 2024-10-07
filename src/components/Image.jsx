import PropTypes from "prop-types";

const Image = ({ image, name }) => {
	return (
		<img src={image} alt={name} className="img-fluid" />
	);
};

// Define prop types for the Image component
Image.propTypes = {
	image: PropTypes.string.isRequired, // 'image' must be a string and required
	name: PropTypes.string.isRequired, // 'name' must be a string and required
};

export default Image;
