import React from 'react';
import PropTypes from 'prop-types';

const Picture = ({imgLink}) => {
	return (
		<img src={imgLink} alt="Artist image" />
	)
}

Picture.propTypes = {
	imgLink: PropTypes.string.isRequired,
}

export default Picture;