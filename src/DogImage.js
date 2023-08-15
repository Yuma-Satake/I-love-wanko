// DO NOT DELETE
import React from 'react';
import PropTypes from 'prop-types';

const DogImage = ({ url }) => {
  return <img src={url} alt="わんこの画像" id="randomDogImage" />;
};

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export { DogImage };
